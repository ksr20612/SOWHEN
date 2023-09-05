"use client"
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface SphereProps {
  
}

const Torus = ({}: SphereProps): ReactElement => {
    const object3d = useRef<THREE.Object3D>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.008;
        }

    })
    return (
        <object3D ref={object3d}>
            {/* <OrbitControls /> */}
            <mesh
                ref={meshRef}
            >
                <torusGeometry args={[1, 0.4, 12, 40]} />
                <meshStandardMaterial color={0xfccdd3} />
            </mesh>
        </object3D>
    );
}

export default Torus;