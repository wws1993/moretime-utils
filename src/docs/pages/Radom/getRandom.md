---
title: 获取随机数
group:
  path: /random
  title: 随机操作
---

# 获取随机数

## 默认用法

基础使用时，会随机返回一个0-1之间的数字

```ts
import { random } from '@moretime/utils'

const num = random.getRandom()
```

## 进阶用法

传入最大、最小值，将生成此区间之间的数，最小值默认为0，最大值默认为1

```ts
import { random } from '@moretime/utils'

const num = random.getRandom(3) // 0 ~ 3
const num = random.getRandom(100, 1) // 1 ~ 100
```

## 传参

<CApi
  params="[
    {keyword: 'param0', type: 'number', description: '最大值', default: '1'},
    {keyword: 'param1', type: 'number', description: '最小值', default: '0'},
  ]">
</CApi>
