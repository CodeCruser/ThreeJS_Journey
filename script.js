
// Variables
const canvas = document.querySelector('.webgl')
const sizes = {
    width: 800,
    height: 600
};
// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color : 0xff0000});
const mesh = new THREE.Mesh(geometry, material);
// adding this mesh to a scene
scene.add(mesh);

// adding a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

// creating renderer
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)