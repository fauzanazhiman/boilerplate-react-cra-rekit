const { override, useBabelRc } = require("customize-cra");

const devServerConfig =  {
    // Extend/override the dev server configuration used by CRA
    // See: https://github.com/timarney/react-app-rewired#extended-configuration-options
    devServer: function(configFunction) {
      return function(proxy, allowedHost) {
        // Create the default config by calling configFunction with the proxy/allowedHost parameters
        // Default config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
        const config = configFunction(proxy, allowedHost);
  
        // Set loose allow origin header to prevent CORS issues
        config.headers =  {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            'Referrer-Policy' : 'no-referrer-when-downgrade'
          };
          
          
        return config;
      };
    },
  };

module.exports = { ...devServerConfig, webpack: override(useBabelRc())};