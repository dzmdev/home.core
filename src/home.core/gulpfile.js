var gulp = require("gulp"),
    less = require("gulp-less"),
    del = require("del");

gulp.task("clean", function () {
    return del("wwwroot/**/*");
});

gulp.task("copy:modules", function () {
    return gulp.src("./node_modules/**/*")
		.pipe(gulp.dest("./wwwroot/modules"));
});

gulp.task("less", function () {
    return gulp.src("./Views/Home/home.less")
      .pipe(less())
      .pipe(gulp.dest("./wwwroot/Home"));
});

gulp.task("default", ["copy:modules", "less"]);