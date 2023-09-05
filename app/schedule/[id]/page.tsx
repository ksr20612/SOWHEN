'use client';
import Header from '@/components/Header';
import Video from '@/components/atoms/Video';
import useCalendar from '@/hooks/useCalendar';
import useVideo from '@/hooks/useVideo';
import { EventObject } from '@/types/Event';
import Today from '@/utilities/Today';
import { useRouter, usePathname } from 'next/navigation';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface SchedulePage {
    params: {
        id: string;
    }
} 

const SchedulePage = ({ params }: SchedulePage): ReactElement => {

    const { renderCalendar } = useCalendar({});
    const { renderVideo } = useVideo({});

    return (
        <>
            <Header />
            <main className='flex flex-col p-10'>
                { renderCalendar() }
                <div className='flex justify-between gap-5 mt-10'>
                    { renderVideo() }
                    {/* { renderVideo() } */}
                </div>
            </main>
        </>
    );
}

export default SchedulePage;