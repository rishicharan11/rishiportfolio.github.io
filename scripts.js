// Smooth Scrolling
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Three.js Scene Setup
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adding a spinning cube as an example 3D element
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xa97576 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for dynamic animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Dynamic Video Zoom on Scroll
const video = document.getElementById('background-video');
let zoomLevel = 1;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const zoomFactor = 0.0005; // Adjust this factor to control zoom speed

    zoomLevel = 1 + scrollTop * zoomFactor;
    video.style.transform = `scale(${zoomLevel})`;
    video.style.transition = 'transform 0.1s ease-out'; // Smooth zoom effect
});
