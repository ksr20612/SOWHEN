import { useMutation } from "react-query"
import { CreateScheduleReq, createSchedule } from ".."

const useCreate = () => {
    return useMutation({
        mutationFn: (param: CreateScheduleReq) => createSchedule(param),
    })
}

export default useCreate;