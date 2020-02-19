module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader'),
      });
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.sass');
    return config;
  },
};
