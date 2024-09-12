import resolve from "@rollup/plugin-node-resolve";

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
  ],
};