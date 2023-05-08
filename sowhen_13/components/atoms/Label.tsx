import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { PropsWithChildren } from '@/types/Props';

interface LabelProps {
  id: string,
  className?: string,
}

const Label = ({ id, className = "", children }: PropsWithChildren<LabelProps>): ReactElement => {

  return (
    <label
      htmlFor={id} 
      className={classNames('block text-gray-700 text-base font-medium', className)}
    >
      { children }
    </label>
  );
}

export default Label;