let vh = window.innerHeight * 0.01;
let vw = window.innerWidth;
const heroSection = document.querySelector('.hero');

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

if (window.innerWidth > 492) {
  import('https://cdn.skypack.dev/three@0.136').then((module) => {
    const THREE = module;
    import('https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js').then((OrbitControls) => {
      return import('https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/RGBELoader.js').then((module) => {
        const { RGBELoader } = module;
        import('https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js').then((GLTFLoader) => {
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
            const near = 0.7;
            const far = 100;

            // Camera setup
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 0,15);

            const ambient = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambient);

            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(-20, 20,20);
            scene.add(light);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMappingExposure = 2;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            // Load Model
            let loader = new GLTFLoader.GLTFLoader();
            loader.load('./3d/planet_earth/scene.gltf', function (gltf) {
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

              // if (model.rotation.y >= 3.8) {
              //   rotationSpeed = -0.001;
              // } else {
              //   if (model.rotation.y <= 2.7) rotationSpeed = 0.001;
              // }
              model.rotation.y += rotationSpeed;
container.classList.add("visible")
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
        });
      });
    });
  });
}
