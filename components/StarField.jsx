/* Static star field behind the footer, matching the one on Radar.

   Radar draws these with tsparticles. Here they are plain elements, because the
   stars never move (Radar's are configured `move: false` too) and a particle
   engine is two dependencies and a client boundary for a hundred dots.

   Positions come from a seeded generator rather than Math.random, so the server
   and the browser produce the same field. An unseeded one would mismatch on
   hydration and React would replace the whole thing. */

function makeStars(count, seed) {
  let state = seed;

  // Linear congruential generator. Small, deterministic, good enough for dots.
  const next = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  return Array.from({ length: count }, () => ({
    left: next() * 100,
    top: next() * 100,
    size: 1 + next() * 1.4,
    opacity: 0.2 + next() * 0.45,
  }));
}

const stars = makeStars(100, 20260908);

export default function StarField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-ground"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
