"use client";

import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className="mx-auto px-100 py-4">
      <div className={styles.foot}>
        <div className="max-w-5xl mt-15 mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-black mb-12 leading-tight">
            The new way to share your
            <br />
            knowledge with the world
          </h1>
          <a
            href="#"
            className={styles.cta}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://tally.so/r/mRyP2l", "_blank"); 
            }}
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
