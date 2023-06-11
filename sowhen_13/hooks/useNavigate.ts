'use client'
import { Path } from '@/types/Path';
import { useRouter } from 'next/navigation';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

const useNavigate = () => {

    const router = useRouter();
    const navigate = useCallback((path: Path) => {
        return router.push(path);
    }, []);

    return {
        navigate
    };
}

export default useNavigate;