"use client";

import React from "react";
import clsx from "clsx";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "text-preset-6 font-sans font-semibold",
        "flex items-center justify-center",
        "rounded-10 transition-colors duration-300",
        "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-700",
        "text-neutral-900", // Couleur de texte sur fond bleu clair
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "h-[51px]",
        "w-[169px]",
        "px-[24px] py-[12px]",
        className
      )}
    >
      {children}
    </button>
  );
}
