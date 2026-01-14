import React from 'react'
import Image from "next/image";
import Print from "@/src/assests/printer.png"

export default function Printer() {
  return (
    <div>
      <Image
        src={Print}
        alt="TwoHeads Logo"
        width={217}
        height={218}
        className="object-contain"
      />
    </div>

  )
}
