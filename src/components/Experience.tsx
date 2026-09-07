import React from 'react';

export default function Experience() {
  return (
    <section className="work-timeline">
      <header className="timeline-entry timeline-header">
        <h2 className="timeline-co type-header">Work</h2>
      </header>

      {/* The Sandbox */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <a href="https://www.sandbox.game" target="_blank" rel="noreferrer">
            The Sandbox
          </a>
          <span className="timeline-time type-secondary">2023–2026</span>
        </h3>
        <div className="timeline-description">
          <p>
            <strong>Director of QA &amp; Platform Systems</strong>. Directed organizational quality strategy, release telemetry, and testing architecture for global decentralized virtual worlds.
          </p>
          <ul>
            <li>
              Led and scaled hybrid cross-functional teams of QA leads, SDETs, and specialized external vendors providing continuous testing coverage across game clients and ecosystem tools.
            </li>
            <li>
              Architected AI-assisted evaluation pipelines that synthesized player feedback and automated Jira issue triage, reducing turnaround times on release blockers by over 40%.
            </li>
            <li>
              Formulated departmental KPIs and quality gates, coordinating with executive leadership, engine developers, and world creators to maintain release stability.
            </li>
          </ul>
        </div>
      </article>

      {/* Jam City */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <a href="https://www.jamcity.com" target="_blank" rel="noreferrer">
            Jam City
          </a>
          <span className="timeline-time type-secondary">2015–2023</span>
        </h3>
        <div className="timeline-description">
          <p>
            <strong>QA Manager &amp; Game Systems Lead</strong>. Led verification and telemetry operations across Jam City's flagship mobile game portfolio, serving more than 50 million monthly active players worldwide.
          </p>
          <ul>
            <li>
              Engineered testing infrastructure for Platform Engineering and core Game Services across top-grossing chart hits: <em>Cookie Jam</em>, <em>Panda Pop</em>, <em>Book of Life</em>, <em>Juice Jam</em>, <em>Genies &amp; Gems</em>, <em>Snoopy Pop</em>, and <em>Disney Frozen Free Fall</em>.
            </li>
            <li>
              Validated high-scale telemetry and in-game economy tracking pipelines using Google BigQuery, Firebase, and real-time analytics dashboards.
            </li>
            <li>
              Established deep network debugging workflows using Charles Proxy and Postman, intercepting and auditing server-side API payloads, asset manifests, and IAP transactions.
            </li>
            <li>
              Promoted through four consecutive leadership roles (QA Tester &rarr; Lead QA Tester &rarr; QA Coordinator in Los Angeles &rarr; QA Manager in Buenos Aires), establishing multi-studio standards.
            </li>
          </ul>
        </div>
      </article>

      {/* Mochi Games / Independent */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Mochi Games</span>
          <span className="timeline-time type-secondary">2014–Present</span>
        </h3>
        <div className="timeline-description">
          <p>
            <strong>Independent Game &amp; Software Developer</strong>. Architecting original interactive software, procedural game loops, and cross-platform WebAssembly runtimes.
          </p>
          <ul>
            <li>
              Designed, programmed, and published <em>Tangent Rush</em> on Google Play, implementing custom 3D momentum physics, procedural tracks, and adaptive mobile touch mechanics.
            </li>
            <li>
              Developing <em>Mechas vs Aliens</em>, building retro-inspired arcade combat, weapon loadouts, and optimized canvas/WASM export pipelines.
            </li>
            <li>
              Creating experimental web tools, physics sandboxes, and developer utilities with TypeScript, React, and Canvas APIs.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
