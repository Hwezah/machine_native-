import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[color,background-color,border-color,opacity] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 cursor-pointer",
  {
    variants: {
      variant: {
        // Acid-lime primary CTA
        default: "bg-primary text-primary-foreground hover:bg-ink hover:text-background",
        // Bone button (hero "See the work")
        bone: "bg-ink text-background hover:bg-primary hover:text-primary-foreground",
        // Hairline outline
        outline: "border border-white/18 text-ink hover:border-primary hover:text-primary",
        ghost: "text-mute-3 hover:text-ink",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-[15px] text-[15px]",
        sm: "px-[18px] py-[11px] font-mono text-xs uppercase tracking-[.04em]",
        lg: "px-7 py-[15px] text-[15px]",
        block: "w-full px-5 py-[14px] text-[14.5px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
