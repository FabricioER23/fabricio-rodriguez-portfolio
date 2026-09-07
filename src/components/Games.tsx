import React, { useRef, useState } from 'react';
import { Play, RotateCcw, Maximize2, ExternalLink, X, Gamepad2 } from 'lucide-react';
import mechasVsAliensIcon from '../assets/images/mechas_vs_aliens_logo.png';
import mechasVsAliensCover from '../assets/images/mechas_vs_aliens_banner.png';
import tangentRushIcon from '../assets/images/tangent_rush_icon.png';
import tangentRushCover from '../assets/images/tangent_rush_banner.png';

interface GameItem {
  id: string;
  title: string;
  year: string;
  genre: string;
  icon: string;
  coverArt: string;
  coverFit: 'cover' | 'contain';
  accentFrom: string;
  accentTo: string;
  embedUrl: string;
  googlePlayUrl?: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const GAME_LIST: GameItem[] = [
  {
    id: 'mva',
    title: 'Mechas vs Aliens',
    year: '2024',
    genre: 'Tactical Sci-Fi Shooter',
    icon: mechasVsAliensIcon,
    coverArt: mechasVsAliensCover,
    coverFit: 'cover',
    accentFrom: '#22d3ee',
    accentTo: '#ff2f9e',
    embedUrl: '/games/mva/index.html',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.mochigames.mechasvsaliens',
    tagline: 'Retro mobile action where cybernetic mechas defend humanity against alien swarms.',
    description: 'A fast-paced tactical arcade shooter developed under Mochi Games. Take control of heavily armed mecha suits to fend off relentless waves of insectoid invaders with modular plasma cannons, EMP bursts, and real-time collision dynamics.',
    highlights: [
      'Engineered dual-axis keyboard and touch steering systems for high responsiveness.',
      'Procedural enemy wave composition with escalating swarm AI behavior.',
      'Web Audio synthesized soundscape with dynamic laser and explosion frequencies.'
    ],
    tech: ['Godot 4', 'WebAssembly', 'GDScript', 'Mobile Optimization']
  },
  {
    id: 'tangentrush',
    title: 'Tangent Rush',
    year: '2024',
    genre: 'High-Speed Geometric Runner',
    icon: tangentRushIcon,
    coverArt: tangentRushCover,
    coverFit: 'cover',
    accentFrom: '#e8776a',
    accentTo: '#8fa8d9',
    embedUrl: '/games/tangentrush/index.html',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.mochigames.tangentrush',
    tagline: 'A minimalist, high-velocity 3D precision runner through shifting laser obstacles.',
    description: 'A precision physics arcade game where timing, rhythm, and accuracy are everything. Steer a high-velocity geometric sphere along dynamic pathways that shift at breakneck speeds while avoiding obstacles and maintaining momentum.',
    highlights: [
      'Simulated 3D perspective corridor rendering running at locked 60 FPS.',
      'Momentum conservation, hyper-boost multiplier streaks, and dynamic trail FX.',
      'Published on Google Play Store with responsive multi-resolution scaling.'
    ],
    tech: ['Godot Engine', '3D Physics', 'Google Play SDK', 'Touch UX']
  }
];

export default function Games() {
  const [playingGameId, setPlayingGameId] = useState<string | null>(null);
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  const handleStartGame = (id: string) => {
    setPlayingGameId(id);
    setTimeout(() => {
      document.getElementById(`game-card-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleRestart = (id: string, embedUrl: string) => {
    const iframe = iframeRefs.current[id];
    if (iframe) iframe.src = embedUrl;
  };

  const handleFullscreen = (id: string) => {
    iframeRefs.current[id]?.requestFullscreen?.();
  };

  return (
    <section className="games-timeline" id="games">
      <header className="timeline-entry timeline-header">
        <h2 className="timeline-co type-header">Games</h2>
      </header>

      {GAME_LIST.map((game) => {
        const isPlaying = playingGameId === game.id;
        const accentGradient = `linear-gradient(135deg, ${game.accentFrom}, ${game.accentTo})`;

        return (
          <article key={game.id} id={`game-card-${game.id}`} className="timeline-entry">
            <div className="timeline-co">
              <h3 className="type-primary" style={{ fontSize: '2.2rem', lineHeight: '1.2' }}>
                {game.title}
              </h3>
              <span className="timeline-time type-secondary">
                {game.year} &mdash; {game.genre}
              </span>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {game.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.03em',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      background: `${game.accentFrom}14`,
                      border: `1px solid ${game.accentFrom}40`,
                      color: 'var(--c-primary)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul style={{ margin: '1.75rem 0 0', paddingLeft: '1.15rem', fontSize: '0.98rem', lineHeight: '1.6', opacity: 0.85 }}>
                {game.highlights.map((h, idx) => (
                  <li key={idx} style={{ marginBottom: '0.65rem' }}>{h}</li>
                ))}
              </ul>

              {game.googlePlayUrl && (
                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href={game.googlePlayUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}
                  >
                    <span>Google Play Store</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>

            <div className="timeline-description">
              {!isPlaying ? (
                <div
                  className="game-card"
                  style={{
                    background: 'rgba(22, 24, 31, 0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  <div
                    className="game-cover"
                    onClick={() => handleStartGame(game.id)}
                    style={{
                      aspectRatio: '20 / 9',
                      background:
                        game.coverFit === 'contain'
                          ? `radial-gradient(circle at 50% 42%, ${game.accentFrom}26, transparent 65%), #12141b`
                          : '#12141b'
                    }}
                  >
                    <img
                      src={game.coverArt}
                      alt={`${game.title} key art`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: game.coverFit,
                        padding: game.coverFit === 'contain' ? '1.5rem' : 0,
                        boxSizing: 'border-box',
                        filter: game.coverFit === 'contain' ? 'drop-shadow(0 12px 28px rgba(0,0,0,0.5))' : undefined
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(8,9,13,0.9), rgba(8,9,13,0.05) 55%, transparent 100%)',
                        pointerEvents: 'none'
                      }}
                    />

                    <span
                      style={{
                        position: 'absolute',
                        top: '0.9rem',
                        right: '0.9rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '999px',
                        color: '#0b0c10',
                        background: accentGradient,
                        textTransform: 'uppercase'
                      }}
                    >
                      {game.genre}
                    </span>

                    {game.coverFit === 'cover' && (
                      <img
                        src={game.icon}
                        alt={`${game.title} icon`}
                        style={{
                          position: 'absolute',
                          bottom: '0.9rem',
                          left: '0.9rem',
                          width: '54px',
                          height: '54px',
                          borderRadius: '14px',
                          objectFit: 'cover',
                          border: '2px solid rgba(255, 255, 255, 0.25)',
                          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.6)'
                        }}
                      />
                    )}

