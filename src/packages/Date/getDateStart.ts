import { format } from "./format";

/** 获取时间当天0点0分0秒
 * @param time 时间
 * @returns {Date}
 */
export const getDateStart = (time: AllowDateType = Date.now()): Date => new Date(format(time, 'yyyy/MM/dd 00:00:00'))
