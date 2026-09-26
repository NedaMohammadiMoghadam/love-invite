
// Three.js Scene Setup

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x090014);


// Camera

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


camera.position.set(0,3,8);



// Renderer

const renderer = new THREE.WebGLRenderer({
    antialias:true
});


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


renderer.shadowMap.enabled = true;


document.body.appendChild(
    renderer.domElement
);



// Lights

const ambient = new THREE.AmbientLight(
    0xffffff,
    0.5
);

scene.add(ambient);



const lamp = new THREE.PointLight(
    0xffb366,
    2,
    20
);


lamp.position.set(
    0,
   4,
   2
);


lamp.castShadow=true;


scene.add(lamp);




// Floor

const floorGeometry =
new THREE.PlaneGeometry(
    20,
    20
);


const floorMaterial =
new THREE.MeshStandardMaterial({

    color:0x24162b,
    roughness:0.8

});


const floor =
new THREE.Mesh(
    floorGeometry,
    floorMaterial
);


floor.rotation.x=-Math.PI/2;


floor.receiveShadow=true;


scene.add(floor);




// Table

const tableGeometry =
new THREE.BoxGeometry(
    3,
    .25,
    2
);


const tableMaterial =
new THREE.MeshStandardMaterial({

color:0x6b3e1e,
roughness:.5

});


const table =
new THREE.Mesh(
tableGeometry,
tableMaterial
);


table.position.y=1;


table.castShadow=true;


scene.add(table);




// Animation

function animate(){

requestAnimationFrame(animate);


table.rotation.y +=0.002;


renderer.render(
scene,
camera
);

}


animate();




// Responsive

window.addEventListener(
'resize',
()=>{


camera.aspect =
window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);


});
