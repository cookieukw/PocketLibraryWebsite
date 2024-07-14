import type { Config } from "tailwindcss"

import { animation, keyframes } from "./src/styles/animations"
import { colors } from "./src/styles/colors"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors, animation, keyframes }
  },
  plugins: []
} satisfies Config
