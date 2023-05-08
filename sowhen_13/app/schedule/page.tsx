'use client';
import Button from '@/components/atoms/Button';
import Header from '@/components/Header';
import InputForm from '@/components/molecules/InputForm';
import scheduleDescriptionState from '@/stores/scheduleDescription';
import scheduleTitleState from '@/stores/scheduleTitle/atom';
import { EventObject } from '@/types/Event';
import Link from 'next/link';
import React, { ReactElement, useCallback, useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';

const Schedule = (): ReactElement => {
    
    // title
    const [title, setTitle] = useRecoilState(scheduleTitleState);
    const handleTitleChange = useCallback((e: EventObject<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }, [])
    
    // description
    const [description, setDescription] = useRecoilState(scheduleDescriptionState);
    const handleDescriptionChange = useCallback((e: EventObject<HTMLInputElement>) => {
        setDescription(e.currentTarget.value);
    }, []);

    return (
        <>
            <Header/>
            <main className='flex flex-col p-24'>
                <h1 className='text-2xl'>
                    캘린더를 만들고 공유하세요.
                </h1>
                <p>
                    <InputForm
                        title="약속 이름"
                        id="title"
                        onChange={handleTitleChange}
                        value={title}
                    />
                </p>
                <p>
                    <InputForm
                        title="한줄로 설명해주세요"
                        id="description"
                        onChange={handleDescriptionChange}
                        value={description}
                    />
                </p>
                <Button onClick={()=>{}}>
                    <Link href={'/schedule'}>캘린더 만들기 📅</Link>
                </Button>
            </main>
        </>
    )
}

export default Schedule;