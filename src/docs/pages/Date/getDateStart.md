---
title: 获取每天开始时间
group:
  path: /date
  title: 日期操作
---

# 获取每天开始时间

```ts
import { date } from '@moretime/utils'

const t = date.getDateStart()
```

## 传参
<CApi
  params="[
    {keyword: 'param0', type: 'string|number|Date', description: '日期', default: 'Date.now()'},
  ]">
</CApi>