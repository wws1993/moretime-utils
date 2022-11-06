---
title: 从集合中任取一子元素
group:
  path: /random
  title: 随机操作
---

# 从集合中任取一子元素

## 基础用法

将从目标list中随机取一条数据抛出

```ts
import { getRandomByList } from '@moretime/utils'

const lib = [1, 2, 3]
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
