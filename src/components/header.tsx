import React from "react"
import { useNavigate } from "react-router-dom"

import clsx from "clsx"
import { motion } from "framer-motion"

import logo from "@/assets/logo.png?url"

function Header({ className, ...rest }: React.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate()

  return (
    <header
      className={clsx(
        "flex w-full items-center justify-between gap-4 p-4",
        {},
        className
      )}
      {...rest}
    >
      <nav className="flex items-center gap-4">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          src={logo}
          alt="logo"
          width={64}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="flex cursor-pointer gap-4 text-xl text-zinc-50">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hover:text-accent-500"
          >
            Início
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hover:text-accent-500"
          >
            Funcionalidades
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="hover:text-accent-500"
          >
            Download
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
