import * as THREE from "three";

function render3D() {
	var scene3d = document.getElementById("models");
	var WIDTH = window.innerWidth*0.9;
	var HEIGHT = window.innerHeight*0.85;

	var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.setClearColor(0x2d3436, 0);
	scene3d.appendChild(renderer.domElement);

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
	camera.position.z = 50;
	scene.add(camera);


	const cube_geometry=new THREE.CubeGeometry(30, 30, 30);
	const cube_material=new THREE.MeshNormalMaterial();
	let cube=new THREE.Mesh(cube_geometry, cube_material);
	scene.add(cube);
	cube.rotation.set(0.4, 0.2, 0);


	function animate() {


		requestAnimationFrame(animate);
		cube.rotation.x += 0.0075;
		cube.rotation.y += 0.0075;
		renderer.render(scene, camera);

	}
	animate();
}

export default render3D;
