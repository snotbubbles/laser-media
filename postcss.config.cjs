const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./**/*.html', './**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        // Carousel
        /^carousel/,
        'active',
        'show',
        'fade',

        // Accordion / Collapse
        /^collapse/,
        /^collapsing/,
        'accordion-button',
        'accordion-collapse',
        'accordion-body',
        'accordion-item'
      ]
    })
  ]
};
