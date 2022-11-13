---
title: 排序
group:
  path: /array
  title: 数组操作
---

# 根据某字段排序

```ts
import { array } from '@moretime/utils'

const lib = [
  {name: '小明', age: 18},
  {name: '小黄', age: 21},
  {name: '小宏', age: 20},
  {name: '小白', age: 19},
]

const result = array.sortByProp(lib, 'age')
// {name: '小明', age: 18},
// {name: '小白', age: 19},
// {name: '小宏', age: 20},
// {name: '小黄', age: 21},
```

## 传参
<CApi
  params="[
    {keyword: 'param0', type: '(T extends Record<string, any>)[]', description: '待排序数组', required: true},
    {keyword: 'param1', type: 'keyof T', description: '排序字段', required: true},
  ]">
</CApi>
