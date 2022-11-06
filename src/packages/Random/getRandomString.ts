import { getRandomByList } from "./getRandomByList"

/** 创建hash
 * @param {string} template hash模板
 * @returns {string}
 */
 export const getRandomString = (template: string = 'xxxx-xxxxx-xxxxxxxxxxx-xxxxxx-xx') => {
  const libs = '1234567890abcdefghijklmnopqrstuvwxyz'.split('')

  return template.split('').map(word => {
    if (word !== 'x') return word
    else return getRandomByList<string>(libs)
  }).join('')
}
