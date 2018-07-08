var gulp = require('gulp');
var url = require('url');
var uglify = require('gulp-uglify');
// gulp-webserver 启服务
var server = require("gulp-webserver");
gulp.task('minjs', function() {
    gulp.src('src/')
})

gulp.task("server", function() {
    gulp.src('src')
        .pipe(server({
            port: 9090, //端口号
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                };


            }
        }));
})