'use strict';

module.exports = () => {
  $.gulp.task('clean', cb => $.rimraf($.config.root, cb));
};
