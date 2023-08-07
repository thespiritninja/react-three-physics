import {
    Environment,
    OrbitControls,
    PerspectiveCamera
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";

export const Scene = () => {
    const [thirdPersonView, setThirdPersonView] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-5.5, 3.5, 6])

    useEffect(()=>{
        function keyDownHandler(e){
            if(e.key == 'k'){
                if(thirdPersonView) setCameraPosition([-5.5, 3.5, 6+ Math.random() * 0.01]);
                setThirdPersonView(!thirdPersonView);
            }
        }
        window.addEventListener('keydown',keyDownHandler);
        return() =>window.removeEventListener('keydown',keyDownHandler);
    },[thirdPersonView]);

    return (
        <Suspense fallback={null}>
            <Environment
                files={"/textures/envmap.hdr"}
                background={"both"}
            />
            <PerspectiveCamera makeDefault position={cameraPosition} fov={45} />
            <OrbitControls target={[-2.64, -0.5, 0.05]} />
            <Track />
            <Car thirdPersonView={thirdPersonView}/>
            <Ground />
        </Suspense>
    )
}