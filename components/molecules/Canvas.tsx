'use client';
import React, { ReactElement, useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas as CanvasThree } from '@react-three/fiber';
import Torus from '../atoms/threejs/Torus';

interface CanvasProps {
  
}

const Canvas = ({}: CanvasProps): ReactElement => {

    const [aspect, setAspect] = useState<number>(1);
    useEffect(() => {
        setAspect(window.innerWidth / window.innerHeight);
    }, []);

    return (
        <CanvasThree
            camera={{
                fov: 15,
                near: 1,
                aspect: aspect,
                far: 1000,
                position: [0, 20, -30],
            }}
        >
            <spotLight color={0xf0fdff} intensity={2.3} />
            <spotLight color={0xf0fdff} intensity={2.5} />
            <hemisphereLight color={0xffffff} intensity={1} />
            <Torus />
        </CanvasThree>
    );
}

export default Canvas;