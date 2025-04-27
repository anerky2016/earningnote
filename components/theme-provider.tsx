"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    try {
      const body = document.body
      let theme = "dark"
      
      // Check localStorage for theme
      if (typeof window !== "undefined") {
        theme = localStorage.getItem("theme") || "dark"
        // Validate theme value
        if (!["light", "dark"].includes(theme)) {
          theme = "dark"
          localStorage.setItem("theme", theme)
        }
      }

      // Apply theme class
      body.classList.remove("light", "dark")
      body.classList.add(theme)
      
      // Force re-render to prevent flicker
      body.style.display = "none"
      setTimeout(() => {
        body.style.display = ""
      }, 0)
    } catch (error) {
      console.error("Theme initialization error:", error)
    }
  }, [])

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} 
      storageKey="theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
