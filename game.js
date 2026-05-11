import * as THREE from 'https://skypack.dev';

// 1. Tạo Scene, Camera, và Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Tạo khối hộp (Voxel) giống Minecraft
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Màu cỏ

// Tạo một vài khối đất đơn giản
for(let x = -5; x < 5; x++) {
    for(let z = -5; z < 5; z++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, 0, z);
        scene.add(cube);
    }
}

camera.position.z = 10;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

// 3. Vòng lặp Render
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Đăng ký Service Worker cho PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
