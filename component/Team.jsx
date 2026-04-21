"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const slides = [
  {
    title: "The best technical partner",
    text: "Yoursub is the best technical partner you can have.",
    author: "Ayomikun",
  },
  {
    title: "Fast and reliable service",
    text: "Transactions are processed instantly without delays.",
    author: "Daniel",
  },
  {
    title: "Super easy to use",
    text: "Clean and simple interface anyone can use.",
    author: "Sarah",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
      <Reveal>
        <div className="relative w-full py-20 flex items-center justify-center bg-gray-50 overflow-hidden">
          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-1 p-2 md:left-6 md:p-3 bg-white shadow rounded-full z-10"
          >
            <ChevronLeft />
          </button>

          {/* SLIDER */}
          <div className="relative w-full max-w-2xl h-[200px] overflow-hidden">
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out
            ${
              direction === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            }`}
            >
              <div className="text-center px-6">
                <p className="text-sm text-gray-500 mb-2">
                  {slides[index].author}
                </p>
                <h2 className="text-3xl font-bold mb-3">
                  {slides[index].title}
                </h2>
                <p className="text-gray-600">{slides[index].text}</p>
                <div className="text-center flex pt-8 justify-center gap-4 ">
                  <div>
                    <span className="text-4xl md:text-5xl font-bold">
                      10000+
                    </span>
                    <p> Happy Clients</p>
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold">200+</span>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-1 p-2 md:right-6 md:p-3 bg-white shadow rounded-full z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </Reveal>
    </div>
  );
}
