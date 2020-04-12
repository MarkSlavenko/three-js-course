import * as THREE from "three";

const cube_geometry = new THREE.CubeGeometry(30, 30, 30);


const loader = new THREE.TextureLoader();

const cube_material = [

    new THREE.MeshBasicMaterial({map: loader.load('./images/1.png')}),

    new THREE.MeshBasicMaterial({map: loader.load('./images/2.png')}),

    new THREE.MeshBasicMaterial({map: loader.load('./images/3.png')}),

    new THREE.MeshBasicMaterial({map: loader.load('http://zabor.zp.ua/www/sites/default/files/images/4_tips_polzovatelskiy_opyt.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_5_Channel.svg/1200px-Logo_5_Channel.svg.png')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://yt3.ggpht.com/a/AGF-l78GCgjvFJt4U1mX9Wb1Vi49-Eq-RF5KxsRy8Q=s900-c-k-c0xffffffff-no-rj-mo')}),

];

const cube_second=new THREE.Mesh(cube_geometry, cube_material);
cube_second.position.x = 35;

export {cube_second};