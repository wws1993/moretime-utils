import React from 'react';
import createHash from "../libs/createHash";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("div", {
      children: "\u4F7F\u7528\u9ED8\u8BA4\u6A21\u677F\uFF1AcreateHash():"
    }), /*#__PURE__*/_jsx("code", {
      children: createHash()
    }), /*#__PURE__*/_jsx("div", {
      children: "\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\uFF1AcreateHash('xxxx-xxxx-xxxx-xxxx'):"
    }), /*#__PURE__*/_jsx("code", {
      children: createHash('xxxx-xxxx-xxxx-xxxx')
    })]
  });
});