import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Car = () => {
    let carModel = useLoader(
        GLTFLoader,
        "/models/car.glb"
    ).scene;

    useEffect(()=>{
        carModel.scale.set(0.0015, 0.0015, 0.0015);
        carModel.children[0].position.set(-365,0,-1100);
    },[carModel]);

    return(
        <primitive object={carModel} rotation-y={Math.PI} />
    )
}