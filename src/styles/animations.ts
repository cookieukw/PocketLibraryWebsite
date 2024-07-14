export const animation = {
  squareGridMove: "squareGridMoveAnim 2.5s linear infinite",
  flying: "flyingAnim 5s ease-in-out infinite"
}

export const keyframes = {
  squareGridMoveAnim: {
    "0%": { backgroundPosition: "0 0" },
    "100%": { backgroundPosition: "40px -40px" }
  },

  flyingAnim: {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
    "100%": { transform: "translateY(0px)" }
  }
}
