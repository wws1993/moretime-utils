---
title: 获取随机子元素
group:
  path: /random
  title: 随机操作
---

# 获取随机子元素

## 基础用法

将从目标list中随机取一条数据抛出

```ts
import { random } from '@moretime/utils'

const lib: number[] = [1, 2, 3]
const result = random.getRandomByList(lib) // 1 or 2 or 3
```

## 传参

<CApi
  params="[
    {keyword: 'param0', type: 'T[]', description: '待取值的list', required: true},
  ]">
</CApi>

## 回参

<CApi
  params="[
    {keyword: 'param0', type: 'T', description: '任一元素'},
  ]">
</CApi>
