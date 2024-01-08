import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports,min/optimized/three.js'
import {GLTFLoader} from "https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports,min/unoptimized/examples/jsm/loaders/GLTFLoader.js";

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth;
const heroSection = document.querySelector('.hero');

window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


let container;
let camera;
let renderer;
let scene;
let model;

function init() {
    let rotationSpeed = 0.001;
    container = document.getElementById('threeModel');
    // Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.offsetWidth / container.offsetHeight;
    const near = 1;
    const far = 100;

    // Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 5);

    const ambient = new THREE.AmbientLight(0x404040, 0.2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-20, 20, 20);
    scene.add(light);

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Load Model
    let loader = new GLTFLoader();
    loader.load('./3d/earth/scene.gltf', function (gltf) {
        model = gltf.scene;
        scene.add(model);
        model.rotation.x = 0.2;
        model.rotation.y = 1;
        animate();
    });

    window.addEventListener('dblclick', () => {
        console.log(camera.position);
    });

    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += rotationSpeed;
        container.classList.add('visible');
        renderer.render(scene, camera);
    }
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

