import React, { useEffect, useState } from 'react';

const DURATION = 2000; // ms
const PAUSE = 500; // ms avant de recommencer

const POSITION_INITIAL = 0; // %
const POSITION_MIDDLE = 100; // %
const POSITION_FINAL = 500; // %

// Valeur de transform (en %) selon le temps en secondes
type Easing = 'linear' | 'ease-in-out';

// Courbe de Bézier cubique CSS (ease-in-out = cubic-bezier(0.42, 0, 0.58, 1))
const cubicBezier = (x1: number, y1: number, x2: number, y2: number) => {
  const coord = (a: number, b: number, s: number) => 3 * a * s * (1 - s) ** 2 + 3 * b * s * s * (1 - s) + s ** 3;
  return (x: number) => {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      if (coord(x1, x2, mid) < x) lo = mid;
      else hi = mid;
    }
    return coord(y1, y2, (lo + hi) / 2);
  };
};
const easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// Valeur de transform (en %) selon le temps en secondes
// L'easing est appliqué à chaque segment entre deux keyframes (comme `easing` dans un Keyframe),
// donc le point de jonction reste à l'offset du keyframe du milieu.
const valueAt = (t: number, middleOffset: number, easing: Easing) => {
  const linear = Math.min(Math.max(t / (DURATION / 1000), 0), 1);
  const ease = (x: number) => (easing === 'ease-in-out' ? easeInOut(x) : x);
  return linear < middleOffset
    ? POSITION_INITIAL + (POSITION_MIDDLE - POSITION_INITIAL) * ease(linear / middleOffset)
    : POSITION_MIDDLE + (POSITION_FINAL - POSITION_MIDDLE) * ease((linear - middleOffset) / (1 - middleOffset));
};

// Conversion vers les coordonnées du SVG
const toX = (t: number) => 40 + t * 160;
// Valeurs de 0 à POSITION_FINAL (%) ramenées entre y=250 (bas) et y=30 (haut)
const toY = (v: number) => 250 - (v / POSITION_FINAL) * 220;

type Props = {
  /** Offset du keyframe du milieu (0.5 par défaut avec 3 keyframes) */
  middleOffset?: number;
  /** Courbe d'accélération de l'animation */
  easing?: Easing;
};

export default function TranslationGraph({ middleOffset = 0.5, easing = 'linear' }: Props) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start: number | undefined;
    const loop = (now: number) => {
      if (start === undefined) start = now;
      setElapsed((now - start) % (DURATION + PAUSE));
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const t = Math.min(elapsed, DURATION) / 1000;
  const v = valueAt(t, middleOffset, easing);

  // Tracé échantillonné de la courbe (valeur en fonction du temps)
  const steps = 60;
  const path = Array.from({ length: steps + 1 }, (_, i) => {
    const ti = (i / steps) * (DURATION / 1000);
    return `${i === 0 ? 'M' : 'L'} ${toX(ti)} ${toY(valueAt(ti, middleOffset, easing))}`;
  }).join(' ');

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg viewBox="0 0 400 300" width="400" height="300" style={{ border: '1px solid #ccc' }}>
        <path
          d={path}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
        />
        <circle cx={toX(t)} cy={toY(v)} r="7" fill="#ef4444" />
        {/* Échelle de temps : une marque tous les 0.5 s */}
        <line x1={toX(0)} y1="250" x2={toX(2)} y2="250" stroke="#666" strokeWidth="1" />
        {[0, 0.5, 1, 1.5, 2].map((s) => (
          <g key={s}>
            <line x1={toX(s)} y1="250" x2={toX(s)} y2="258" stroke="#666" strokeWidth="1" />
            <text x={toX(s)} y="272" fontSize="12" textAnchor="middle">{s}</text>
          </g>
        ))}
        <text x={toX(1)} y="292" fontSize="12" textAnchor="middle">temps (s)</text>
        <text x="5" y="20" fontSize="12">transform</text>
      </svg>

      <div style={{ width: 200, position: 'relative' }}>
        <div
          style={{
            width: 40,
            height: 40,
            marginBottom: 32,
            background: '#10b981',
            transform: `translateX(${v}%)`,
          }}
        />
        <p>t = {t.toFixed(2)} s</p>
        <p>translateX = {v.toFixed(0)}%</p>
      </div>
    </div>
  );
}