                    <div
                      className="game-cover-play"
                      style={{
                        position: 'absolute',
                        bottom: '0.9rem',
                        right: '0.9rem',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: accentGradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 22px rgba(0, 0, 0, 0.55)'
                      }}
                    >
                      <Play size={20} fill="#0b0c10" color="#0b0c10" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-primary)', lineHeight: 1.2 }}>
                        {game.title}
                      </h4>
                      <p style={{ margin: '0.4rem 0 0 0', fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9 }}>
                        {game.tagline}
                      </p>
                    </div>

                    <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.6', opacity: 0.8 }}>
                      {game.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
                      <button
                        className="game-play-btn"
                        onClick={() => handleStartGame(game.id)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.65rem',
                          background: accentGradient,
                          color: '#0b0c10',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '0.8rem 1.85rem',
                          fontSize: '1.08rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          letterSpacing: '0.02em'
                        }}
                      >
                        <Play size={19} fill="#0b0c10" />
                        <span>Play {game.title}</span>
                      </button>

                      <span style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Gamepad2 size={15} />
                        Plays directly in your browser &mdash; no download
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    background: '#07080c',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      background: 'rgba(15, 17, 24, 0.95)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: game.accentFrom, boxShadow: `0 0 8px ${game.accentFrom}` }} />
                      <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--c-primary)' }}>{game.title}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <button
                        onClick={() => handleRestart(game.id, game.embedUrl)}
                        title="Restart Game"
                        style={iconButtonStyle}
                      >
                        <RotateCcw size={13} />
                        <span>Restart</span>
                      </button>

                      <button
                        onClick={() => handleFullscreen(game.id)}
                        title="Fullscreen"
                        style={iconButtonStyle}
                      >
                        <Maximize2 size={13} />
                        <span>Fullscreen</span>
                      </button>

                      <a href={game.embedUrl} target="_blank" rel="noreferrer" title="Open in new tab" style={{ ...iconButtonStyle, textDecoration: 'none' }}>
                        <ExternalLink size={13} />
                        <span>New Tab</span>
                      </a>

                      <button
                        onClick={() => setPlayingGameId(null)}
                        title="Exit Game"
                        style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#f87171',
                          borderRadius: '6px',
                          padding: '0.35rem 0.65rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        <X size={14} />
                        <span>Close</span>
                      </button>
                    </div>
                  </div>

                  <iframe
                    ref={(el) => { iframeRefs.current[game.id] = el; }}
                    src={game.embedUrl}
                    title={game.title}
                    style={{ width: '100%', height: '560px', border: 'none', display: 'block', background: '#040507' }}
                    allow="autoplay; fullscreen"
                  />
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}

const iconButtonStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'var(--c-secondary)',
  borderRadius: '6px',
  padding: '0.35rem 0.65rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  fontSize: '0.85rem'
};
