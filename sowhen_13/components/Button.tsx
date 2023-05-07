'use client';
import { EventFunc } from 'types/Event';
import { PropsWithChildren } from '@/types/Props';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: EventFunc,
}

const Button = ({ onClick, children }: PropsWithChildren<ButtonProps>): ReactElement => {

  return (
    <button onClick={onClick} className="bg-transparent duration-300 ease-in hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-5 px-10 border border-blue-500 hover:border-transparent rounded">
      { children }
    </button>
  );
}

export default Button;