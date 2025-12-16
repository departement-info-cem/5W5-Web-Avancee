import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export default function SlidePage2({ children }) {
  const revealRef = useRef(null);
  const containerRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    if (!revealRef.current) return;

    // Initialise Reveal sur le bon élément
    const deck = new Reveal(revealRef.current, {
      embedded: true,
      controls: true,
      keyboard: true,
      touch: true,
      progress: false,
      hash: false,
      slideNumber: false,
      transition: "slide",
    });

    deck.initialize().then(() => {
      console.log("Reveal initialized");
      
      deckRef.current = deck;
    });

    return () => {
      try {
        deck.destroy();
      } catch (err) {}
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: "75vh" }}>
        <div
          className="reveal"
          ref={revealRef}
          style={{ height: "100%" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
