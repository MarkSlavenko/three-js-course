import * as THREE from "three";

const text = new THREE.TextBufferGeometry( 'Don\'t exist!', {
    size: 10000,
    height: 500,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5
} );
const material=new THREE.MeshNormalMaterial();

const NA = new THREE.Mesh(text, material);

// NA.position.x = 5000;
// NA.position.y = 5000;
// NA.position.z = 5000;

export {NA};