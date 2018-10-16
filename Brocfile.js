const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

const appRoot = 'app';

// Copy single index.html file from root.
const html = funnel(appRoot, {
  files: ['index.html'],
  annotation: 'Index file',
});

// Copy JS file into assets.
const js = funnel(appRoot, {
  files: ['app.js'],
  destDir: '/assets',
  annotation: 'JS file',
});

// Copy CSS file into assets.
const css = funnel(appRoot, {
  srcDir: 'styles',
  files: ['app.css'],
  destDir: '/assets',
  annotation: 'CSS file',
});

// Copy public files
const public = funnel('public', {
  annotation: 'Public files',
});

module.exports = merge([html, css, js, public], { annotation: 'Final output' });
