import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export const Track = () =>{
    const trackModel = useLoader(
        GLTFLoader,
        "/models/track.glb"
    );

    const trackMap = useLoader(
        TextureLoader,
        "/textures/track.png"
    );

    useEffect(()=>{
        trackMap.anisotropy = 16;
    },[trackMap]);

    let geometry = trackModel.scene.children[0].geometry;
    return(
        <mesh>
            <primitive object={geometry} attach={"geometry"} />
            <meshBasicMaterial
                toneMapped={false}
                map={trackMap} 
            />
        </mesh>
    )
}