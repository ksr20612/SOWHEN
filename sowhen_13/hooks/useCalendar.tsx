'use client'
import { EventObject } from '@/types/Event';
import Today from '@/utilities/Today';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface useCalendarProps {
  
}

const useCalendar = ({}: useCalendarProps) => {

    const [date, setDate] = useState<Date>(new Today().date);
    const handleChange = useCallback((value: any, e: EventObject) => {
        setDate(value);
    }, []);
    const renderCalendar = useCallback(() => {
        return (
            <Calendar 
                onChange={handleChange} 
                value={date} 
                minDate={new Today().date}
                calendarType='US'
                
            />
        )
    }, []);

    return {
        renderCalendar
    };
}

export default useCalendar;