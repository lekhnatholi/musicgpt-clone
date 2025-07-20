"use client"

import { useState } from "react"

export default function Home() {
  const [songDescription, setSongDescription] = useState("")
  const [isInstrumental, setIsInstrumental] = useState(true)
  const [hasLyrics, setHasLyrics] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500"></div>
              </div>
            </div>
            <span className="text-xl font-semibold">MusicGPT</span>
            <span className="px-2 py-1 text-xs bg-gray-700 rounded text-gray-300">Beta</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-white border-b-2 border-white pb-1">
              Create
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Discover
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Pricing
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm font-medium">Get unlimited AI Music</div>
            <div className="text-xs text-gray-400">300 free credits left</div>
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100">Upgrade</button>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">L</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl font-medium text-center mb-12">What song to create?</h1>

          {/* Input Section */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-8">
            <textarea
              value={songDescription}
              onChange={(e) => setSongDescription(e.target.value)}
              placeholder="Describe your song"
              className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none text-lg min-h-[64px]"
            />

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Microphone Icon */}
                <button className="p-2 hover:bg-gray-700 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>

                {/* Instrumental Toggle */}
                <button
                  onClick={() => setIsInstrumental(!isInstrumental)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                    isInstrumental ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                  <span>Instrumental</span>
                </button>

                {/* Lyrics Toggle */}
                <button
                  onClick={() => setHasLyrics(!hasLyrics)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                    hasLyrics ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">+</span>
                  <span>Lyrics</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                {/* Tools Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowToolsDropdown(!showToolsDropdown)}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded-lg"
                  >
                    <span>Tools</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showToolsDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                          Tool 1
                        </a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                          Tool 2
                        </a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                          Tool 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <span className="text-yellow-400">♪</span>
              <span>Create song</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <span className="text-purple-400">🎵</span>
              <span>Create Sound</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <span className="text-blue-400">💬</span>
              <span>Speak text</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <span className="text-green-400">🎼</span>
              <span>Change file</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <span className="text-gray-400">🎲</span>
              <span>Random</span>
            </button>
          </div>
        </div>

        
      </main>
    </div>
  )
}
