import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import StunServer from '@/common/StunServer';
import useLocalStream from './useMediaStream';
import Video from '@/components/atoms/Video';

interface useVideoProps {
  
}

const useVideo = ({}: useVideoProps) => {

    const videoRef = useRef<HTMLVideoElement>();
    const { mediaStream } = useLocalStream({});
    useEffect(() => {
        console.log(mediaStream);
        if(videoRef.current) {
            videoRef.current.srcObject = mediaStream ?? null;
            console.log(videoRef.current.srcObject);
        }
    }, [mediaStream]);

    const renderVideo = () => {
        return (
            <>
                { mediaStream && <Video ref={videoRef} /> }
            </>
        )
    }

    return {
        renderVideo,
    };
}

export default useVideo;