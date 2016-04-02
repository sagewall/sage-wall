var gulp = require("gulp");

gulp.task("css", function() {
    gulp.src("css/**/*.css")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("data", function() {
    gulp.src("data/**/*.*")
        .pipe(gulp.dest("dist/data"));
});

gulp.task("fonts", function() {
    gulp.src("fonts/**/*.*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function() {
    gulp.src("images/**/*.*")
        .pipe(gulp.dest("dist/images"));
});

gulp.task("js", function() {
    gulp.src("js/**/*.*")
        .pipe(gulp.dest("dist/js"));
});

gulp.task("templates", function(){
    gulp.src("templates/**/*.*")
        .pipe(gulp.dest("dist/templates"));
});

gulp.task("index", function(){
    gulp.src(["browserconfig.xml", "index.html", "manifest.json"])
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["css", "data", "fonts", "images", "js", "templates", "index"]);