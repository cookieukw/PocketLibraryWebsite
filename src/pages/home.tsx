import React, { useState } from "react"

import { Player } from "@lottiefiles/react-lottie-player"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion"
import {
  ArrowUp,
  CloudDownload,
  ExternalLink,
  GithubIcon,
  Globe,
  Play,
  X
} from "lucide-react"

import Button from "@/components/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { MobileDrawer } from "@/components/mobileDrawer"

import image1 from "@/assets/image_01.png?url"
import image2 from "@/assets/image_02.png?url"
import image3 from "@/assets/image_03.png?url"
import image4 from "@/assets/image_04.png?url"
import image5 from "@/assets/image_05.png?url"
import heroLottie from "@/assets/lotties/hero.json"
import { colors } from "@/styles/colors"

const images: { id: number; path: string }[] = [
  { id: 1, path: image1 },
  { id: 2, path: image2 },
  { id: 3, path: image3 },
  { id: 4, path: image4 },
  { id: 5, path: image5 }
]

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const [isPageScrolled, setIsPageScrolled] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{
    id: string
    path: string
  } | null>(null)

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsPageScrolled(value > 0.2)
  })

  return (
    <main className="overflow-x-hidden bg-zinc-900">
      <MobileDrawer />
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            layoutId={selectedImage.id}
            className="absolute inset-0 z-50 flex h-full w-full items-center justify-center backdrop-brightness-[0.2]"
            style={{ top: window.scrollY + "px" }}
          >
            <img src={selectedImage.path} className="h-screen" />
            <motion.button
              onClick={() => {
                setSelectedImage(null)
                document.body.style.overflow = "auto"
              }}
            >
              <X
                size={32}
                color={colors.zync[50]}
                className="absolute right-2 top-2"
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isPageScrolled && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { ease: "easeOut" } }}
            exit={{ y: "150%" }}
            className="fixed bottom-2 right-2 z-10 rounded-md bg-zync-800 p-2 opacity-80 transition-colors hover:bg-zync-700"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={32} color={colors.zync[50]} />
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="h-screen w-full border-b border-zync-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="square-grid absolute inset-0 animate-squareGridMove"
        />
        <Header className="absolute z-[1]" />
        <div className="relative flex h-screen w-full flex-nowrap justify-center gap-5 px-6">
          <div className="h-screen w-full max-w-2xl">
            <div className="flex h-screen w-full flex-col items-center justify-center lg:items-start">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="text-center text-4xl font-bold text-accent-50 sm:text-6xl lg:text-left"
              >
                Leia livros em{" "}
                <span className="bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  domínio público{" "}
                </span>
                com a{" "}
                <span className="bg-gradient-to-b from-accent-500 to-accent-700 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,73,93,0.3)]">
                  Biblioteca Pocket
                </span>
              </motion.h1>

              <div className="mt-4 grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-2">
                <Button
                  onClick={() => {
                    document.getElementById("download")?.scrollIntoView({
                      behavior: "smooth"
                    })
                  }}
                  className="hover:drop-shadow-[0_0_10px_rgba(234,73,93,0.5)]"
                >
                  <CloudDownload size={32} absoluteStrokeWidth />
                  Baixar agora
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://github.com/cookieukw/PocketLibrary")
                  }
                  variant="secondary"
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon size={32} absoluteStrokeWidth />
                    Ver no Github
                  </div>
                  <ExternalLink size={24} absoluteStrokeWidth />
                </Button>
                <Button
                  onClick={() =>
                    (window.location.href = "https://b-pocket.vercel.app/")
                  }
                  variant="secondary"
                  className="flex gap-4 sm:col-span-2"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={32} absoluteStrokeWidth />
                    Abrir versão web
                  </div>
                  <ExternalLink size={24} absoluteStrokeWidth />
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex h-screen w-full min-w-[450px] max-w-lg items-center justify-center"
            >
              <Player src={heroLottie} loop autoplay />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-10 w-full max-w-[90%] border-b-2 border-dashed border-zinc-600"
          />
        </div>
      </section>
      <section
        id="images"
        className="flex w-full flex-col items-center border-b border-zinc-700"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              stiffness: 100,
              type: "spring"
            }
          }}
          className="mb-6 mt-4 text-3xl font-bold text-zinc-50"
        >
          Imagens
        </motion.h2>
        <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4 p-4">
          {images.map((item) => (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.2,
                  stiffness: 100,
                  type: "spring"
                }
              }}
              key={item.id}
              src={item.path}
              layoutId={item.id.toString()}
              className="w-[300px] rounded-xl drop-shadow-xl"
              onClick={() => {
                setSelectedImage({
                  id: item.id.toString(),
                  path: item.path
                })
                document.body.style.overflow = "hidden"
              }}
            />
          ))}
        </div>
      </section>
      <section id="download" className="relative h-screen w-full">
        <div className="dotted-grid absolute inset-0" />
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <h2 className="z-10 mb-6 text-center text-4xl font-bold text-zinc-50 md:text-5xl">
            Vamos começar?
          </h2>
          <div className="relative flex w-full justify-around gap-6 px-6">
            <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center">
              <h3 className="max-w-xl text-center text-3xl font-bold text-zinc-50 md:text-4xl">
                Baixe a{" "}
                <span className="bg-gradient-to-b from-accent-500 to-accent-700 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,73,93,0.3)]">
                  Biblioteca Pocket
                </span>{" "}
                <span className="bg-gradient-to-b from-green-300 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
                  gratuitamente
                </span>
              </h3>
              <div className="mt-5 flex w-full flex-col gap-4">
                <Button
                  variant="primary"
                  className="flex justify-evenly gap-4"
                  disabled
                >
                  <div className="flex items-center gap-2">
                    <Play size={32} absoluteStrokeWidth />
                    Baixar via Play Store (em breve)
                    <ExternalLink size={24} absoluteStrokeWidth />
                  </div>
                </Button>
                <Button
                  variant="secondary"
                  className="flex justify-evenly gap-4"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon size={32} absoluteStrokeWidth />
                    Baixar via GitHub Releases (APK)
                    <ExternalLink size={24} absoluteStrokeWidth />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
