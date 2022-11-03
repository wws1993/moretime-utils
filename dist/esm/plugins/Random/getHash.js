import { getRandomByList } from "./getRandomByList";
/** 创建hash
 * @param {string} template hash模板
 * @returns {string}
 */

export var getHash = function getHash() {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxx-xxxxx-xxxxxxxxxxx-xxxxxx-xx';
  var libs = '1234567890abcdefghijklmnopqrstuvwxyz'.split('');
  return template.split('').map(function (word) {
    if (word !== 'x') return word;else return getRandomByList(libs);
  }).join('');
};