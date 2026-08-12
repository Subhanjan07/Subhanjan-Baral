"use client"
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Get basePath dynamically for GitHub Pages vs localhost
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/Subhanjan-Baral')) {
      return '/Subhanjan-Baral';
    }
  }
  return '';
};

export default function Hat(props) {
  const basePath = getBasePath();
  const { nodes, materials } = useGLTF(`${basePath}/models/hat-transformed.glb`)
  
  const modelRef = useRef();
  
    useFrame(() =>{
      modelRef.current.rotation.y += 0.007;
    })

  return (
    <group {...props} dispose={null}
    ref = {modelRef}
    scale = {[1.8, 1.8, 1.8]}
    rotate = {[0.4, -1, 0]}
    position = {[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

// Preload will be handled by the component