"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base button styles
  "inline-flex items-center justify-center whitespace-nowrap rounded-full " +
    "text-xs md:text-sm font-semibold uppercase tracking-[0.16em] " +
    "ring-offset-background transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/80 focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // MAIN STYLE: white pill, dark text
        default:
          "bg-white text-slate-900 border border-white/80 shadow-sm " +
          "hover:bg-slate-100 hover:border-white",

        // outline: use for secondary actions on dark background
        outline:
          "border border-slate-500/60 bg-transparent text-slate-100 " +
          "hover:bg-slate-900/40",

        ghost:
          "bg-transparent text-slate-100 hover:bg-slate-900/40 border border-transparent",

        link:
          "bg-transparent text-slate-100 underline-offset-4 hover:underline border-none px-0",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm: "h-9 px-6 py-2",
        lg: "h-12 px-10 py-3.5",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
