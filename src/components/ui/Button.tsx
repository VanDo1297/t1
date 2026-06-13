"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#c75435] text-white hover:bg-[#d96547]",
  outline:
    "border-2 border-[#c75435] text-[#c75435] hover:bg-[#c75435] hover:text-white",
  ghost:
    "text-[#141414]/70 hover:text-[#141414] hover:bg-[#141414]/5",
};

const sizeClasses = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-7 py-3 text-[14.8px]",
  lg: "px-9 py-4 text-[14.8px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full font-semibold leading-[1.4] tracking-[0.01rem] transition-shadow duration-150 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
