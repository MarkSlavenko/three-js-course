import React, { Component } from 'react';
import './style.css';
import * as THREE from "three";

import {cube} from '../../3dmodels/lab1';
import {cube_second} from '../../3dmodels/lab2';
import {snowman} from "../../3dmodels/lab3";

class Models extends Component {

    constructor(props) {
        super(props); };


    componentDidMount() {
        this.sceneSetup();
        this.addModels();
        this.animate();
    }

    sceneSetup = () => {
        const WIDTH = this.refForThreeJS.clientWidth;
        const HEIGHT = this.refForThreeJS.clientHeight;

        this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
        this.renderer.setSize(WIDTH, HEIGHT);
        this.renderer.setClearColor(0x2d3436, 0);
        this.refForThreeJS.appendChild( this.renderer.domElement );

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
        this.camera.position.z = 350;
        this.scene.add(this.camera);
    };

    addModels = () => {
        this.scene.add(cube);
        this.scene.add(cube_second);
        this.scene.add(snowman);
    };

     animate = () => {

        requestAnimationFrame(this.animate);
        cube.rotation.x += 0.0075;
        cube.rotation.y += 0.0075;
        cube_second.rotation.x += 0.0075;
        cube_second.rotation.y += 0.0075;
        snowman.rotation.y+=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    timeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async moveCamera (x, y, z) {
        const stepX = (x >= this.camera.position.x ? 1 : -1) * (Math.abs(x-this.camera.position.x) / 40);
        const stepY = (y >= this.camera.position.y ? 1 : -1) * Math.abs(y-this.camera.position.y) / 40;
        const stepZ = (z >= this.camera.position.z ? 1 : -1) * Math.abs(z-this.camera.position.z) / 40;

        for (let i = 0; i < 40; i++) {
                this.camera.position.x += stepX;
                this.camera.position.y += stepY;
                this.camera.position.z += stepZ;
                await this.timeout(10);
        }
    };




    render() {
        return (
            <div className="col-12 text-center models" ref={ref => this.refForThreeJS = ref}></div>
        )};

}

export default Models;