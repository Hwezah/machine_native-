"use client";

import { useEffect, useRef } from "react";
import { useSite } from "@/context/site-context";

const VERT = `
attribute vec2 position;
void main(){ gl_Position = vec4(position, 0.0, 1.0); }
`;

// Ported verbatim from the prototype's initThree() fragment shader.
const FRAG = `
precision highp float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform vec3 uAccent; uniform float uGrain;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x), mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x), f.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.03; a*=0.5; } return v; }
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv; p.x *= uRes.x/uRes.y;
  float t = uTime*0.045;
  float f = fbm(p*2.6 + vec2(t, -t*0.7) + fbm(p*1.4 - t*0.5)*0.9);
  float lines = smoothstep(0.42, 0.52, abs(fract(f*5.0)-0.5));
  vec2 m = uMouse; m.x *= uRes.x/uRes.y;
  float glow = exp(-distance(p, m)*2.1);
  vec3 base = vec3(0.043,0.043,0.047);
  vec3 col = base + vec3(0.055)*(1.0-lines)*smoothstep(0.85,0.0,uv.y);
  col += uAccent * glow * 0.10;
  col += uAccent * (1.0-lines) * 0.022 * smoothstep(0.9,0.1,uv.y);
  float g = (hash(gl_FragCoord.xy + fract(uTime)*90.0)-0.5)*0.032*uGrain;
  col += g;
  gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

/** Full-viewport WebGL noise field with contour lines, cursor glow and film grain. */
export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { accent, grain, reducedMotion } = useSite();
  const live = useRef({ accent, grain, reducedMotion });

  useEffect(() => {
    live.current = { accent, grain, reducedMotion };
  }, [accent, grain, reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: true, alpha: true });
    if (!canvas || !gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uAccent = gl.getUniformLocation(prog, "uAccent");
    const uGrain = gl.getUniformLocation(prog, "uGrain");

    const mouse = { x: 0.5, y: 0.4 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    const onPointer = (e: PointerEvent) => {
      if (live.current.reducedMotion) return;
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1 - e.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    const start = performance.now();
    let raf = 0;
    const loop = () => {
      const { accent, grain, reducedMotion } = live.current;
      gl.uniform1f(uTime, reducedMotion ? 0 : (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform3f(uAccent, ...hexToRgb(accent));
      gl.uniform1f(uGrain, grain ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_0%,rgba(11,11,12,0)_40%,rgba(11,11,12,.85)_100%)]"
      />
    </>
  );
}
