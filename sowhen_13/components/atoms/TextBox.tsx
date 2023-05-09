import { EventFunc } from '@/types/Event';
import classNames from 'classnames';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

interface TextBoxProps {
  id: string;
  className?: string;
  onChange: EventFunc<HTMLInputElement>;
  value: string;
  placeholder?: string;
}

const TextBox = ({ id, className = "", onChange, value, placeholder = "멋진 이름을 지어주세요" }: TextBoxProps): ReactElement => {

  return (
    <input 
      id={id}
      type='text'
      className={classNames('placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm text-black', className)}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextBox;