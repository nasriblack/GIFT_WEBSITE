import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Pause, Play } from 'lucide-react';

// Replace this with your actual music file URL
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Auto-play music when component mounts (after user interaction)
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Music autoplay failed:", error);
            // Don't change isPlaying state on error
          });
      }
    };

    // Try to play music (this will work after user interaction)
    playMusic();
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className={`music-player ${isMinimized ? 'w-12 h-12' : 'w-64 h-auto'}`}>
      <div 
        className={`bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 ${isMinimized ? 'w-12 h-12' : 'rounded-xl px-4 py-3'}`}
      >
        {isMinimized ? (
          <button 
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center text-rose-500 hover:text-rose-600 transition-colors"
          >
            <Music size={24} />
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Music size={20} className="text-rose-500" />
                <span className="text-sm font-medium text-gray-700">Our Song</span>
              </div>
              <button 
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlay}
                className="w-8 h-8 flex items-center justify-center bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              
              <button 
                onClick={toggleMute}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;