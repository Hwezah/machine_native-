import type { ComponentProps } from "react";

/**
 * Heading whose words are each wrapped in an overflow-hidden mask so
 * <Animations> can slide them up. The full text stays in an aria-label.
 */
export function SplitHeading({
  as: Tag = "h1",
  children,
  ...props
}: { as?: "h1" | "h2"; children: string } & Omit<ComponentProps<"h1">, "children">) {
  const words = children.split(/\s+/).filter(Boolean);
  return (
    <Tag data-split aria-label={children} {...props}>
      {words.map((w, i) => (
        <span key={i} aria-hidden>
          <span className="inline-block overflow-hidden pb-[.08em] align-top">
            <span className="mn-w inline-block will-change-transform">{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
