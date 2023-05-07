import { Size } from '@/types/Size';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

interface SoWhenProps {
  size?: Size
}

const SoWhen = ({ size = "10px" }: SoWhenProps): ReactElement => {

  return (
    <div className={`text-[${size}] font-bold`}>
        <span>So</span>
        <span className='text-blue-600'>When</span>
    </div>
  );
}

export default SoWhen;