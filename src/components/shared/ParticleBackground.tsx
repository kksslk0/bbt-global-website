import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    let animId = 0;

    import('three').then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const geometry = new THREE.BufferGeometry();
      const count = 800;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 80;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 30;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 0.08,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        points.rotation.y += 0.0002;
        points.rotation.x += 0.0001;
        renderer.render(scene, camera);
      };

      animate();

      const onResize = () => {
        if (window.innerWidth <= 768) {
          if (animId) {
            cancelAnimationFrame(animId);
            animId = 0;
          }
          renderer.setSize(0, 0);
        } else {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          if (!animId) {
            animate();
          }
        }
      };

      window.addEventListener('resize', onResize);

      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(animId);
          animId = 0;
        } else if (window.innerWidth > 768 && !animId) {
          animate();
        }
      };

      document.addEventListener('visibilitychange', onVisibility);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', onVisibility);
        renderer.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      class="pointer-events-none fixed inset-0 z-0 opacity-15"
      aria-hidden="true"
    />
  );
}
