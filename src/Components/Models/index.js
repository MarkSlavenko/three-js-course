import React, { Component } from 'react';
import './style.css';
import * as THREE from "three";
import {cube} from '../../3dmodels/lab1'
import {cube_second} from '../../3dmodels/lab2'

class Models extends Component {

    constructor(props) {
        super(props); };


    componentDidMount() {

        var WIDTH = window.innerWidth*0.9;
        var HEIGHT = window.innerHeight*0.85;

        var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setClearColor(0x2d3436, 0);
        this.refForThreeJS.appendChild( renderer.domElement );

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
        camera.position.z = 50;
        scene.add(camera);


        scene.add(cube);
        scene.add(cube_second);



        function animate() {


            requestAnimationFrame(animate);
            cube.rotation.x += 0.0075;
            cube.rotation.y += 0.0075;
            cube_second.rotation.x += 0.0075;
            cube_second.rotation.y += 0.0075;
            renderer.render(scene, camera);

        }
        animate();
    }


    render() {
        return (
            <div className="col-12 text-center models" ref={ref => this.refForThreeJS = ref}></div>
        )};

}

export default Models;