// webpack.mix.js

let mix = require('laravel-mix');
const local = 'http://agrios.local.com';

mix.js('src/js/app.js', 'js')
    .sass('src/scss/style.scss', 'css')
    .setPublicPath('dist')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')
        ],
    })
    .browserSync({
        proxy: local,
        injectChanges: true,
        port: 3001,
        files: [
            './dist/css/*.css',
            './dist/js/*.js',
        ],
    })
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .version();