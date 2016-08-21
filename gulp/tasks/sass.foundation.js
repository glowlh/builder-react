'use strict';

module.exports = () => {
  let options = {
    path: $.path.sass.foundation
  };

  $.gulp.task('sass:foundation', function() {
    return $.gulp.src(options.path)
      .pipe($.gp.concat('foundation.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })
};
