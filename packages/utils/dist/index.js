"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  radixToTailwind: () => radixToTailwind
});
module.exports = __toCommonJS(src_exports);

// src/format/radixToTailwind.ts
var radixToTailwind = (radixColorObject) => {
  const captureScaleRegEx = new RegExp(/(\d{1,2})/);
  const color = {};
  for (const [token, value] of Object.entries(radixColorObject)) {
    const match = token.match(captureScaleRegEx);
    if (match) {
      Object.assign(color, { [match[1]]: value });
    }
  }
  return color;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  radixToTailwind
});
