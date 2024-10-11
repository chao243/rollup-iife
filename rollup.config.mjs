import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/mqtt.js',
    format: 'iife',
    name: 'mqtt',
  },
  plugins: [
    resolve({
      browser: true,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }),
  ],
};