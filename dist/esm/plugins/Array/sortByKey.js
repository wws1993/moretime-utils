/**
 * 集合排序
 * @param arr 集合
 * @param key 排序字段
 * @returns 排序后集合
 */
export var sortByKey = function sortByKey(arr, key) {
  return arr.sort(function (a, b) {
    return a[key] - b[key];
  });
};