const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx'),
    ],
  }),
  framework: '@storybook/react',
  core: { builder: 'webpack5' },
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    config.plugins.push(
      new webpack.DefinePlugin({
        'import.meta.env': JSON.stringify(process.env),
      }),
    )
    return config
  },
}
