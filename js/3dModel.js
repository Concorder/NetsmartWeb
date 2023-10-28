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
          let phone;

          function init() {
            let rotationSpeed = 0;
            container = document.getElementById('phone');
            // Create scene
            scene = new THREE.Scene();

            const fov = 35;
            const aspect = container.offsetWidth / container.offsetHeight;
            const near = 0.7;
            const far = 100;

            // Camera setup
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 0, 1.8);

            const ambient = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambient);

            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(50, 0, 0);
            scene.add(light);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMappingExposure = 0.7;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            // Load Model
            let loader = new GLTFLoader.GLTFLoader();
            loader.load('./3d/phone3d/scene.gltf', function (gltf) {
              phone = gltf.scene;
              scene.add(phone);
              phone.rotation.y = 2.7;
              animate();
            });

            new RGBELoader().load('https://assets.codepen.io/7014830/studio.hdr', function (texture) {
              texture.mapping = THREE.EquirectangularReflectionMapping;
              scene.environment = texture;
              container.classList.add('visible');
            });

            window.addEventListener('dblclick', () => {
              console.log(camera.position);
            });


            function animate() {
              requestAnimationFrame(animate);

              if (phone.rotation.y >= 3.8) {
                rotationSpeed = -0.001;
              } else {
                if (phone.rotation.y <= 2.7) rotationSpeed = 0.001;
              }
              phone.rotation.y += rotationSpeed;

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
