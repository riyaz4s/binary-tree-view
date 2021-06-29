const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass')

const esBuildConfig = {
  entryPoints: ['src/app.tsx'],
  bundle: true,
  minify: true,
  outfile: 'public/bundle.js',
  plugins: [sassPlugin()],
};


if(process.env.NODE_ENV === 'dev') {
  esbuild.build({
    ...esBuildConfig,
    sourcemap: true,
    minify: false

  }).catch((e) => {
    console.error(e.message);
    throw e;
  })
} else {
  esbuild.build(esBuildConfig).catch((e) => console.error(e.message))
}
