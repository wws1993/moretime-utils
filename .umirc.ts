import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@moretime/utils',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/1.x/packages/theme-default/src/style/variables.less
    // '@c-primary': '#1DA57A',
  },
  // 把浏览器设为 false 则不会包含他的补丁
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  dynamicImport: {},
  chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      }
    });
  },
  // more config: https://d.umijs.org/config
});
