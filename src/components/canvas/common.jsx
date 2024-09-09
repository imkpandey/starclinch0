"use client";

import {
  PerspectiveCamera,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Common({ color, controls }) {
  return (
    <>
      {/*color && <color attach='background' args={[color]} />*/}
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[-1, -1, 0]}
        intensity={400}
        color={"#F12271"}
        castShadow
      />
      <directionalLight
        position={[1, 1, 0]}
        intensity={200}
        color={"#FA642F"}
        castShadow
      />
      <EffectComposer>
        <Bloom luminanceThreshold={1.5} mipmapBlur />
      </EffectComposer>
      {/* <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} /> */}
      {controls && (
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
      )}
    </>
  );
}
