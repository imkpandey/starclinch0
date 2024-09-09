/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\logo.gltf --transform 
Files: .\logo.gltf [3.39MB] > logo-transformed.glb [135.36KB] (96%)
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/logo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={1} decay={2} distance={2000} position={[0.06, -3.21, 2.133]} scale={0.011} />
      <directionalLight intensity={0.7} decay={2} rotation={[0.009, 0.014, -0.566]} scale={0.01} />
      <OrthographicCamera makeDefault={false} far={100000} near={0} position={[-0.002, -2.792, 9.654]} rotation={[-0.058, 0.009, 0.001]} scale={0.01} />
      <mesh geometry={nodes.Shape_3.geometry} material={nodes.Shape_3.material} position={[-0.457, -3.049, -0.555]} scale={0.011} />
    </group>
  )
}

useGLTF.preload('/logo-transformed.glb')