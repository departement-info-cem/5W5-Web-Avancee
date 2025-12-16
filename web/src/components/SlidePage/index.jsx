import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export default function SlidePage({ children, prev, next }) {
  const revealRef = useRef(null);
  const containerRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    if (!revealRef.current) return;

    // Initialise Reveal sur le bon élément
    const deck = new Reveal(revealRef.current, {
      embedded: true,
      controls: true,
      keyboard: false,     // important => on gère nous-même
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

  // ----------------------------------------
  // Navigation au clavier (en dehors ET en plein écran)
  // ----------------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (!deckRef.current) return;

      console.log("key intercepted:", e.code);
      console.log("Deck instance:", deckRef.current);
      console.log("State:", deckRef.current.getState());

      if (e.code === "Space") {
        e.preventDefault();
        deckRef.current.next();

        console.log("Deck instance:", deckRef.current);
        console.log("State:", deckRef.current.getState());
      }

      if (e.code === "ArrowRight") {
        e.preventDefault();
        deckRef.current.next();
      }

      if (e.code === "ArrowLeft") {
        e.preventDefault();
        deckRef.current.prev();
      }

      if (e.code === "ArrowUp") {
        e.preventDefault();
        deckRef.current.prev();
      }

      if (e.code === "ArrowDown") {
        e.preventDefault();
        deckRef.current.next();
      }
    };

    // IMPORTANT : écouter document (pas window)
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // ----------------------------------------
  // Plein écran
  // ----------------------------------------
  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => {
        // focus sur l'élément reveal
        if (revealRef.current) {
          revealRef.current.tabIndex = 0;
          revealRef.current.focus();
        }
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div>
      {/* Bouton plein écran */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
        <button
          onClick={toggleFullscreen}
          style={{
            padding: "0.4rem 0.8rem",
            cursor: "pointer",
            borderRadius: "8px",
            background: "#333",
            color: "white",
            border: "none",
          }}
        >
          Plein écran
        </button>
      </div>

      <div ref={containerRef} style={{ height: "75vh" }}>
        <div
          className="reveal"
          ref={revealRef}
          style={{ height: "100%" }}
        >
          <div className="slides">
            <section>
              {children}
            </section>
          </div>
        </div>
      </div>

      {/* Navigation Prev / Next */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          fontSize: "1.2rem",
        }}
      >
        {prev ? <a href={prev}>← Précédent</a> : <div />}
        {next ? <a href={next}>Suivant →</a> : <div />}
      </div>
    </div>
  );
}
