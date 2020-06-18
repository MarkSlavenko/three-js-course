import * as THREE from "three";

const geometry = new THREE.CubeGeometry( 0.01, 50, 50 );
const material = new THREE.MeshBasicMaterial( { color: 'red', side: THREE.DoubleSide } );
const square = new THREE.Mesh( geometry, material );

square.position.x = 2300;
square.position.y = -1710;
square.position.z = -2500;

export {square};