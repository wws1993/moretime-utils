---
title: 去重
group:
  path: /array
  title: 数组操作
---

# 去重
去重操作，仅支持 (string|number)[]

```ts
import { array } from '@moretime/utils'

const lib: number[] = [1, 2, 3, 1, 2]
const result = array.dupRemove(lib) // [1, 2, 3] 
```

## 传参
<CApi
  params="[
    {keyword: 'param0', type: 'string|number[]', description: '待去重数组', required: true},
  ]">
</CApi>
