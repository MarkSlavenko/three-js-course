import * as THREE from "three";

const snowman = new THREE.Object3D();
let material = new THREE.MeshBasicMaterial ({color: 0xADD8E6});
let geometry = new THREE.SphereGeometry(60,36,36);
const sphere1 =  new THREE.Mesh(geometry,material);
sphere1.position.set(0,60,0);

snowman.add(sphere1);

material = new THREE.MeshBasicMaterial ({color: 0xB0E0E6});
geometry = new THREE.SphereGeometry(44,36,36);
const sphere2 =  new THREE.Mesh(geometry,material);
sphere2.position.set(0,140,0);

snowman.add(sphere2);

material = new THREE.MeshBasicMaterial ({color: 0xB0E0E6});
geometry = new THREE.SphereGeometry(32,36,36);
const sphere3 =  new THREE.Mesh(geometry,material);
sphere3.position.set(0,206,0);

snowman.add(sphere3);

material = new THREE.MeshBasicMaterial ({color: 0xADD8E6});
geometry = new THREE.SphereGeometry(16,16,16);
const sphere4 =  new THREE.Mesh(geometry,material);
sphere4.position.set(-50,156,0);

snowman.add(sphere4);

material = new THREE.MeshBasicMaterial ({color: 0xADD8E6});
geometry = new THREE.SphereGeometry(16,16,16);
const sphere5 =  new THREE.Mesh(geometry,material);
sphere5.position.set(50,156,0);

snowman.add(sphere5);


material = new THREE.MeshBasicMaterial ({color: 'orange'});
geometry = new THREE.CylinderGeometry(1,7,40,8);
const nose =  new THREE.Mesh(geometry,material);
nose.position.set(0,202,45);
nose.rotation.x=Math.PI/2;

snowman.add(nose);

material = new THREE.MeshBasicMaterial ({color: 0x8A2BE2});
geometry = new THREE.CylinderGeometry(24,34,60,18);
const bucket =  new THREE.Mesh(geometry,material);
bucket.position.set(0,249,-12);
bucket.rotation.x=-Math.PI/11;

snowman.add(bucket);

material = new THREE.MeshLambertMaterial ({color: 0x000000});
geometry = new THREE.SphereGeometry(5,50,11);
const eye1 =  new THREE.Mesh(geometry,material);
eye1.position.set(-15,213,27);

snowman.add(eye1);

material = new THREE.MeshLambertMaterial ({color: 0x000000});
geometry = new THREE.SphereGeometry(5,50,11);
const eye2 =  new THREE.Mesh(geometry,material);
eye2.position.set(15,213,27);

snowman.add(eye2);

material = new THREE.MeshBasicMaterial ({color: 0x560319});
geometry = new THREE.CircleGeometry(10,10,0,Math.PI);
const mouse =  new THREE.Mesh(geometry,material);
mouse.position.set(0,194,27);
mouse.rotation.z=Math.PI;

snowman.add(mouse);

snowman.position.x = 1600;
snowman.position.z = -1000;
snowman.position.y = -100;

export {snowman};