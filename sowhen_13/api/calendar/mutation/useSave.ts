import { useMutation } from "react-query"
import { SaveCalendarReq, saveCalendar } from ".."

const useSave = () => {
    return useMutation({
        mutationFn: (param: SaveCalendarReq) => saveCalendar(param),
    })
}

export default useSave;