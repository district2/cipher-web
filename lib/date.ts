import { format, parseISO } from "date-fns";

export function formatDate(_date: string) {
    return format(parseISO(_date), 'LLLL d, yyyy')
}