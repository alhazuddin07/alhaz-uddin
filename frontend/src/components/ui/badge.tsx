import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "outline" | "secondary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    secondary: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    outline: "text-slate-300 border-slate-700/50 bg-slate-900/60",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
