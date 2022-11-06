---
title: 获取随机字符串
group:
  path: /random
  title: 随机操作
---
# 获取随机字符串

## 基础用法

基础使用时，会随机返回一个0-1之间的数字

```ts
import { getRandomString } from '@moretime/utils'

const result = random.getRandomString() // 
```

## 传参

<CApi
  params="[
    {keyword: 'param0', type: 'any[]', description: '待取值的list', required: true},
  ]">
</CApi>
