import React from "react"

import clsx from "clsx"
import { motion, MotionProps } from "framer-motion"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    variant?: "primary" | "secondary"
  }

export default function Button({
  children,
  variant = "primary" || "secondary",
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" }
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95
      }}
      whileHover={{
        scale: disabled ? 1 : 1.05
      }}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-lg text-accent-50 transition-colors",
        {
          "bg-accent-500 hover:bg-accent-600": variant === "primary",
          "border border-zinc-700 bg-zinc-800 hover:bg-zinc-900":
            variant === "secondary",
          "cursor-not-allowed italic": disabled,
          "bg-accent-900 text-accent-300 hover:bg-accent-900":
            disabled && variant === "primary",
          "bg-zinc-900 text-zinc-500": disabled && variant === "secondary"
        },
        className
      )}
      {...rest}
      onClick={disabled ? () => {} : rest.onClick}
    >
      {children}
    </motion.button>
  )
}
