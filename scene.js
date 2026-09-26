const scene = new THREE.Scene();

scene.background = new THREE.Color(0x080808);



const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
100
);


camera.position.set(0,2,5);



const renderer = new THREE.WebGLRenderer({
    antialias:true
});


renderer.setSize(
window.innerWidth,
window.innerHeight
);


renderer.shadowMap.enabled = true;


document.body.appendChild(renderer.domElement);



// نور اصلی

const light = new THREE.AmbientLight(
0xffffff,
1
);

scene.add(light);



// نور گرم کافه

const warm = new THREE.PointLight(
0xffaa55,
3,
20
);


warm.position.set(
0,
3,
2
);


scene.add(warm);




// یک تست کوچک سه بعدی

const geometry =
new THREE.BoxGeometry(
1,
1,
1
);


const material =
new THREE.MeshStandardMaterial({

color:0x8b4513

});


const cube =
new THREE.Mesh(
geometry,
material
);


cube.position.y=0.5;


scene.add(cube);




// حرکت دوربین و رندر

function animate(){

requestAnimationFrame(animate);


cube.rotation.y +=0.01;


renderer.render(
scene,
camera
);

}


animate();
