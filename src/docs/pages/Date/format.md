---
title: 日期格式化
group:
  path: /date
  title: 日期操作
---

# 日期格式化

```ts
import { date } from '@moretime/utils'

const t = date.format() // 2022/11/13 16:39:00
const t = date.format(new Date(2022, 12, 1), 'yyyy年MM月dd日') // 2022年12月01日
```

## 传参
<CApi
  params="[
    {keyword: 'param0', type: 'string|number|Date', description: '日期', default: 'Date.now()'},
    {keyword: 'param1', type: 'FmtString', description: '格式化模板', default: 'yyyy/MM/dd hh:mm:ss'},
  ]">
</CApi>

##### FmtString
<CApi
  params="[
    {type: 'Y', description: '年'},
    {type: 'M', description: '月'},
    {type: 'd', description: '日'},
    {type: 'h', description: '时'},
    {type: 'm', description: '分'},
    {type: 's', description: '秒'},
    {type: 'S', description: '毫秒'},
    {type: 'q', description: '季度'},
  ]">
</CApi>
