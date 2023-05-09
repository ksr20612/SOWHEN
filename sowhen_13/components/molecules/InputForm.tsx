'use client';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import Label from '../atoms/Label';
import TextBox from '../atoms/TextBox';
import { EventFunc, EventObject } from '@/types/Event';

interface InputFormProps {
    title: string;
    id: string;
    onChange: EventFunc<HTMLInputElement>;
    value: string;
    placeholder?: string
}

const InputForm = ({ title, id, onChange, value, placeholder }: InputFormProps): ReactElement => {

  return (
    <>
        <Label 
          className="mb-5"
          id={id}
        >
          {title}
        </Label>
        <TextBox 
            id={id} 
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    </>
  );
}

export default InputForm;