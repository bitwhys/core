"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  basePreset: () => base_preset_default,
  defineConfig: () => defineConfig
});
module.exports = __toCommonJS(src_exports);

// src/presets/base.preset.ts
var import_utils = require("@bitwhys/utils");

// ../../node_modules/.pnpm/@radix-ui+colors@0.1.8/node_modules/@radix-ui/colors/index.mjs
var lime$1 = {
  lime1: "hsl(75, 55.0%, 6.0%)",
  lime2: "hsl(74, 56.8%, 7.3%)",
  lime3: "hsl(78, 50.2%, 9.9%)",
  lime4: "hsl(79, 50.3%, 12.1%)",
  lime5: "hsl(79, 52.6%, 14.2%)",
  lime6: "hsl(78, 55.7%, 16.7%)",
  lime7: "hsl(77, 59.7%, 20.1%)",
  lime8: "hsl(75, 64.8%, 24.5%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(75, 85.0%, 60.0%)",
  lime11: "hsl(81, 70.0%, 43.8%)",
  lime12: "hsl(84, 79.0%, 92.6%)"
};
var olive$1 = {
  olive1: "hsl(110, 5.0%, 8.6%)",
  olive2: "hsl(105, 7.4%, 10.6%)",
  olive3: "hsl(106, 6.4%, 13.1%)",
  olive4: "hsl(106, 5.8%, 15.3%)",
  olive5: "hsl(107, 5.3%, 17.4%)",
  olive6: "hsl(107, 4.9%, 19.9%)",
  olive7: "hsl(108, 4.4%, 23.6%)",
  olive8: "hsl(110, 3.8%, 30.6%)",
  olive9: "hsl(110, 6.0%, 42.5%)",
  olive10: "hsl(111, 4.8%, 48.2%)",
  olive11: "hsl(110, 5.0%, 61.8%)",
  olive12: "hsl(110, 6.0%, 93.0%)"
};
var lime = {
  lime1: "hsl(85, 50.0%, 98.7%)",
  lime2: "hsl(85, 66.7%, 96.5%)",
  lime3: "hsl(85, 76.0%, 92.3%)",
  lime4: "hsl(84, 75.3%, 87.5%)",
  lime5: "hsl(84, 71.5%, 81.9%)",
  lime6: "hsl(82, 65.0%, 74.6%)",
  lime7: "hsl(79, 53.2%, 61.8%)",
  lime8: "hsl(76, 61.7%, 45.1%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(80, 68.3%, 46.9%)",
  lime11: "hsl(75, 80.0%, 26.0%)",
  lime12: "hsl(78, 70.0%, 11.5%)"
};
var olive = {
  olive1: "hsl(110, 20.0%, 99.0%)",
  olive2: "hsl(120, 16.7%, 97.6%)",
  olive3: "hsl(119, 10.1%, 95.2%)",
  olive4: "hsl(118, 8.1%, 93.0%)",
  olive5: "hsl(117, 7.1%, 90.8%)",
  olive6: "hsl(115, 6.4%, 88.5%)",
  olive7: "hsl(114, 5.9%, 85.4%)",
  olive8: "hsl(110, 5.2%, 77.3%)",
  olive9: "hsl(110, 3.5%, 55.5%)",
  olive10: "hsl(111, 2.8%, 51.7%)",
  olive11: "hsl(110, 3.0%, 43.0%)",
  olive12: "hsl(110, 25.0%, 9.5%)"
};

// src/presets/base.preset.ts
var import_forms = __toESM(require("@tailwindcss/forms"));
var import_typography = __toESM(require("@tailwindcss/typography"));
var colors = {
  neutral: (0, import_utils.radixToTailwind)(olive),
  neutralDark: (0, import_utils.radixToTailwind)(olive$1),
  primary: (0, import_utils.radixToTailwind)(lime),
  primaryDark: (0, import_utils.radixToTailwind)(lime$1)
};
var plugins = [(0, import_forms.default)(), (0, import_typography.default)()];
var basePreset = {
  theme: {
    extend: {
      colors
    }
  },
  plugins
};
var base_preset_default = basePreset;

// src/index.ts
var defineConfig = (contents) => {
  return { contents, presets: [] };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  basePreset,
  defineConfig
});
