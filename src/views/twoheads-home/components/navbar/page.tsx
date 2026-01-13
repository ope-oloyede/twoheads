import Link from "next/link";
import React from "react";
import AppLogo from "../svgs/app-logo";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="container mx-auto px-20 py-4 flex items-center justify-between">
          <Link href="/">
            <AppLogo />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-[#191919]">
            Why TwoHeads
          </nav>
        </div>
      </header>
    </>
  );
}
