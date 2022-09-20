const { alias } = require('react-app-rewire-alias');


module.exports = function override(config, env) {
    alias({

        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@constants': 'src/constants',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
    })(config);

    return config;
}



