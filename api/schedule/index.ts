import API from "utilities/Axios";
import { DateString } from "@/types/DateString";

export const ScheduleKeys = {
    all: ['schedule'] as const,
    scheduleIdx: (idx: number) => [ ...ScheduleKeys.all, { idx } ] as const,
}

// /schedule/create
export interface CreateScheduleReq {
    userIdx: number,
    date: DateString,
}
export interface CreateScheduleResp {
    scheduleName: string,
}
export const createSchedule = (param: CreateScheduleReq) => {
    return API().post<CreateScheduleResp>('/schedule/create', param);
}