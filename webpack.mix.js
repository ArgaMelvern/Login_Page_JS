const mix = require('laravel-mix');

mix.js('resources/js/script.js', 'public/js') // Compile app.js from resources/js to public/js
mix.postCss('resources/css/index.css', 'public/css') // Compile app.js from resources/js to public/js
