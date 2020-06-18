import * as THREE from "three";

const geometry = new THREE.SphereGeometry(80, 50, 50 );

const material = new THREE.MeshPhongMaterial({color:0x00ff00, wireframe: false});


const cylinder = new THREE.Mesh( geometry, material);

window.setInterval(changeColor, 500)
function changeColor(){
    material.color.setHex(Math.random()* 0xffffff);
};

cylinder.position.x = 2300;
cylinder.position.y = -610;
cylinder.position.z = -1200;

export {cylinder};