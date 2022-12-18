import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

import packageJson from './package.json';

const config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: 'cjs', // export.component 어떻게 내보낼거냐 ? ex) IIFE 
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm', // export { component }
      sourcemap: true,
      name: "packageModule"
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
  ],
  external: ['react', 'react-dom', 'react-scripts']
  // external : 외부에서 받고 싶은 모듈
}

export default config;