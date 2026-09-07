import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Ball {
  mesh: THREE.Mesh;
  radius: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  mass: number;
  baseColor: THREE.Color;
  driftPhaseX: number;
  driftPhaseY: number;
  driftSpeedX: number;
  driftSpeedY: number;
}

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting: neutral key/fill + colorful rim lights so each sphere's own
    // saturated color reads clearly instead of blowing out to white
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight.position.set(5, 12, 10);
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-6, -4, 6);
    scene.add(fillLight);

    const rimLightMagenta = new THREE.PointLight(0xff3ec8, 8, 40);
    rimLightMagenta.position.set(-9, 5, 7);
    scene.add(rimLightMagenta);

    const rimLightCyan = new THREE.PointLight(0x22d3ee, 8, 40);
    rimLightCyan.position.set(9, -5, 7);
    scene.add(rimLightCyan);

    // Geometry shared
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);

    // Vibrant color palette matching Danny Garcia's floating gradient spheres
    const colorPalette = [
      new THREE.Color(0xe84fc4), // magenta / pink
      new THREE.Color(0x8b5cf6), // violet
      new THREE.Color(0x14b8a6), // teal
      new THREE.Color(0xf59e0b), // amber
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0xd1c5ad)  // warm sand (brand accent)
    ];

    // Compute visible bounds at z = 0
    const getVisibleBounds = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFov / 2) * camera.position.z;
      const width = height * camera.aspect;
      return {
        left: -width / 2,
        right: width / 2,
        top: height / 2,
        bottom: -height / 2
      };
    };

    let bounds = getVisibleBounds();

    // Create Balls
    const count = window.innerWidth < 768 ? 14 : 22;
    const balls: Ball[] = [];

    for (let i = 0; i < count; i++) {
      const radius = 0.55 + Math.random() * 0.75;
      const baseColor = colorPalette[i % colorPalette.length];

      const material = new THREE.MeshPhysicalMaterial({
        color: baseColor,
        roughness: 0.28,
        metalness: 0.25,
        clearcoat: 0.6,
        clearcoatRoughness: 0.25
      });

      const mesh = new THREE.Mesh(sphereGeo, material);
      mesh.scale.setScalar(radius);

      const x = bounds.left + radius + Math.random() * (bounds.right - bounds.left - 2 * radius);
      const y = bounds.bottom + radius + Math.random() * (bounds.top - bounds.bottom - 2 * radius);
      const z = (Math.random() - 0.5) * 2;

      mesh.position.set(x, y, z);
      scene.add(mesh);

      balls.push({
        mesh,
        radius,
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.01
        ),
        mass: radius * radius * radius,
        baseColor,
        driftPhaseX: Math.random() * Math.PI * 2,
        driftPhaseY: Math.random() * Math.PI * 2,
        driftSpeedX: 0.006 + Math.random() * 0.006,
        driftSpeedY: 0.005 + Math.random() * 0.007
      });
    }

    // Pointer tracking in 3D world
    const mouse = new THREE.Vector2(9999, 9999);
    const mouseWorld = new THREE.Vector3(9999, 9999, 0);
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(planeZ, mouseWorld);
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // Click/tap impulse
    const onPointerDown = () => {
      balls.forEach((b) => {
        const dist = b.pos.distanceTo(mouseWorld);
        if (dist < 4.5) {
          const dir = new THREE.Vector3().subVectors(b.pos, mouseWorld).normalize();
          const force = (4.5 - dist) * 0.07;
          b.vel.add(dir.multiplyScalar(force));
        }
      });
    };
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    // Window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bounds = getVisibleBounds();
    };
    window.addEventListener('resize', handleResize);

    // Physics Animation Loop
    let animId: number;
    const damping = 0.992;
    const bounce = 0.78;
    const driftForce = 0.00035;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Mouse repulsion radius
      const repelDist = 2.8;

      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Weightless ambient drift so balls float and wander instead of settling
        b.driftPhaseX += b.driftSpeedX;
        b.driftPhaseY += b.driftSpeedY;
        b.vel.x += Math.cos(b.driftPhaseX) * driftForce;
        b.vel.y += Math.sin(b.driftPhaseY) * driftForce;

        // Apply mouse repulsion
        const toMouse = new THREE.Vector3().subVectors(b.pos, mouseWorld);
        const distToMouse = toMouse.length();
        if (distToMouse < repelDist && distToMouse > 0.001) {
          const repelForce = (1 - distToMouse / repelDist) * 0.035;
          toMouse.normalize().multiplyScalar(repelForce);
          b.vel.add(toMouse);
        }

        // Apply velocity with damping
        b.vel.multiplyScalar(damping);
        b.pos.add(b.vel);

        // Keep near z=0 plane
        b.pos.z *= 0.92;

        // Wall collisions
        if (b.pos.x - b.radius < bounds.left) {
          b.pos.x = bounds.left + b.radius;
          b.vel.x = -b.vel.x * bounce;
        } else if (b.pos.x + b.radius > bounds.right) {
          b.pos.x = bounds.right - b.radius;
          b.vel.x = -b.vel.x * bounce;
        }

        // Floor and ceiling collisions
        if (b.pos.y - b.radius < bounds.bottom) {
          b.pos.y = bounds.bottom + b.radius;
          b.vel.y = -b.vel.y * bounce;
        } else if (b.pos.y + b.radius > bounds.top) {
          b.pos.y = bounds.top - b.radius;
          b.vel.y = -b.vel.y * bounce;
        }

        // Ball to Ball collisions
        for (let j = i + 1; j < balls.length; j++) {
          const b2 = balls[j];
          const delta = new THREE.Vector3().subVectors(b2.pos, b.pos);
          const dist = delta.length();
          const minDist = b.radius + b2.radius;

          if (dist < minDist && dist > 0.0001) {
            const normal = delta.clone().normalize();
            const overlap = minDist - dist;

            // Separate positions
            b.pos.sub(normal.clone().multiplyScalar(overlap * 0.5));
            b2.pos.add(normal.clone().multiplyScalar(overlap * 0.5));

            // Elastic collision velocities
            const vRel = new THREE.Vector3().subVectors(b.vel, b2.vel);
            const velAlongNormal = vRel.dot(normal);

            if (velAlongNormal > 0) {
              const impulse = (2 * velAlongNormal) / (b.mass + b2.mass);
              b.vel.sub(normal.clone().multiplyScalar(impulse * b2.mass * bounce));
              b2.vel.add(normal.clone().multiplyScalar(impulse * b.mass * bounce));
            }
          }
        }

        // Update Three.js mesh
        b.mesh.position.copy(b.pos);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="canvas-container fixed inset-0 z-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    />
  );
}
