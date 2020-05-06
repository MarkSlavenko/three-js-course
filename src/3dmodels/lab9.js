import * as THREE from "three";

const loader = new THREE.TextureLoader();

const sphere_geometry = new THREE.SphereGeometry(100, 30, 30);
const sphere_material = [
    new THREE.MeshBasicMaterial({
        map: loader.load('https://cdn.eso.org/images/large/eso0932a.jpg')
    })];
sphere_geometry.scale( - 1, 1, 1 );
let sphere = new THREE.Mesh(sphere_geometry, sphere_material);



sphere.position.x = 1600;
sphere.position.y = -700;
sphere.position.z = 1000;

export {sphere};