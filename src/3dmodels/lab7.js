import * as THREE from "three";
import {cylinder} from "./lab6";

function CustomSinCurve( scale ) {

    THREE.Curve.call( this );

    this.scale = ( scale === undefined ) ? 1 : scale;

}

CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

    t=-40*Math.PI*t;
    const a= 30, b= 2;
    const x=a*Math.cos(t);
    const y=a*Math.sin(t);
    const z=b*t;
    return new THREE.Vector3(x,y,z).multiplyScalar( this.scale )

};

const path = new CustomSinCurve(5);
const geometry = new THREE.TubeGeometry( path,128, 3, 20, false );
const material = new THREE.MeshPhongMaterial(
    { color: 0xFFF200,
        shininess:100,
        flatshading: true,
        blending: THREE.NormalBlending,
        depthTest: true});
const tube = new THREE.Mesh( geometry, material );

tube.position.x = 2300;
tube.position.y = -1710;
tube.position.z = -1200;

export {tube};