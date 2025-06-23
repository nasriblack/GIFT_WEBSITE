import React, { useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { Heart, LogOut } from "lucide-react";
import MemoryCard from "./MemoryCard";
import MusicPlayer from "./MusicPlayer";

import img1 from "../public/photos/img1.png";
import img2 from "../public/photos/img2.png";
import img7 from "../public/photos/img7.png";
import img4 from "../public/photos/img4.png";
import img5 from "../public/photos/img5.png";
import img6 from "../public/photos/img6.png";
import takharoj from "../public/photos/takharoj.png";

// Replace these with your actual content
const memories = [
  {
    id: 1,
    title: "Taswiret fiancaille mtaaena",
    date: "January 15, 2023",
    description:
      "I'll never forget the way you laughed when I spilled my coffee. That's when I knew you were special.",
    image: img1,
  },
  {
    id: 2,
    title: "Taswira fi karhbtna",
    date: "March 22, 2023",
    description:
      "Walking along the shore, hand in hand, watching the sun paint the sky in colors that reminded me of your smile.",
    image: img2,
  },
  {
    id: 3,
    title: "Awel 3id milad lik",
    date: "May 10, 2023",
    description:
      "Under the vast sky filled with countless stars, I found myself lost in your eyes instead.",
    image: img7,
  },
  {
    id: 4,
    title: "Tacos Date",
    date: "July 5, 2023",
    description:
      "The view from the top was breathtaking, but not as breathtaking as having you by my side through every step of the journey.",
    image: img4,
  },
  {
    id: 5,
    title: "Baaed petit dej",
    date: "September 18, 2023",
    description:
      "Wrapped in blankets, sipping hot chocolate, watching the raindrops race down the window. Perfect days are the ones spent with you.",
    image: img5,
  },
  {
    id: 6,
    title: "A7la taswira lina",
    date: "December 24, 2023",
    description:
      "The holiday lights sparkled in your eyes. In that moment, I wished for nothing more than a lifetime of Christmases with you.",
    image: img6,
  },
  {
    id: 7,
    title: "Taswira fel takharoj mtaaek",
    date: "November 13, 2024",
    description:
      "The holiday lights sparkled in your eyes. In that moment, I wished for nothing more than a lifetime of Christmases with you.",
    image: takharoj,
  },
];

// Replace with your actual love letter content
const loveLetter = `
Maloukti,

Maloukti , ena nhebek w nheb nhebek w habit el nhar ali habitek fih w bech neb9a nhebk, taadina b barcha hajat s3iba fel relation mtaaena w maa baadhna dima n7awlo nokhrjo menhom , aadina barcha lebaadhna w dima noghzro el 9odem. 

noghzro lel objectif mtaaena ali howa ana wayek n9omo sbeh aala sout baadhna wala 7es baadhna , w hadha maykhali kan el 7ob mtaaena yzid , ana makontech naaerf chmaanaha 7ob , makontech naaerf chmaanaha este9rar , makontech nkhamem kima taw nkhamem

Maaek nti tbadelt w badelt men rouhi baaaaaaaaaarcha zada rien que bech nouslo lel objectif eli 9otlk aaliha , wana ferhan bel changement hadha wana ferhan bel changement eli nti sarlek wali ana jrit aalih hhh ! w nhebek tziiiid tetbadel .

Aaaemlt el site hadha w 7atitholk fi nawara bech nfar7ek bih w inchalah tefrah bih baz rak tetbasem , nheb n9olek mahlek winti tedhhak w ma7la tabsmitek zada .

Nhebek 

Forever yours,
Nasssssssri
`;

const RomanticContent: React.FC = () => {
  const { logout } = useAuth();
  const [showLetter, setShowLetter] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
                className={`memory-card visible`}
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
