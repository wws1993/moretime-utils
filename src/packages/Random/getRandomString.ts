import { getRandomByList } from "./getRandomByList"

/** 创建hash
 * @param {string} template hash模板
 * @returns {string}
 */
 export const getRandomString = (template: string = '****-*****-***********-******-**') => {
  const libs = '1234567890abcdefghijklmnopqrstuvwxyz'.split('')

  return template.split('').map(word => {
    if (word !== '*') return word
    else return getRandomByList<string>(libs)
  }).join('')
}
