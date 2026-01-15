"use client";

import Link from "next/link";
import React, { useState } from "react";
import AppLogo from "../svgs/app-logo";
import { Cancel, Hamburger } from "@/src/assests/icons/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-[#f8f3ef]/60 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto px-6 md:px-20 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <AppLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-base">
            <a
              href="#why-twoheads"
              className="transition-opacity hover:opacity-70"
            >
              Why TwoHeads
            </a>

            <button
              type="button"
              className="transition-opacity hover:opacity-70 px-5 py-3 rounded-md bg-[#E0E0DA] text-[#0d0508]"
              onClick={() => window.open("https://tally.so/r/mRyP2l", "_blank")}
            >
              Join the waitlist
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Hamburger />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#f8f3ef] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-8">
          {/* Close button */}
          <button
            className="self-end text-xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Cancel />
          </button>

          <a
            href="#why-twoheads"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-center w-full"
          >
            Why TwoHeads
          </a>

          <button
            type="button"
            className="px-5 py-3 rounded-md bg-[#E0E0DA] text-[#0d0508]"
            onClick={() => window.open("https://tally.so/r/mRyP2l", "_blank")}
          >
            Join the waitlist
          </button>
        </div>
      </aside>
    </>
  );
}
