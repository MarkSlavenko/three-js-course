import * as THREE from "three";

// Figure
const material = new THREE.LineBasicMaterial( { color: 0x000000 } );
const geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3( 50, -50, 0) );
geometry.vertices.push(new THREE.Vector3( 0, -50, 0) );
geometry.vertices.push(new THREE.Vector3( 0, -50, -50) );
geometry.vertices.push(new THREE.Vector3( 50, -50, -50) );
geometry.vertices.push(new THREE.Vector3( 50, -50, 0) );
geometry.vertices.push(new THREE.Vector3( 25, -10, -25) );
geometry.vertices.push(new THREE.Vector3( 50, -50, -50) );
geometry.vertices.push(new THREE.Vector3( 25, -10, -25) );
geometry.vertices.push(new THREE.Vector3( 0, -50, -50) );
geometry.vertices.push(new THREE.Vector3( 25, -10, -25) );
geometry.vertices.push(new THREE.Vector3( 0, -50, 0) );


const figure = new THREE.Line( geometry, material );

figure.position.x = 2300;
figure.position.y = -610;
figure.position.z = -810;


// Sphere for background
const sphere_geometry = new THREE.SphereGeometry(160, 25, 25);
const sphere_material = new THREE.MeshBasicMaterial ({color: 0xFFFFFF});
sphere_geometry.scale( - 1, 1, 1 );

const white_sphere = new THREE.Mesh(sphere_geometry, sphere_material);

white_sphere.position.x = 2300;
white_sphere.position.y = -635;
white_sphere.position.z = -730;

export {figure, white_sphere};