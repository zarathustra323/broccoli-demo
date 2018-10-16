const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const compileSass = require('broccoli-sass-source-maps')(require('sass'));
const babel = require('broccoli-babel-transpiler');

const appRoot = 'app';

// Copy single index.html file from root.
const html = funnel(appRoot, {
  files: ['index.html'],
  annotation: 'Index file',
});

// Copy JS file
let js = funnel(appRoot, {
  files: ['app.js'],
  destDir: '/assets',
  annotation: 'JS files',
});

// Transpile ES6 to ES5
js = babel(js, {
  browserPolyfill: true,
  sourceMap: 'inline',
});

// Compile sass files
const css = compileSass([appRoot], 'styles/app.scss', 'assets/app.css', {
  sourceMap: true,
  sourceMapContents: true,
  annotation: 'Sass files',
});

// Copy public files
const public = funnel('public', {
  annotation: 'Public files',
});

module.exports = merge([html, css, js, public], { annotation: 'Final output' });
