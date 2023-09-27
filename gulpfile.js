const gulp = require("gulp");
const scss = require("gulp-scss");
    gulp.task("scss", function () {
        gulp.src(
            "app/scss/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest("public/static/css"));
    });

    gulp.task("copy", function () {
        gulp.src("public/static/css/*.css")
        .pipe(gulp.dest("./Css"))
    });