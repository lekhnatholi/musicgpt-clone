"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [songDescription, setSongDescription] = useState("")
  const [isInstrumental, setIsInstrumental] = useState(true)
  const [hasLyrics, setHasLyrics] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [selectedTool, setSelectedTool] = useState('create');
  const [voices, setVoices] = useState<any[]>([]);
  const [loadingVoices, setLoadingVoices] = useState(false);
  const [selectedVoiceId, setSelectedVoiceId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch voices when switching to TTS mode
  useEffect(() => {
    if (selectedTool === 'tts') {
      setLoadingVoices(true);
      fetch("/api/voices?page=1&pageSize=20")
        .then(res => res.json())
        .then(data => {
          setVoices(data.voices || []);
        })
        .finally(() => setLoadingVoices(false));
    }
  }, [selectedTool]);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    setShowToolsDropdown(false);
    setSelectedVoiceId(null);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    if (selectedTool === 'tts' && !selectedVoiceId) return;
    if (!songDescription.trim()) return;
    setSubmitting(true);
    try {
      if (selectedTool === 'create') {
        await fetch("/api/create-anything", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: songDescription })
        });
      } else if (selectedTool === 'tts') {
        await fetch("/api/text-to-speech", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: songDescription, voiceId: selectedVoiceId })
        });
      }
      setSongDescription("");
      setSelectedVoiceId(null);
    } finally {
      setSubmitting(false);
    }
  };

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
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl font-medium text-center mb-12">What song to create?</h1>

          {/* Input Section */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-8 transition-all duration-1000">
            <div className={`relative w-full`}>
              <textarea
                value={songDescription}
                onChange={(e) => setSongDescription(e.target.value)}
                placeholder={selectedTool === 'tts' ? "Enter text to speak" : "Describe your song"}
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none text-lg min-h-[64px]"
                disabled={submitting}
              />
              {/* Voice grid below textarea when TTS is selected, animated */}
              <div
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${selectedTool === 'tts'
                    ? 'max-h-40 opacity-100 -mt-6'
                    : 'max-h-0 opacity-0 pointer-events-none'
                  }
                `}
              >
                <div className="max-w-[500px]">
                  {loadingVoices ? (
                    <div className="text-center py-4 animate-pulse text-gray-400">Loading voices...</div>
                  ) : (
                    <div className="grid grid-cols-6 gap-4 mt-2 max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                      {voices.map((voice) => (
                        <button
                          key={voice.id}
                          type="button"
                          className={`flex flex-col items-center justify-center p-1 rounded-full transition-all duration-200 text-xs h-16 w-16 mx-auto
                            ${selectedVoiceId === voice.id ? "border-blue-500 bg-blue-900/30" : "border-gray-700 bg-transparent hover:bg-gray-800"}`}
                          onClick={() => setSelectedVoiceId(voice.id)}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-base font-bold mb-1">
                            {voice.name?.[0] || "?"}
                          </div>
                          <div className="font-medium truncate w-12 text-center">{voice.name}</div>
                          {/* <div className="text-[10px] text-gray-400">{voice.lang}</div> */}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Microphone Icon */}
                {/* <button className="p-2 hover:bg-gray-700 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button> */}

              </div>

              <div className="flex flex-col space-y-4">
                {/* Top Tools Section */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowToolsDropdown(!showToolsDropdown)}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded-lg"
                    >
                      <span>Tools</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {showToolsDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                        <div className="py-2">
                          <button
                            onClick={() => handleToolSelect('create')}
                            className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-700 text-left"
                          >
                            <span>Create anything</span>
                            {selectedTool === 'create' && (
                              <span className="text-green-400">✔</span>
                            )}
                          </button>
                          <button
                            onClick={() => handleToolSelect('tts')}
                            className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-700 text-left"
                          >
                            <span>Text to speech</span>
                            {selectedTool === 'tts' && (
                              <span className="text-green-400">✔</span>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button (icon) */}
                  <button
                    className={`p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
                    onClick={handleSubmit}
                    disabled={submitting || (selectedTool === 'tts' && !selectedVoiceId) || !songDescription.trim()}
                  >
                    {submitting ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>


      </main>
    </div>
  )
}
