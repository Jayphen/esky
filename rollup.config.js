import globby from 'globby'
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default globby.sync('packages/**/index.js').map(inputFile => ({
  input: inputFile,
  output: {
    file: inputFile.replace('index.js', 'dist/index.mjs'),
    format: 'es'
  },
  output: {
    file: inputFile.replace('index.js', 'dist/index.js'),
    format: 'umd',
    name: 'eskyTabs'
  },
  plugins: [
    svelte(),
    resolve()
  ]
}));

