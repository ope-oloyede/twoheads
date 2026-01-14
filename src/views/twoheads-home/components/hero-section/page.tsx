"use client";

import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      {/* Left speech bubble */}
      <div
        className={`${styles.speechBubble} ${styles.left} animate-float-left`}
      >
        Great video, but I don't know where to start 😅
      </div>

      <h1 className={styles.title}>
        The smart digital twin
        <br />
        for creators
      </h1>

      <p className={styles.subtitle}>
        Create a <em>digital you</em> your audience can talk to, <br /> 24/7 in your
        voice. Unlock deeper impact, insights, <br /> and warmer leads.
      </p>

      <a href="#waitlist" className={styles.cta}>
        Join the waitlist
      </a>

      {/* Right speech bubble */}
      <div
        className={`${styles.speechBubble} ${styles.right} animate-float-right`}
      >
        I want to chat with you, but I can't afford your 1:1
      </div>
    </main>
  );
}
