import globby from 'globby'
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default globby.sync('packages/*/index.js').map(inputFile => {
  return {
    input: inputFile,
    output: [{
      file: inputFile.replace('index.js', 'dist/index.mjs'),
        format: 'es'
    },
    {
      file: inputFile.replace('index.js', 'dist/index.js'),
        format: 'umd',
        name: inputFile.replace(/.*\/(.*)\/.*/, "esky-$1")
    }],
    plugins: [
      svelte(),
      resolve()
    ]
  }
});

