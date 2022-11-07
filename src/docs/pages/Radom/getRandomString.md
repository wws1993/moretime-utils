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

## 传参

<CApi
  params="[
    {keyword: 'param0', type: 'any[]', description: '待取值的list', required: true},
  ]">
</CApi>
