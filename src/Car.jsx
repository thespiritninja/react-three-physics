import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from "./hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useControls } from "./hooks/useControls";

export const Car = () => {
    let carModel = useLoader(
        GLTFLoader,
        "/models/car.glb"
    ).scene;

    const position = [-1.5, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs = [width, height, front * 2];
    const [chassisBody, chassisAPI] = useBox(() => ({
        args: chassisBodyArgs,
        mass: 150,
        position,
    }), useRef(null));

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleAPI] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels
    }), useRef(null));

    useControls(vehicleAPI, chassisAPI);

    useEffect(() => {
        carModel.scale.set(0.0015, 0.0015, 0.0015);
        carModel.children[0].position.set(-365, 0, -1100);
    }, [carModel]);

    return (
        // <primitive object={carModel} rotation-y={Math.PI} />
        <group ref={vehicle} name="vehicle">
            <group ref={chassisBody} name="chassisBody">
                <primitive object={carModel} rotation-y={Math.PI} position={[0, -0.09, -1.55]} />
            </group>
            <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
        </group>
    )
}