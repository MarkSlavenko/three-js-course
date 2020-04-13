import * as THREE from "three";

const bishop = new THREE.Object3D();
let material = new THREE.MeshPhongMaterial ({color: 0xdaa520, specular:0x00b2fc, shininess:50, blending:THREE.NormalBlending, depthTest:true});
let points = [];
for (let i=-2.4; i<0.7; i=i+0.1)
{
    points.push(new THREE.Vector2(10+20*Math.exp(-i*i),24*i));
}
let geometry = new THREE.LatheGeometry(points,32);
const object=new THREE.Mesh(geometry,material);
object.position.set(0,26,0);
object.rotation.x=Math.PI;
bishop.add(object);


points = [];
for (let i=-2.4; i<0.7; i=i+0.1)
{
    points.push(new THREE.Vector2(0+20*Math.exp(-i*i),18*i));
}
geometry = new THREE.LatheGeometry(points,32);
let sphere =  new THREE.Mesh(geometry,material);
sphere.position.set(0,100,0);
sphere.rotation.x=Math.PI;
bishop.add(sphere);

geometry = new THREE.SphereGeometry(5,50,50);
sphere =  new THREE.Mesh(geometry,material);
sphere.position.set(0,137,0);
sphere.rotation.x=Math.PI;
bishop.add(sphere);

geometry = new THREE.CylinderGeometry(22,22,6,32);
material  = new THREE.MeshPhongMaterial ({color: 0x4c3c18, specular:0x00b2fc, shininess:50, blending:THREE.NormalBlending, depthTest:true});
const disc1 =  new THREE.Mesh(geometry,material);
disc1.position.set(0,86,0);
bishop.add(disc1);

geometry = new THREE.CylinderGeometry(32,32,6,32);
material = new THREE.MeshPhongMaterial ({color: 0xdaa520, specular:0x00b2fc, shininess:50, blending:THREE.NormalBlending, depthTest:true});
const disc2 =  new THREE.Mesh(geometry,material);
disc2.position.set(0,10,0);
bishop.add(disc2);

geometry = new THREE.CylinderGeometry(32,32,8,32);
material  = new THREE.MeshPhongMaterial ({color: 0x4c3c18, specular:0x00b2fc, shininess:50, blending:THREE.NormalBlending, depthTest:true});
const disc3 =  new THREE.Mesh(geometry,material);
disc3.position.set(0,3,0);
bishop.add(disc3);

bishop.position.x = 1600;
bishop.position.y = -700;
bishop.position.z = -1000;


export {bishop};