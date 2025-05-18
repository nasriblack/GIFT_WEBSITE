import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { Heart, Music, Volume2, VolumeX, LogOut } from "lucide-react";
import MemoryCard from "./MemoryCard";
import MusicPlayer from "./MusicPlayer";

// Replace these with your actual content
const memories = [
  {
    id: 1,
    title: "Our First Date",
    date: "January 15, 2023",
    description:
      "I'll never forget the way you laughed when I spilled my coffee. That's when I knew you were special.",
    image:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Beach Sunset",
    date: "March 22, 2023",
    description:
      "Walking along the shore, hand in hand, watching the sun paint the sky in colors that reminded me of your smile.",
    image:
      "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Stargazing Night",
    date: "May 10, 2023",
    description:
      "Under the vast sky filled with countless stars, I found myself lost in your eyes instead.",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Mountain Hike",
    date: "July 5, 2023",
    description:
      "The view from the top was breathtaking, but not as breathtaking as having you by my side through every step of the journey.",
    image:
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Cozy Rainy Day",
    date: "September 18, 2023",
    description:
      "Wrapped in blankets, sipping hot chocolate, watching the raindrops race down the window. Perfect days are the ones spent with you.",
    image:
      "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "Christmas Lights",
    date: "December 24, 2023",
    description:
      "The holiday lights sparkled in your eyes. In that moment, I wished for nothing more than a lifetime of Christmases with you.",
    image:
      "https://images.pexels.com/photos/1661905/pexels-photo-1661905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Replace with your actual love letter content
const loveLetter = `
My dearest love,

From the moment you entered my life, everything changed. Colors became brighter, music sounded sweeter, and my heart found its home. Every day with you is a gift that I cherish deeply.

You've taught me what it means to truly love someone - to see them for who they are, to accept them completely, and to grow together through life's journey. Your smile is my favorite sight, your laugh is my favorite sound, and your heart is my favorite place to call home.

This digital space is filled with some of our most precious memories, but they're just a small fraction of the countless beautiful moments we've shared. I created this for you as a reminder of our love story - a story that continues to unfold with each passing day.

I love you more than words can express, and I'm grateful for every moment we spend together. Thank you for being you, and for choosing to share your life with me.

Forever yours,
[Your Name]
`;

const RomanticContent: React.FC = () => {
  const { logout } = useAuth();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showLetter, setShowLetter] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          if (!visibleCards.includes(id)) {
            setVisibleCards((prev) => [...prev, id]);
          }
        }
      });
    }, options);

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [cardsRef.current.length]);

  useEffect(() => {
    // Set first card visible immediately
    setTimeout(() => {
      setVisibleCards([1]);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className="particle"
              style={
                {
                  "--x": `${Math.random() * 100}%`,
                  "--y": `${Math.random() * 100}%`,
                  "--duration": `${Math.random() * 20 + 10}s`,
                  "--delay": `${Math.random() * 5}s`,
                } as React.CSSProperties
              }
            >
              <Heart
                className="text-pink-300"
                size={Math.random() * 20 + 10}
                fill="rgba(249, 168, 212, 0.4)"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Music player */}
      <MusicPlayer />

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-600 font-serif animate-float mb-2">
          My Heart Belongs to You
        </h1>
        <p className="text-rose-700 text-lg md:text-xl italic">
          A collection of our most beautiful moments together
        </p>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Intro section */}
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              My darling, this space is dedicated to us – to the love we share
              and the memories we've created together. Each moment with you is a
              treasure that I hold close to my heart.
            </p>
            <button
              onClick={() => setShowLetter(!showLetter)}
              className="mt-4 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
            >
              {showLetter ? "Hide Love Letter" : "Read My Love Letter"}
            </button>

            {showLetter && (
              <div className="mt-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-pink-200 text-left animate-fade-in max-h-80 overflow-y-auto">
                <p className="whitespace-pre-line text-gray-700 leading-relaxed font-serif">
                  {loveLetter}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Photo Memories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">
            Our Special Moments
          </h2>
          <div className="gallery-grid">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                ref={(el) => (cardsRef.current[index] = el)}
                data-id={memory.id}
                className={`memory-card ${
                  visibleCards.includes(memory.id) ? "visible" : ""
                }`}
              >
                <MemoryCard memory={memory} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-24 pt-8 px-4 text-center text-rose-700">
        <p className="mb-4">Made with ❤️ just for you</p>
        <button
          onClick={logout}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-rose-500 font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2 mx-auto"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </footer>
    </div>
  );
};

export default RomanticContent;
