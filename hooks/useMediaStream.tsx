'use client'
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

interface useMediaStreamProps {
  
}

const useMediaStream = ({}: useMediaStreamProps) => {

    const [mediaStream, setMediaStream] = useState<MediaStream>();
    const getUserMedia = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
        console.log(stream);
        setMediaStream(stream);
    }, []);

    useEffect(() => {
        getUserMedia();
    }, []);

    return {
        mediaStream
    };
}

export default useMediaStream;