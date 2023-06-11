'use client';
import useSave from '@/api/calendar/mutation/useSave';
import useCreate from '@/api/schedule/mutation/useCreate';
import Button from '@/components/atoms/Button';
import Header from '@/components/Header';
import InputForm from '@/components/molecules/InputForm';
import useNavigate from '@/hooks/useNavigate';
import scheduleDescriptionState from '@/stores/scheduleDescription';
import scheduleTitleState from '@/stores/scheduleTitle/atom';
import { EventObject } from '@/types/Event';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useCallback, useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { getHashedText } from 'utilities/Encryptor';
import Today from "utilities/Today";

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

    const { navigate } = useNavigate();
    const handleClick = useCallback(async ()=>{
        const today = new Today();
        const calendarId = await getCalendarId(title, description, today.toString);
        alert(calendarId);
        // TODO: firebase 저장 필요
        navigate(`/schedule/${calendarId}`);
        // saveCalendar({
        //     calendarId: hashedText,
        // })
    }, [title, description]);
 
    // const { mutate: saveCalendar } = useSave();

    return (
        <>
            <Header/>
            <main className='flex flex-col p-24'>
                <h1 className='relative text-2xl'>
                    <span>캘린더를 만들고</span> &nbsp;
                    <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
                        <span className="relative text-white duration-300 ease-in hover:text-blue-500">공유</span>
                    </span>
                    &nbsp; <span>하세요.</span>
                </h1>
                <p className='pt-11'>
                    <InputForm
                        title="1. 약속에 이름을 붙여주세요."
                        id="title"
                        onChange={handleTitleChange}
                        value={title}
                        placeholder="예: OO이 생일 파티"
                    />
                </p>
                <p className='pt-11'>
                    <InputForm
                        title="2. 한 줄로 설명해주세요."
                        id="description"
                        onChange={handleDescriptionChange}
                        value={description}
                        placeholder="예: 강남역 3번 출구에서 만나!"
                    />
                </p>
                <Button onClick={handleClick} className='text-xl font-bold mt-14'>
                    <Link href={'/schedule'}>캘린더 만들기 📅</Link>
                </Button>
            </main>
        </>
    )
}

const getCalendarId = async (...texts: string[]) => {
    return getHashedText(...texts).replaceAll("/", "");
}

export default Schedule;