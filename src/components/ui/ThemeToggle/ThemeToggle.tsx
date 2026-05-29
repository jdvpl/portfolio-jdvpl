'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, memo } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = memo(() => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
          : 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-400 hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500'
      }`}
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0.5 rounded-full flex items-center justify-center transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {theme === 'dark' ? (
          <Moon className="w-6 h-6 text-purple-500 animate-pulse" />
        ) : (
          <div className="relative">
            <Sun className="w-7 h-7 text-amber-500 animate-spin-slow drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <div className="absolute inset-0 w-7 h-7 bg-yellow-400 rounded-full blur-md opacity-40 animate-pulse" />
          </div>
        )}
      </div>
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'

export default ThemeToggle
