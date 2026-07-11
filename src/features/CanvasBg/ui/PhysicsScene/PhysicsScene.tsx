import { Physics } from "@react-three/rapier";
import type { JSX } from "react";
import * as THREE from "three/webgpu";

import { canvasBgConfig } from "../../config";
import type { ConnectorItem } from "../../lib";

import { Pointer } from "../Pointer";
import { Sphere } from "../Sphere";
import { CompanyObjectsScane } from "../CompanyObjectsScane";

type PhysicsSceneProps = {
  connectors: ConnectorItem[];
};

export const PhysicsScene = ({ connectors }: PhysicsSceneProps): JSX.Element => {
  return (
    <Physics timeStep={canvasBgConfig.physics.timeStep} gravity={canvasBgConfig.physics.gravity}>
      <Pointer />
      <CompanyObjectsScane />
      {connectors.map((connector, index) => (
        <Sphere key={index} randomPosition={THREE.MathUtils.randFloatSpread} {...connector} />
      ))}
    </Physics>
  );
};
