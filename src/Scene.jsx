import {
    Environment,
    OrbitControls,
    PerspectiveCamera
} from "@react-three/drei";
import { Suspense } from "react";
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";

export const Scene = () => {
    return (
        <Suspense fallback={null}>
            <Environment
                files={"/textures/envmap.hdr"}
                background={"both"}
            />
            <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={45} />
            <OrbitControls target={[-2.64, -0.5, 0.05]} />
            <Track />
            <Car />
            <Ground />
        </Suspense>
    )
}