import React from 'react';

export default function Stack() {
  return (
    <section className="stack-timeline">
      <header className="timeline-entry timeline-header">
        <h2 className="timeline-co type-header">Tools &amp; Stack</h2>
      </header>

      {/* QA Leadership & Strategy */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>QA Leadership &amp; Strategy</span>
          <span className="timeline-time type-secondary">Process &amp; Risk</span>
        </h3>
        <div className="timeline-description">
          <p>
            Quality strategy and testing architecture design, risk management and KPI development, vendor and stakeholder management, AI-driven workflow optimization, and departmental reporting for executive leadership.
          </p>
        </div>
      </article>

      {/* Test Automation & QA Engineering */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Test Automation &amp; QA Engineering</span>
          <span className="timeline-time type-secondary">Frameworks &amp; Coverage</span>
        </h3>
        <div className="timeline-description">
          <p>
            Python, Robot Framework, Eggplant/SenseTalk, Appium, and Katalon for functional automation, Postman and Charles Proxy for API/network testing, backed by Jenkins CI/CD pipelines across iOS and Android.
          </p>
        </div>
      </article>

      {/* Product & Program Management */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Product &amp; Program Management</span>
          <span className="timeline-time type-secondary">Cross-Functional Delivery</span>
        </h3>
        <div className="timeline-description">
          <p>
            Cross-functional product/program leadership, requirements definition and prioritization, agile delivery, JIRA workflow design, and translating business logic into testable, shippable requirements.
          </p>
        </div>
      </article>

      {/* Game Engineering */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Game Engines &amp; Systems</span>
          <span className="timeline-time type-secondary">Core Interactive Tech</span>
        </h3>
        <div className="timeline-description">
          <p>
            Godot Engine (2D &amp; 3D), GDScript, C#, WebAssembly (WASM), Unity, HTML5 Canvas 2D/WebGL, custom particle systems, state machines, procedural generation, virtual touch controllers, and physics collision solvers.
          </p>
        </div>
      </article>

      {/* Web & Software Development */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Web &amp; Software</span>
          <span className="timeline-time type-secondary">Modern Frontend &amp; Services</span>
        </h3>
        <div className="timeline-description">
          <p>
            TypeScript, JavaScript (ESNext), React, Three.js, Node.js, Vite, Tailwind CSS, Python, RESTful API design, WebSockets, and cross-browser rendering optimization.
          </p>
        </div>
      </article>

      {/* Telemetry & Release */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Telemetry, Analytics &amp; Release</span>
          <span className="timeline-time type-secondary">Scale &amp; Quality</span>
        </h3>
        <div className="timeline-description">
          <p>
            Google BigQuery, Databricks, Tableau, Metabase, Firebase Suite, Google Play Console, Apple Developer Console/TestFlight, memory profiling, and release-readiness validation across iOS &amp; Android.
          </p>
        </div>
      </article>

      {/* Design & UX */}
      <article className="timeline-entry">
        <h3 className="timeline-co type-primary">
          <span>Design &amp; UX</span>
          <span className="timeline-time type-secondary">Player-Facing Craft</span>
        </h3>
        <div className="timeline-description">
          <p>
            UX/UI design for menus, HUDs, and touch controls, game economy design (currencies, upgrade systems, balancing), and digital art &amp; motion graphics for promotional and in-game assets.
          </p>
        </div>
      </article>
    </section>
  );
}
