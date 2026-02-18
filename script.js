
gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

tl.from("nav", {
  y: -80,
  opacity: 0,
  duration: 1
})

.from(".hero h1", {
  x: -100,
  opacity: 0,
  duration: 1
})

.from(".hero p", {
  x: -80,
  opacity: 0,
  duration: 0.8
})

.from(".btn", {
  scale: 0,
  opacity: 0,
  stagger: 0.2
});


gsap.from(".about", {
  scrollTrigger: ".about",
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".card", {
  scrollTrigger: ".projects",
  y: 80,
  opacity: 0,
  stagger: 0.2
});

gsap.from("form", {
  scrollTrigger: ".contact",
  scale: 0.9,
  opacity: 0
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("three-canvas"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const geometry = new THREE.TorusKnotGeometry(1.8, 0.5, 100, 16);

const material = new THREE.MeshStandardMaterial({
  color: 0x38bdf8,
  wireframe: true
});

const object = new THREE.Mesh(geometry, material);

scene.add(object);


const light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(10, 10, 10);

scene.add(light1);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

camera.position.z = 6;

function animate() {

  requestAnimationFrame(animate);

  object.rotation.x += 0.002;
  object.rotation.y += 0.003;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

});
