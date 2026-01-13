"use client";

import Link from "next/link";
import React from "react";
import AppLogo from "../svgs/app-logo";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="container mx-auto px-20 py-4 flex items-center justify-between">
          <Link href="/">
            <AppLogo />
          </Link>

          <div className="flex items-center gap-4 text-sm md:gap-12 md:text-base">
            <a href="#why" className="transition-opacity hover:opacity-70">
              Why TwoHeads
            </a>
            <button
              type="button"
              className="transition-opacity hover:opacity-70 px-5 py-3 rounded-md bg-[#E0E0DA] text-[#0d0508]"
              onClick={() => router.push("/#waitlist")}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
