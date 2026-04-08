import { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    mount.appendChild(renderer.domElement);
    // Create main wireframe icosahedron
    const geometry = new THREE.IcosahedronGeometry(2.2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00d4ff,
      wireframe: true,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.6
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    // Create inner solid geometry
    const innerGeometry = new THREE.IcosahedronGeometry(1.8, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a1a,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.9
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);
    // Create outer particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xec4899,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x00d4ff, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xec4899, 3, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0x7c3aed, 2, 50);
    pointLight3.position.set(0, 5, -5);
    scene.add(pointLight3);
    camera.position.z = 6;
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);
    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const el = mountRef.current;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      targetX = mouseX * 0.8;
      targetY = mouseY * 0.8;
      // Base rotation
      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;
      innerSphere.rotation.y -= 0.003;
      innerSphere.rotation.x -= 0.002;
      particlesMesh.rotation.y = elapsedTime * 0.05;
      // Mouse parallax/tilt effect
      sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
      innerSphere.rotation.y += 0.05 * (targetX - innerSphere.rotation.y);
      innerSphere.rotation.x += 0.05 * (targetY - innerSphere.rotation.x);
      // Float effect
      sphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
      innerSphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
      renderer.render(scene, camera);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      const canvas = renderer.domElement;
      if (canvas.parentNode === mount) {
        mount.removeChild(canvas);
      }
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  return (
    <div
      ref={mountRef}
      className="w-full h-full absolute inset-0 z-0 pointer-events-none" />);


}