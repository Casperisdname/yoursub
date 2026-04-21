"use client";
import { Menu, X, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-1 bg-white shadow-md">
      <div className="flex text-stone-700 justify-between items-center p-8">
        <div className="text-4xl md:opacity-0 font-bold">
          YOUR<span className="text-yellow-400">SUB</span>
        </div>
        <div className="space-x-4 hidden md:block pr-4  text-xl transition-colors duration-300">
          <a
            className="hover:underline font-bold hover:underline-offset-8 text-blue-500  hover:text-amber-600 "
            href="#home"
          >
            Home
          </a>
          <a
            className=" hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#about"
          >
            About
          </a>
          <a
            className=" hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#works"
          >
            Services
          </a>
          <a
            className=" hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#teams"
          >
            Partnership
          </a>
          <a
            className=" hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#teams"
          >
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X
              className="rotate-180 transition-transform duration-300"
              size={28}
            />
          ) : (
            <Menu className="transition-transform duration-300" size={28} />
          )}
        </button>

        <div className="hidden md:block ">
          <button className="relative shadow-2xl overflow-hidden px-6 py-3 font-bold text-white bg-blue-500 rounded-xl group">
            <span className="relative z-10">Register</span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-400 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
      </div>

      <div
        className={`absolute  inset-x-0 rounded-b-4xl bg-white/95 backdrop-blur-sm text-left shadow-xl sm:text-center md:hidden transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-12 px-8 py-8 font-bold text-stone-900">
          <a className="hover:text-amber-600" href="#home">
            Home
          </a>
          <a className="hover:text-amber-600" href="#about">
            About
          </a>
          <a className="hover:text-amber-600" href="#works">
            Services
          </a>
          <a className="hover:text-amber-600" href="#teams">
            Partnership
          </a>
          <a className="hover:text-amber-600" href="#teams">
            Contact
          </a>
          <button
            className="rounded-2xl bg-yellow-400 text-2xl text-sky-100 py-3 font-bold transition-all duration-300
      hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]
      active:scale-95"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
