'use client';
import Link from "next/link";
import React, { ReactElement, useState, useEffect, useCallback, useRef } from "react";
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";

const NotFound = (): ReactElement => {
    const [ready, set] = useState<boolean>(false)
    useEffect(() => {
      const timeout = setTimeout(() => set(true), 1000)
      return () => clearTimeout(timeout)
    }, []);
    return (
        <div className="flex items-center justify-around w-screen h-screen">
            <h1 className="absolute z-10 text-zinc-950 font-extrabold text-[60px] text-center">
                404 - NOT FOUND <br/>
                <Link href="../">Go back to Home</Link>
            </h1>
            <Canvas dpr={[1, 2]} shadows 
                camera={{ position: [-5, 5, 5], fov: 50, aspect: (typeof window !== 'undefined')? window.innerWidth / window.innerHeight : 1 }} 
                className={'absolute w-full h-full'}
            >
                <ambientLight />
                <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
                <Physics>
                    <Plane />
                    <Cube position={[0, 5, 0]} />
                    <Cube position={[0.45, 7, -0.25]} />
                    <Cube position={[-0.45, 9, 0.25]} />
                    {ready && <Cube position={[-0.45, 10, 0.25]} />}
                </Physics>
            </Canvas>
        </div>
    )
}

const Plane = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
    return (
      <mesh receiveShadow ref={ref as React.Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    )
  }
  
const Cube = ({ position }: { position: [number, number, number]}) => {
    const [ref] = useBox(() => ({ mass: 1, position }))
    return (
    <mesh castShadow ref={ref as React.Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
    </mesh>
    )
}

export default NotFound