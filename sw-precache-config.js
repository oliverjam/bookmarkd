module.exports = {
  runtimeCaching: [
    {
      urlPattern: /.epub/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'books',
        },
      },
    },
  ],
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)',
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
};
