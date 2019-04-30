module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/env', {
      targets: {
        node: 'current',
      },
    }],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
  ],
};
