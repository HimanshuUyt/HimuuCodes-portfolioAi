"use client";

import React from "react";

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "glass"
    | "gradient"
    | "ghost";

  size?: "sm" | "md" | "lg";
}

export default function Badge({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "border-slate-700 bg-slate-800 text-slate-100",

    primary:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",

    secondary:
      "border-violet-500/30 bg-violet-500/10 text-violet-400",

    success:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

    warning:
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

    danger:
      "border-red-500/30 bg-red-500/10 text-red-400",

    outline:
      "border-white/20 bg-transparent text-white",

    glass:
      "border-white/10 bg-white/5 text-white backdrop-blur",

    gradient:
      "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white border-transparent",

    ghost:
      "border-transparent bg-transparent text-slate-300",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border font-medium transition-all whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}