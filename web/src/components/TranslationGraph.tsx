import React, { useEffect, useState } from 'react';

const DURATION = 2000; // ms
const PAUSE = 500; // ms avant de recommencer

const POSITION_INITIAL = 0; // %
const POSITION_MIDDLE = 100; // %
const POSITION_FINAL = 500; // %

// Valeur de transform (en %) selon le temps en secondes
const valueAt = (t: number) => (t < 1 ? POSITION_INITIAL + (POSITION_MIDDLE - POSITION_INITIAL) * t : POSITION_MIDDLE + (POSITION_FINAL - POSITION_MIDDLE) * (t - 1));

// Conversion vers les coordonnées du SVG
const toX = (t: number) => 40 + t * 160;
// Valeurs de 0 à POSITION_FINAL (%) ramenées entre y=250 (bas) et y=30 (haut)
const toY = (v: number) => 250 - (v / POSITION_FINAL) * 220;

export default function TranslationGraph() {
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
  const v = valueAt(t);

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg viewBox="0 0 400 300" width="400" height="300" style={{ border: '1px solid #ccc' }}>
        <path
          d={`M ${toX(0)} ${toY(POSITION_INITIAL)} L ${toX(1)} ${toY(POSITION_MIDDLE)} L ${toX(2)} ${toY(POSITION_FINAL)}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
        />
        <circle cx={toX(t)} cy={toY(v)} r="7" fill="#ef4444" />
        <text x="40" y="285" fontSize="12">temps (0 à 2 s)</text>
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