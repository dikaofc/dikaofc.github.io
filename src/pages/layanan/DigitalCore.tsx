import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

/**
 * "Digital Core" — holographic wireframe globe used as the futuristic
 * centerpiece of the /layanan hero:
 * - Cyan wireframe sphere + faint solid core
 * - Two cyan orbit rings + one subtle gold ring
 * - Sparse particle field (no thousands of particles)
 * - Pauses rendering while off-screen (IntersectionObserver)
 * - Respects prefers-reduced-motion
 */
export default function DigitalCore({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    camera.position.set(0, 0, 15);

    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // ── Wireframe sphere ──
    const sphereGeo = new THREE.SphereGeometry(3.4, 36, 22);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const sphere = new THREE.Mesh(sphereGeo, wireMat);
    scene.add(sphere);

    // faint solid core inside the wireframe
    const coreGeo = new THREE.SphereGeometry(3.05, 28, 18);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0d1420,
      transparent: true,
      opacity: 0.75,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Orbit rings ──
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });
    const goldMat = new THREE.MeshBasicMaterial({
      color: 0xffde4d,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const rings = [
      { geo: new THREE.TorusGeometry(4.6, 0.025, 8, 120), rot: { x: Math.PI / 2.15, y: 0.6 }, mat: ringMat, speed: 0.25 },
      { geo: new THREE.TorusGeometry(5.3, 0.02, 8, 120), rot: { x: Math.PI / 1.6, y: -0.8 }, mat: goldMat, speed: -0.16 },
      { geo: new THREE.TorusGeometry(4.05, 0.014, 8, 120), rot: { x: Math.PI / 3.2, y: 1.4 }, mat: ringMat, speed: 0.42 },
    ].map((r) => {
      const mesh = new THREE.Mesh(r.geo, r.mat);
      mesh.rotation.set(r.rot.x, r.rot.y, 0);
      scene.add(mesh);
      return { mesh, speed: r.speed };
    });

    // ── Sparse particle field ──
    const COUNT = 150;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 60;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 38;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 28 - 6;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.18,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // ── Responsive sizing ──
    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (reduceMotion) renderer.render(scene, camera);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // ── Pause rendering while off-screen ──
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.03 }
    );
    io.observe(container);

    // ── Animation loop ──
    let raf = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.1);
      const t = clock.elapsedTime;

      sphere.rotation.y += dt * 0.18;
      sphere.rotation.x += dt * 0.05;
      core.rotation.y += dt * 0.08;

      for (const r of rings) {
        r.mesh.rotation.z += dt * r.speed;
      }

      points.rotation.y = t * 0.015;

      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();

      sphereGeo.dispose();
      wireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      for (const r of rings) {
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
      }
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
