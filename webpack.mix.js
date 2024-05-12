const mix = require('laravel-mix');

mix.sass('source/scss/layout.scss', 'assets/css/')
    .sass('source/scss/pages/home.scss', 'assets/css/page/')
    .sass('source/scss/pages/whatWeDo.scss', 'assets/css/page/')
    .sourceMaps(true, 'source-map');

mix.js('source/js/pages/home.js', 'assets/js/page/')
    .js('source/js/pages/whatWeDo.js', 'assets/js/page/')
    .sourceMaps(true, 'source-map');

// Wordpress Custom Admin Login CSS
mix.sass('source/scss/tmdr-admin.scss', 'assets/css/')
    .sourceMaps(true, 'source-map');


mix.options({
    processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

mix.disableNotifications()