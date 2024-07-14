import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "@/pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const Router: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Router
