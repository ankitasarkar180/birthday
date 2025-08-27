// Three.js Heart Background
const container = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Heart Shape
const x = 0, y = 0;
const heartShape = new THREE.Shape();
heartShape.moveTo(x + 0.5, y + 0.5);
heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 1, y, x, y);
heartShape.bezierCurveTo(x - 1, y, x - 1, y + 1.5, x - 1, y + 1.5);
heartShape.bezierCurveTo(x - 1, y + 2.5, x + 0.5, y + 3.5, x + 0.5, y + 3.5);
heartShape.bezierCurveTo(x + 0.5, y + 3.5, x + 2, y + 2.5, x + 2, y + 1.5);
heartShape.bezierCurveTo(x + 2, y + 1.5, x + 2, y, x + 1, y);
heartShape.bezierCurveTo(x + 0.5, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

const extrudeSettings = { depth: 0.5, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.2, bevelThickness: 0.3 };
const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

const hearts = [];
const colors = [0xff6b6b, 0xff8e8e, 0xffb3b3, 0xffd8d8, 0xff9e9e, 0xffc1c1, 0xff6b8e, 0xff8eb3];

for (let i = 0; i < 25; i++) {
  const material = new THREE.MeshPhongMaterial({
    color: colors[Math.floor(Math.random() * colors.length)],
    emissive: 0xff0000,
    emissiveIntensity: 0.1,
    shininess: 100,
    transparent: true,
    opacity: 0.9
  });

  const heart = new THREE.Mesh(heartGeometry, material);

  heart.position.x = (Math.random() - 0.5) * 50;
  heart.position.y = (Math.random() - 0.5) * 50;
  heart.position.z = (Math.random() - 0.5) * 50;

  const scale = Math.random() * 0.8 + 0.5;
  heart.scale.set(scale, scale, scale);

  heart.rotation.x = Math.random() * Math.PI;
  heart.rotation.y = Math.random() * Math.PI;

  heart.userData = {
    speedX: Math.random() * 0.02 - 0.01,
    speedY: Math.random() * 0.02 - 0.01,
    speedZ: Math.random() * 0.02 - 0.01,
    rotationSpeedX: Math.random() * 0*
