const gulp=require("gulp");
// 转存css
gulp.task("css",()=>{
    return gulp.src(["css/*.css"])
    .pipe(gulp.dest("dist/css"))
});
// 压缩css
// var cleanCss=require("gulp-clean-css")
// gulp.task("css",()=>{
//     return gulp.src(["styles/*.css"])
//     .pipe(cleanCss())
//     .pipe(gulp.dest("dist/css"))
// });
// 实时刷新
gulp.task("html",()=>{
    return gulp.src("*.html").pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
});
gulp.task("watch",()=>{
    gulp.watch("*.html",["html"])
    gulp.watch("css/*.css",["html","css"])
    // gulp.watch("register.html",["html"])
});
const connect=require("gulp-connect");
gulp.task('connect',function(){
    connect.server({
        port:8888,
        root:"dist/",
        // 中间件;反向代理
        middleware:function(connect , opt){
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        },
        livereload:true
    })
});
gulp.task("default",["watch","connect"])

//js的转存指令script
gulp.task("script",()=>{
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
})
//转存images
gulp.task("images",()=>{
    return gulp.src(["images/*jpg","images/*.png","images/*.gif","images/*.jpeg"])
    .pipe(gulp.dest("dist/images"))
})
// gulp合并和压缩
// var concat = require('gulp-concat');
// var uglify = require("gulp-uglify");
// gulp.task("script",()=>{
//     gulp.src("script/libs/*.js","script/module/*.js","script/app/*.js",
//     "!script/libs/jqury.js")
//     //合并为一个js文件
//     .pipe(gulp.concat("main.js"))
//     //压缩
//     .pipe(gulp.uglify())
//     .pipe(gulp.dest("dist/script"))
// })
// "!表示这个文件不压缩


// 编译：es6=>es5
// babel插件
// const gulp=require("gulp");
// var babel=require("gulp-babel");

// gulp.task("es6",()=>{
//     return gulp.src("script/es2015/es6.js")
//     .pipe(babel({
//         presets:['@babel/env']
//     }))
//     .pipe(gulp.dest("dist/script"));
// })