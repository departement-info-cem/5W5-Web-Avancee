import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

export default function SlidePage({ children, prev, next }) {
  const revealRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && revealRef.current) {

      const deck = new Reveal(revealRef.current, {
        embedded: true,
        controls: false,
        progress: false,
        hash: false,
        slideNumber: false,
        transition: 'slide',
        keyboard: false,
        touch: false,
        mouseWheel: false,
      });

      deck.initialize();
    }
  }, []);

  return (
    <div>
      <div className="reveal" style={{ height: '70vh' }} ref={revealRef}>
        <div className="slides">
          <section>
            {children}
          </section>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',
        fontSize: '1.2rem'
      }}>
        {prev ? <a href={prev}>← Précédent</a> : <div />}
        {next ? <a href={next}>Suivant →</a> : <div />}
      </div>
    </div>
  );
}
