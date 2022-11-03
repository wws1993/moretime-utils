/** 生成一个随机数
 * @param max 最大值
 * @param min 最小值
 * @returns 随机数
 */
export var getRandom = function getRandom(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.random() * (max + 1) + min;
};