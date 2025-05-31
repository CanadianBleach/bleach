// babel.config.js
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-transform-react-jsx',
  ],
};