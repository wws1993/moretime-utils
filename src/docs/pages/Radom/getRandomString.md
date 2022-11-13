---
title: 获取随机字符串
group:
  path: /random
  title: 随机操作
---
# 获取随机字符串

## 基础用法
基础使用时，会随机返回一个0-1之间的数字
<code src='../../examples/Radom/getRandomString.1.tsx'></code>

## 使用模板
函数可接收一字符串作为模板使用，模板中*将作为随机字符串进行替换
<code src='../../examples/Radom/getRandomString.2.tsx'></code>

## 增加配置
函数接收配置以优化输出
<code src='../../examples/Radom/getRandomString.3.tsx'></code>

## 传参

<CApi
  params="[
    {keyword: 'param0', type: 'string', description: '字符串模板'},
    {keyword: 'param1', type: 'Options', description: '生成配置'}
  ]">
</CApi>

##### Options 参数

<CApi
  params="[
    {
      keyword: 'includes',
      type: '(number|lower-case|upper-case|special-char)[]',
      description: '随机字符类型：number：0-9；lower-case: a-z；upper-case: A-Z；special-char: !@#$%^&,.', default: '[number, lower-case]'},
    {keyword: 'randomKeyword', type: 'string', description: '字符串模板中的关键字，用于替换随机字符', default: '*'}
  ]">
</CApi>
