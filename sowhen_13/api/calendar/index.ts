import API from "utilities/Axios";

export const CalendarKeys = {
    all: ['calendar'] as const,
}

// calendar/*
export interface SaveCalendarReq {
    calendarId: string,
}
export interface SaveCreateScheduleResp {}
export const saveCalendar = ({ calendarId }: SaveCalendarReq) => {
    return API().post<SaveCalendarReq>(`/calendar/${calendarId}`);
}
