import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

/**
 * Interactive 3D background for the hero:
 * - Floating custom logo with smooth idle float & mouse parallax
 * - Responsive placement (adapts position for Mobile vs Desktop)
 * - Floating cyan satellites + particle field
 * - Pauses rendering while off-screen (IntersectionObserver)
 * - Respects prefers-reduced-motion
 */
export default function Hero3D({ className }: Props) {
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
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.set(0, 0, 36);

    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // ── Main object: Custom PNG Logo ──
    const logoUrl = "/LOGO-SMK-BHINNEKA-remove-bg-io.png";
    const textureLoader = new THREE.TextureLoader();
    
    // Geometry logo dasar
    const logoGeo = new THREE.PlaneGeometry(10, 10);
    let logoTexture: THREE.Texture | null = null;
    
    const logoMat = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    textureLoader.load(logoUrl, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      logoMat.map = texture;
      logoMat.needsUpdate = true;
      logoTexture = texture;
    });

    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    scene.add(logoMesh);

    // Variabel posisi dinamis untuk dikontrol di resize()
    let logoBaseX = -5;
    let logoBaseY = 11.5;

    // ── Single floating satellite ──
    const satGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const satLineMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.8,
    });
    const satPos: Array<[number, number, number]> = [[14, 8, -6]];
    const satDisposables: Array<{
      material: THREE.Material;
      edges: THREE.EdgesGeometry;
    }> = [];
    const satellites = satPos.map(([x, y, z], i) => {
      const mat = new THREE.MeshToonMaterial({ color: 0x15151b });
      const mesh = new THREE.Mesh(satGeo, mat);
      const edges = new THREE.EdgesGeometry(satGeo);
      mesh.add(new THREE.LineSegments(edges, satLineMat));
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(1);
      scene.add(mesh);
      satDisposables.push({ material: mat, edges });
      return { mesh, baseY: y, speed: 0.4 + i * 0.12, phase: i * 1.7 };
    });

    // ── Subtle particle field ──
    const COUNT = 80;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 90;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.22,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // ── Mouse parallax ──
    let targetX = 0;
    let targetY = 0;
    const onPointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = nx * 3.2;
      targetY = ny * 2.4;
    };
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    // ── Responsive sizing & Layout Adjustment ──
    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      const isMobile = w < 768; // Deteksi mode HP

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      if (isMobile) {
        // Pengaturan Mobile Portrait: Logo digeser lebih ke kanan dan ukurannya sedikit dicocokkan
        logoBaseX = -1.5; // Menggeser logo lebih ke kanan untuk layar sempit
        logoBaseY = 10.0; 
        logoMesh.scale.setScalar(0.75); // Sedikit memperkecil logo agar proporsional di HP
      } else {
        // Pengaturan Desktop / Landscape Mode
        logoBaseX = -5;
        logoBaseY = 11.5;
        logoMesh.scale.setScalar(1.0);
      }

      logoMesh.position.x = logoBaseX;

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
      { threshold: 0.05 }
    );
    io.observe(container);

    // ── Animation loop ──
    let raf = 0;
    let parX = 0;
    let parY = 0;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      renderer.render(scene, camera);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.1);
      const t = clock.elapsedTime;

      parX += (targetX - parX) * Math.min(dt * 3, 1);
      parY += (targetY - parY) * Math.min(dt * 3, 1);

      // Animasi float yang menggunakan nilai dinamis
      logoMesh.position.x = logoBaseX;
      logoMesh.position.y = logoBaseY + Math.sin(t * 1.2) * 0.8;
      logoMesh.rotation.y = Math.sin(t * 0.5) * 0.15 + parX * 0.05;
      logoMesh.rotation.x = Math.cos(t * 0.5) * 0.08 - parY * 0.05;

      for (const s of satellites) {
        s.mesh.position.y = s.baseY + Math.sin(t * s.speed + s.phase) * 1.6;
        s.mesh.rotation.x += dt * 0.5;
        s.mesh.rotation.y += dt * 0.7;
      }

      points.rotation.y = t * 0.02;

      camera.position.x = parX * 0.35;
      camera.position.y = parY * 0.25;
      camera.lookAt(0, 0, 0);

      renderFrame();
    };

    if (reduceMotion) {
      logoMesh.rotation.set(0, 0, 0);
      for (const s of satellites) s.mesh.rotation.set(0.5, 0.8, 0);
      renderFrame();
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      io.disconnect();
      
      logoGeo.dispose();
      logoMat.dispose();
      if (logoTexture) logoTexture.dispose();

      satGeo.dispose();
      satLineMat.dispose();
      for (const d of satDisposables) {
        d.material.dispose();
        d.edges.dispose();
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
