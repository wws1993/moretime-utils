/**
 * 集合排序
 * @param arr 集合
 * @param key 排序字段
 * @returns 排序后集合
 */
export declare const sortByKey: <T extends any[], K extends keyof T>(arr: T, key: K) => T;
