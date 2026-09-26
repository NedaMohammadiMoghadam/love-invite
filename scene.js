const scene = new THREE.Scene();

scene.background = new THREE.Color(0x050505);


const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
100
);

camera.position.z = 5;



const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});


renderer.setSize(
window.innerWidth,
window.innerHeight
);


renderer.domElement.style.position="fixed";
renderer.domElement.style.top="0";
renderer.domElement.style.left="0";
renderer.domElement.style.zIndex="0";


document.body.appendChild(renderer.domElement);



const light = new THREE.AmbientLight(
0xffffff,
1
);

scene.add(light);



function animate(){

requestAnimationFrame(animate);

renderer.render(
scene,
camera
);

}


animate();
