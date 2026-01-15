import React from "react";
import Printer from "../svgs/printer";
import styles from "./styles.module.scss";

export default function WhyTwoHeads() {
  return (
    <div>
      <div className={styles.png}>
        <section id="why-twoheads">
          <Printer />
        </section>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-100 py-4">
        <div className={styles.content}>
          {/* <section id="why-twoheads"> */}
          <div className={styles.header}>
            <h1>Why TwoHeads?</h1>
          </div>
          {/* </section> */}

          <div className={styles.body}>
            <div className="mt-1">
              <p>
                In the last 100 years, we’ve advanced the tools for creating and
                passing down knowledge.
              </p>
            </div>

            <div className="mt-1">
              <br />
              From the printing press to radio, blogs, newsletters, podcasts,
              and YouTube, knowledge has traveled faster with each leap, but one
              thing that has never kept up is access…
            </div>

            <div className="mt-1">
              <br />
              <p>Access to the creators behind that knowledge</p>
            </div>

            <div className="mt-1">
              <br /> Creators can reach millions at the click of a button, but
              to what use is all that reach if only the privileged 0.1% can ever
              get access to a real conversation with the creator?
            </div>

            <div className="mt-1">
              <br />
              Because real understanding and clarity is born in a conversation.
            </div>

            <div className="mt-1">
              <br />
              You've published so much content. Your audience learns from you,
              quotes you, builds with your advice…but when they have the one
              question that truly matters to their context, they’re on their
              own.
            </div>

            <div className="mt-1">
              <br />
              We believe that’s about to change. We believe the future of
              learning online isn’t a broadcast.
            </div>

            <div className="mt-1">
              <br />
              It’s a living, interactive version of the creators knowledge.
            </div>

            <div className="mt-1">
              <br />
              It’s Personal. Conversational. Always available.
            </div>

            <div className="mt-1">
              <br />
              Your audience should be able to ask better questions about their
              situation anytime, anywhere
            </div>

            <div className="mt-1">
              <br />
              And through those conversations, you should be able unlock deeper
              insights, generate warmer leads for your products, and stay
              top-of-mind without being online 24/7.
            </div>

            <div className="mt-1">
              <br />{" "}
              <p>
                This is why we’re building TwoHeads, your smart digital twin
                that makes your knowledge always accessible through the one
                thing that makes you unique; Your voice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
