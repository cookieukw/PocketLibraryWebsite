import React from "react"
import { useNavigate } from "react-router-dom"

import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { DownloadCloud, Home, LucideProps, MenuIcon, Star } from "lucide-react"

import { useMobileDrawerStore } from "@/store/mobileDrawerStore"

import logo from "@/assets/logo.png?url"
import { colors } from "@/styles/colors"

export type headerNavItemsType = {
  id: number
  name: string
  tagId: string
  delay: number
  icon: React.FC<LucideProps>
}

export const headerNavItems: headerNavItemsType[] = [
  { id: 1, name: "Início", tagId: "home", delay: 0.3, icon: Home },
  { id: 2, name: "Imagens", tagId: "images", delay: 0.4, icon: Star },
  {
    id: 3,
    name: "Download",
    tagId: "download",
    delay: 0.5,
    icon: DownloadCloud
  }
]

function Header({ className, ...rest }: React.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate()

  const { mobileDrawerIsOpen, setMobileDrawer } = useMobileDrawerStore(
    (state) => ({
      mobileDrawerIsOpen: state.mobileDrawer.isOpen,
      setMobileDrawer: state.setMobileDrawer
    })
  )

  return (
    <header
      className={clsx(
        "w-full items-center justify-between gap-4 p-4",
        {},
        className
      )}
      {...rest}
    >
      <nav className="hidden items-center gap-4 sm:flex">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.3 } }}
          src={logo}
          alt="logo"
          width={64}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="flex cursor-pointer gap-4">
          {headerNavItems.map((item) => (
            <motion.li
              key={item.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: item.delay } }}
              className="text-xl text-zinc-50 transition-colors hover:text-accent-500"
              onClick={() => {
                setMobileDrawer(false)
                document.getElementById(item.tagId)?.scrollIntoView({
                  behavior: "smooth"
                })
              }}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="flex h-full w-full justify-end sm:hidden">
        <AnimatePresence>
          {!mobileDrawerIsOpen && (
            <MenuIcon
              onClick={() => setMobileDrawer(!mobileDrawerIsOpen)}
              size={32}
              absoluteStrokeWidth
              color={colors.zync[100]}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
