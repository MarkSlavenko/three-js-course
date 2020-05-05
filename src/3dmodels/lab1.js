import * as THREE from "three";

    const cube_geometry=new THREE.BoxGeometry(200, 200, 200);
    const cube_material=new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(cube_geometry, cube_material);


export {cube};
