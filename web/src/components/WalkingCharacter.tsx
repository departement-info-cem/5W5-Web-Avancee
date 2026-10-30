import React, { useEffect, useRef, useState } from 'react';

const DURATION = 3000; // ms
const DISTANCE = 300; // px
const CYCLES = 6; // nombre de cycles de marche (2 pas chacun) sur la distance
export const PLAY_ALL_EVENT = 'walking-character-play-all';

/** Bouton qui fait jouer tous les WalkingCharacter de la page en même temps */
export function WalkingPlayAll() {
  return (
    <button onClick={() => window.dispatchEvent(new Event(PLAY_ALL_EVENT))} style={{ marginBottom: 16 }}>
      ▶▶ Jouer les deux en même temps
    </button>
  );
}

type Props = {
  /** Fonction d'interpolation de l'animation */
  easing?: 'linear' | 'ease-in-out';
};

/**
 * Un personnage qui se déplace avec element.animate().
 * Le mouvement des jambes est synchronisé avec la distance parcourue,
 * et l'amplitude des pas dépend de la vitesse (le personnage démarre et s'arrête doucement).
 */
export default function WalkingCharacter({ easing = 'linear' }: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const frame = useRef(0);
  const [pose, setPose] = useState({ phase: 0, amp: 0 });

  const stop = () => {
    cancelAnimationFrame(frame.current);
    animation.current?.cancel();
  };

  useEffect(() => stop, []);

  // Permet de lancer tous les personnages en même temps (voir WalkingPlayAll)
  useEffect(() => {
    const onPlayAll = () => walk();
    window.addEventListener(PLAY_ALL_EVENT, onPlayAll);
    return () => window.removeEventListener(PLAY_ALL_EVENT, onPlayAll);
  });

  // Avec ease-in-out le personnage va plus vite au milieu: on ralentit le mouvement des membres
  const cycles = easing === 'ease-in-out' ? CYCLES / 2 : CYCLES;

  const walk = () => {
    if (!wrapper.current) return;
    stop();

    // L'animation elle-même: c'est ce code que les étudiants doivent comprendre
    const anim = wrapper.current.animate(
      [{ transform: 'translateX(0px)' }, { transform: `translateX(${DISTANCE}px)` }],
      { duration: DURATION, easing, fill: 'forwards' }
    );
    animation.current = anim;

    // Le reste sert uniquement à animer les jambes selon la progression de l'animation
    let lastP = 0;
    let lastTime = performance.now();
    let phase = 0;
    const loop = (now: number) => {
      const p = Number(anim.effect?.getComputedTiming().progress ?? 0);
      const dp = p - lastP;
      const dt = now - lastTime;
      lastP = p;
      lastTime = now;

      if (anim.playState === 'finished') {
        setPose({ phase, amp: 0 });
        return;
      }
      phase += dp * cycles * 2 * Math.PI;
      // Vitesse relative à la vitesse constante (1 = vitesse de l'animation linéaire)
      const amp = dt > 0 ? Math.min(1, ((dp / dt) * DURATION)) : 0;
      setPose({ phase, amp });
      frame.current = requestAnimationFrame(loop);
    };
    frame.current = requestAnimationFrame(loop);
  };

  const swing = Math.sin(pose.phase) * 35 * pose.amp;
  const lean = 4 * pose.amp;
  const bob = Math.abs(Math.cos(pose.phase)) * 3 * pose.amp;

  return (
    <div style={{ marginBottom: 24 }}>
      <button onClick={walk} style={{ marginBottom: 8 }}>
        ▶ Marcher ({easing})
      </button>
      <div style={{ position: 'relative', width: DISTANCE + 60, height: 110, borderBottom: '3px solid #888' }}>
        <div ref={wrapper} style={{ position: 'absolute', left: 0, bottom: 0, width: 60, height: 105 }}>
          <svg viewBox="0 0 60 105" width="60" height="105" style={{ overflow: 'visible' }}>
            <g transform={`translate(0 ${-bob}) rotate(${lean} 30 70)`} stroke="#1f2937" strokeWidth="5" strokeLinecap="round" fill="none">
              <circle cx="30" cy="12" r="10" fill="#fbbf24" />
              <line x1="30" y1="22" x2="30" y2="62" />
              {/* Bras (opposés aux jambes) */}
              <line x1="30" y1="30" x2="30" y2="58" transform={`rotate(${swing} 30 30)`} />
              <line x1="30" y1="30" x2="30" y2="58" transform={`rotate(${-swing} 30 30)`} />
              {/* Jambes */}
              <line x1="30" y1="62" x2="30" y2="102" transform={`rotate(${-swing} 30 62)`} />
              <line x1="30" y1="62" x2="30" y2="102" transform={`rotate(${swing} 30 62)`} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
