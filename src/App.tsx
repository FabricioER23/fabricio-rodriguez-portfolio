import React from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Games from './components/Games';
import Experience from './components/Experience';
import Stack from './components/Stack';

export default function App() {
  return (
    <div className="relative min-h-screen text-[var(--c-secondary)] selection:bg-[#d1c5ad] selection:text-[#0f0f10]">
      {/* 1:1 Three.js Interactive Physics Canvas in background (tactile balls with pointer deflection) */}
      <ThreeCanvas />

      {/* Main Grid matching danny-garcia.com structure */}
      <main className="dg-main relative z-10">
        {/* Giant Typographic Logo */}
        <h1 className="dg-logo">
          <a href="/">
            Fabricio <br />
            Rodriguez
          </a>
        </h1>

        {/* Minimalist Intro Statement */}
        <p className="dg-intro type-primary">
          Software &amp; product developer with over a decade of experience crafting games, scalable systems, and playful digital experiences.
        </p>

        {/* Playable Games Timeline (Zero friction, no modals, renamed to Games) */}
        <Games />

        {/* Work Timeline (The Sandbox, Jam City, Mochi Games) */}
        <Experience />

        {/* Tools & Stack Timeline */}
        <Stack />

        {/* Footer */}
        <footer className="dg-footer">
          <div className="footer-content">
            <p style={{ margin: 0 }}>
              You can find me on{' '}
              <a
                href="https://www.linkedin.com/in/fabricio-rodriguez-40598210a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              . I read every{' '}
              <a href="mailto:fabrirodriguez23@gmail.com">
                email
              </a>
              .
            </p>
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: '1.1rem',
                opacity: 0.6,
                fontWeight: 400
              }}
            >
              Buenos Aires &bull; Remote Worldwide &bull;{' '}
              <a
                href="https://github.com/FabricioER23"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
