import { format, fromUnixTime, parseISO } from "date-fns";

export function formatDate(date: string | number) {
	return format(
		typeof date === "string" ? parseISO(date) : fromUnixTime(date),
		"LLL d, yyyy",
	);
}
