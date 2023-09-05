'use client';
import { PropsWithChildren } from '@/types/Props';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilProps {
  
}

const Recoil = ({ children }: PropsWithChildren<RecoilProps>): ReactElement => {

  return (
    <RecoilRoot>
        { children }
    </RecoilRoot>
  );
}

export default Recoil;