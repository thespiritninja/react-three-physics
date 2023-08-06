import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Ramp = () => {
    const rampModel = useLoader(GLTFLoader, "/models/ramp.glb");
    const geometry = rampModel.scene.children[0].geometry;

    const vertices = geometry.attributes.position.array;
    const indices = geometry.index.array;

    const [ref] = useTrimesh(()=>({
        args: [vertices, indices],
        mass: 0,
        type: 'Static'
    }),
    useRef(null)
    );
};