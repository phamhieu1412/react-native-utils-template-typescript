module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        alias: {
          navigators: './src/navigators',
          screens: './src/screens',
          components: './src/components',
          shared: './src/shared',
          config: './src/config',
          assets: './src/assets',
        },
      },
    ],
  ],
};
