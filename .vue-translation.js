const path = require('path');
const {JSONAdapter} = require('vue-translation-manager');

module.exports = {
    srcPath: path.join(__dirname, '/'),
    adapter: new JSONAdapter({
        path: path.join(__dirname, '/locales/'),
    }),
    languages: ['ru', 'en'],
};
