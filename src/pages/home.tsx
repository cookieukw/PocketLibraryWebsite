import React from "react"

import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
import { CloudDownload, ExternalLink, GithubIcon, Play } from "lucide-react"

import Button from "@/components/button"
import Footer from "@/components/footer"
import Header from "@/components/header"

import logo from "@/assets/logo.png?url"
import heroLottie from "@/assets/lotties/hero.json"

const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden bg-zinc-900">
      <section id="#home" className="h-screen w-full border-b border-zync-950">
        <div className="mesh-gradient absolute inset-0 opacity-30" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="square-grid absolute inset-0 animate-squareGridMove"
        />
        <Header className="absolute z-10" />
        <div className="relative flex h-screen w-full justify-center gap-5">
          <div className="h-screen w-full max-w-2xl">
            <div className="flex h-screen w-full flex-col items-center justify-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="text-6xl font-bold text-accent-50"
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
              <div className="mt-4 flex w-full gap-4">
                <Button className="hover:drop-shadow-[0_0_10px_rgba(234,73,93,0.5)]">
                  <CloudDownload size={32} absoluteStrokeWidth />
                  Baixar agora
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://github.com/cookieukw/PocketLibrary")
                  }
                  variant="secondary"
                  className="flex justify-evenly gap-4"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon size={32} absoluteStrokeWidth />
                    Ver no Github
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-10 w-full max-w-[90%] border-b-2 border-dashed border-zinc-600"
          />
        </div>
      </section>
      <section id="features" className="h-screen w-full"></section>
      <section id="download" className="relative h-screen w-full">
        <div className="dotted-grid absolute inset-0" />
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold text-zinc-50">
            Vamos começar?
          </h2>
          <div className="relative flex w-full justify-center gap-5">
            <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center px-6">
              <h2 className="max-w-xl text-center text-4xl font-bold text-zinc-50">
                Baixe a{" "}
                <span className="bg-gradient-to-b from-accent-500 to-accent-700 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,73,93,0.3)]">
                  Biblioteca Pocket
                </span>{" "}
                <span className="bg-gradient-to-b from-green-300 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
                  gratuitamente
                </span>
              </h2>
              <div className="mt-4 flex w-full flex-col gap-4">
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

            <div className="flex h-full w-full max-w-2xl items-center justify-center">
              <img
                className="animate-flying logo-outline"
                src={logo}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
