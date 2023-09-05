'use client';
import { EventFunc } from 'types/Event';
import { PropsWithChildren } from '@/types/Props';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import classNames from 'classnames';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string,
  onClick?: EventFunc,
}

const Button = ({ className = "", onClick, children }: PropsWithChildren<ButtonProps>): ReactElement => {

  return (
    <button onClick={onClick} className={classNames("px-10 py-5 font-semibold text-blue-700 duration-300 ease-in bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent", className)}>
      { children }
    </button>
  );
}

export default Button;