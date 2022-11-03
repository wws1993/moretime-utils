/**
 * 数组去重
 * @param d 集合
 * @returns 去重结果
 */
export var dupRemove = function dupRemove(d) {
  return Array.from(new Set(d));
};