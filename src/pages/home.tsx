import React from "react"

import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
import { CloudDownload, ExternalLink, GithubIcon } from "lucide-react"

import Button from "@/components/button"
import Header from "@/components/header"

import heroLottie from "@/assets/lotties/hero.json"

const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden bg-zinc-900">
      <section id="home" className="h-screen w-full">
        <Header className="absolute" />
        <div className="flex h-screen w-full justify-center gap-5">
          <div className="h-screen w-full max-w-2xl">
            <div className="flex h-screen w-full flex-col items-center justify-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="text-6xl font-bold text-accent-50"
              >
                Leia livros em{" "}
                <span className="bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  domínio público{" "}
                </span>
                com a{" "}
                <span className="bg-gradient-to-b from-accent-500 to-accent-700 bg-clip-text text-transparent">
                  Biblioteca Pocket
                </span>
              </motion.h1>
              <div className="mt-4 flex w-full gap-4">
                <Button>
                  <CloudDownload size={32} absoluteStrokeWidth />
                  <motion.div>Baixar agora</motion.div>
                </Button>
                <Button
                  variant="secondary"
                  className="flex justify-evenly gap-4"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon size={32} absoluteStrokeWidth />
                    <motion.div>Ver no Github</motion.div>
                  </div>
                  <ExternalLink size={24} absoluteStrokeWidth />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex h-screen w-full max-w-2xl items-center justify-center"
            >
              <Player src={heroLottie} loop autoplay />
            </motion.div>
          </div>
          <div className="absolute bottom-10 w-full max-w-[90%] border-b-8 border-dashed border-zinc-600"></div>
        </div>
      </section>
      <section id="features"></section>
      <section id="download"></section>
    </main>
  )
}

export default Home
