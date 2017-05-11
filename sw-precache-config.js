module.exports = {
  runtimeCaching: [
    {
      urlPattern: /amazonaws\.com\/all-the-epubs/,
      handler: 'cacheFirst',
      options: {
        cache: {
          name: 'books-cache',
        },
      },
    },
  ],
  verbose: true,
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map)',
    'build/icons/*',
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
};
