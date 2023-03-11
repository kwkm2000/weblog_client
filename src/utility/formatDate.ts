import dayjs from "dayjs";

export function formatDate(date: Date): string {
  return dayjs().format("YYYY/MM/DD");
}
