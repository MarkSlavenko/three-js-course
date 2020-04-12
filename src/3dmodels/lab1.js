import * as THREE from "three";

    const cube_geometry=new THREE.CubeGeometry(30, 30, 30);
    const cube_material=new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(cube_geometry, cube_material);
    cube.rotation.set(0.4, 0.2, 0);


export {cube};
