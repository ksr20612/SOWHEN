'use client';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas as CanvasThree } from '@react-three/fiber';
import Torus from '../atoms/threejs/Torus';

interface CanvasProps {
  
}

const Canvas = ({}: CanvasProps): ReactElement => {

    return (
        <CanvasThree
            camera={{
                fov: 15,
                near: 1,
                aspect: window.innerWidth / window.innerHeight,
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

const color = 0xffffff;
const intensity = 1;

// camera
const FOV = 80;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const NEAR = 1;
const FAR = 1000;
const PIXELRATIO = window.devicePixelRatio;

export default Canvas;