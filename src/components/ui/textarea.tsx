import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[104px] resize-y rounded-[10px] border border-input bg-background px-[14px] py-[13px] font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-mute-3/80 focus-visible:border-primary aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
