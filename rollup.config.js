import globals from "rollup-plugin-node-globals"
import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"
import json from "rollup-plugin-json"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import { terser } from "rollup-plugin-terser"

const terserOptions = {
  mangle: false,
  compress: false,
  output: {
    beautify: true,
    indent_level: 2
  }
}

export default {
  input: "app/javascript/activestorage-resumable/index.js",
  output: {
    file: "app/assets/javascripts/activestorage-resumable.js",
    format: "umd",
    name: "ActiveStorageResumable"
  },
  plugins: [
    resolve({ browser: true, preferBuiltins: true }),
    json(),
    babel({
      "presets": [
        [
          "@babel/env",
          {
            "modules": false,
            "useBuiltIns": "usage",
            "corejs": 3
          }
        ]
      ],
      exclude: 'node_modules/**'
    }),
    commonjs(),
    globals(),
    builtins(),
    terser(terserOptions)
  ]
}
