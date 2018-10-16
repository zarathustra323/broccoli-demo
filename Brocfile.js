const funnel = require('broccoli-funnel');

const appRoot = 'app';

// Copy single index.html file from root.
const html = funnel(appRoot, {
  files: ['index.html'],
  annotation: 'Index file',
});

module.exports = html;
