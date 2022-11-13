import { format } from "./format";

/** 获取时间当天23点59分59秒
 * @param time 时间
 * @returns {Date}
 */
export const getDateEnd = (time: AllowDateType = Date.now()): Date => new Date(format(time, 'yyyy/MM/dd 23:59:59'))
