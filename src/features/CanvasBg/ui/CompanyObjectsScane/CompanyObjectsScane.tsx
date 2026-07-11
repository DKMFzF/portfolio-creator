import type { JSX } from "react";
import { GLTFPhysics } from "../GLTFPhysics";

export const CompanyObjectsScane = (): JSX.Element => {
    return (
        <>
            <GLTFPhysics modelPath="/yandexcloud_3d-logo.glb" />
            <GLTFPhysics modelPath="/yandex_3d-logo.glb" />
            <GLTFPhysics modelPath="/goodiny_3d-logo.glb" />
            <GLTFPhysics modelPath="/worldenergy_3d-logo.glb" />
        </>
    );
}