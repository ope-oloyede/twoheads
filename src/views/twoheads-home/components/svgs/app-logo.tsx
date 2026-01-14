import React from "react";
import Image from "next/image";
import Logo from "@/src/assests/twoheads.jpg"

export default function AppLogo() {
  return (
    <div>
      <Image
        src={Logo}
        alt="TwoHeads Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
}
