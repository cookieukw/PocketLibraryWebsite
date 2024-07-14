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
        scale: 0.95
      }}
      whileHover={{
        scale: 1.05
      }}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg text-accent-50",
        {
          "bg-accent-500 hover:bg-accent-600": variant === "primary",
          "border border-zinc-700 bg-zinc-800 hover:bg-zinc-900":
            variant === "secondary"
        },
        className
      )}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
