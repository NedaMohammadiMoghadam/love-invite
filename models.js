
const loader = new THREE.GLTFLoader();


function loadModel(path, position, scale){

    loader.load(

        path,

        function(gltf){

            const model = gltf.scene;


            model.position.set(
                position.x,
                position.y,
                position.z
            );


            model.scale.set(
                scale,
                scale,
                scale
            );


            model.traverse(function(child){

                if(child.isMesh){

                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            });


            scene.add(model);


        },


        undefined,


        function(error){

            console.log(
                "خطا در بارگذاری مدل:",
                error
            );

        }

    );

}
