import { useEffect, useState } from "react"

import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { useMobileDrawerStore } from "@/store/mobileDrawerStore"

import { colors } from "@/styles/colors"

import { headerNavItems, headerNavItemsType } from "./header"

enum NavItemColor {
  DEFAULT = 0,
  HOVER = 1
}

export function MobileDrawer() {
  const { mobileDrawerIsOpen, setMobileDrawer } = useMobileDrawerStore(
    (state) => ({
      mobileDrawerIsOpen: state.mobileDrawer.isOpen,
      setMobileDrawer: state.setMobileDrawer
    })
  )

  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    if (!mobileDrawerIsOpen) setShowDrawer(false)
  }, [mobileDrawerIsOpen])

  return (
    <AnimatePresence>
      {mobileDrawerIsOpen && (
        <motion.div
          initial={{ backdropFilter: "brightness(1)" }}
          animate={{ backdropFilter: " brightness(0.6)" }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setShowDrawer(true)}
          className="fixed z-10 h-screen w-full"
        >
          {showDrawer && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { ease: "easeOut" } }}
              exit={{ x: "100%" }}
              className={clsx(
                "absolute right-0 z-20 h-full w-3/4 border-l border-zinc-700 bg-zync-950 text-zinc-100",
                {
                  hidden: !showDrawer
                }
              )}
            >
              <div className="mb-2 flex w-full flex-row items-center justify-between border-b border-zync-800 px-4 py-2 text-xl">
                <h1>Biblioteca Pocket</h1>
                <X
                  onClick={() => setMobileDrawer(false)}
                  size={32}
                  absoluteStrokeWidth
                  color={colors.zync[100]}
                />
              </div>
              <div className="h-full w-full overflow-auto px-4 pb-16">
                <ul className="flex cursor-pointer flex-col gap-2">
                  {headerNavItems.map((item) => (
                    <NavItem key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavItem({ ...props }: headerNavItemsType) {
  const [itemColor, setItemColor] = useState(NavItemColor.DEFAULT)

  const { setMobileDrawer } = useMobileDrawerStore((state) => ({
    setMobileDrawer: state.setMobileDrawer
  }))

  return (
    <motion.li
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: props.delay } }}
      onTouchStart={() => {
        setItemColor(NavItemColor.HOVER)
      }}
      onTouchEnd={() => setItemColor(NavItemColor.DEFAULT)}
      onHoverStart={() => {
        setItemColor(NavItemColor.HOVER)
      }}
      onHoverEnd={() => setItemColor(NavItemColor.DEFAULT)}
      className={clsx(
        "flex items-center gap-2 px-4 py-1 text-lg transition-colors",
        {
          "rounded-md bg-zinc-700 text-accent-500":
            itemColor === NavItemColor.HOVER,
          "text-zinc-200": itemColor === NavItemColor.DEFAULT
        }
      )}
      onClick={() => {
        setMobileDrawer(false)
        document.getElementById(props.tagId)?.scrollIntoView({
          behavior: "smooth"
        })
      }}
    >
      {
        <props.icon
          className="transition-colors"
          size={24}
          absoluteStrokeWidth
          color={
            NavItemColor.HOVER === itemColor
              ? colors.accent[500]
              : colors.zync[200]
          }
        />
      }{" "}
      {props.name}
    </motion.li>
  )
}
