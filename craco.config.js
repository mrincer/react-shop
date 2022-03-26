const path = require("path");

module.exports = {
    webpack: {
        resolve: {
            alias: {
                '@components:': path.resolve(__dirname, 'src/components/'),
                '@icons:': path.resolve(__dirname, 'src/assets/icons/'),
                '@containers': path.resolve(__dirname, 'src/containers/'),
                '@styles': path.resolve(__dirname, 'src/styles/'),
                '@logos:': path.resolve(__dirname, 'src/assets/logos/'),
            }
        }
    }
};