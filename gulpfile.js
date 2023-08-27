var fileinclude = require("gulp-file-include"),
  gulp = require("gulp");

gulp.task("test", function () {
  gulp
    .src(["./pages/test.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("index", function () {
  gulp
    .src(["./pages/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});
