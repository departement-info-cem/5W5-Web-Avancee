import React, { useEffect, useRef } from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function SlidePage({ children }) {
  const revealRef = useRef(null);
  const containerRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    if (!revealRef.current) return;

    const Reveal = require('reveal.js');

    console.log(Reveal);
    /*// Initialise Reveal sur le bon élément
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
    };*/
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
