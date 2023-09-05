import classNames from 'classnames';
import React, { ReactElement, useState, useEffect, useCallback, useRef, forwardRef } from 'react';

interface VideoProps {
    
}

const Video = ({

}: VideoProps): ReactElement => {

    return (
        <>
            <video src="" autoPlay playsInline className="flex-1 border-2 border-blue-600 rounded-sm" />
        </>
    );
}

export default forwardRef(Video);