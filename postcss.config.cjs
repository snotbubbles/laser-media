const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer(),
    purgecss({
      content: ['./**/*.html', './**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        // Bootstrap
        /^carousel/, 'active', 'show', 'fade',
        /^collapse/, /^collapsing/,
        'accordion-button', 'accordion-collapse',
        'accordion-body', 'accordion-item',

        // Font Awesome
        /^fa-solid$/, 
        /^fa-triangle-exclamation$/
      ]
    })
  ]
};
