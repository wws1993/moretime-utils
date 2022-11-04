import { format } from "./format";

/** 获取时间当天23点59分59秒
 * @param time 时间
 * @returns 当天始
 */
export const getDateEnd = (time: AllowDateType): Date => new Date(format(time, 'yyyy/MM/dd 23:59:59'))
