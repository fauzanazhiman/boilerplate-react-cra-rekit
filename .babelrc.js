module.exports = function(api) {
    const presets = [
      [
        '@babel/env',
        {
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
            ie: '11',
          },
          useBuiltIns: 'entry',
          corejs: "3"
        },
      ],
      'react-app',
    ];
    const plugins = [
      "@babel/plugin-transform-arrow-functions",
      ['@babel/plugin-proposal-private-methods', { loose: true }]
    ];
    if (api.env('development')) {
      plugins.push('react-hot-loader/babel');
    }
    return { presets, plugins };
  };
  