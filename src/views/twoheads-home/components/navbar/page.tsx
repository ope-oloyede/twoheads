import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <header className="bg-[#FFFFFF] sticky top-0 z-50">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <Link href="/">
            {/* <AppLogo /> */}
          </Link>
        </div>
    </header>
    </>
  )
}
