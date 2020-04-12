import * as THREE from "three";

const cube_geometry = new THREE.CubeGeometry(200, 200, 200);


const loader = new THREE.TextureLoader();
//Наложение текстур (несколько текстур на один объект)
const cube_material = [

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704955-stock-photo-number-2.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704951-stock-photo-number-3.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704947-stock-photo-number-4.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704941-stock-photo-number-5.jpg')}),

    new THREE.MeshBasicMaterial({map: loader.load('https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704975-stock-photo-number-6.jpg')}),

];

const cube_second=new THREE.Mesh(cube_geometry, cube_material);
cube_second.position.x = 550;
cube_second.position.z = -350;

export {cube_second};