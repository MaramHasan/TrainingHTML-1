
// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename=require('gulp-rename');
const postcss=require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
// File paths
const files = { 
    scssPath: './*.scss',
   
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        //.pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins cssnano for minify 
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('dist/css')
        
    ); // put final CSS in dist folder
}
function postcssTask(){    
    return src(files.scssPath)
       
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins cssnano for minify 
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('dist/css')
        
    ); // put final CSS in dist folder
}
function watchTask(){
    watch(files.scssPath,
        {interval: 1000, usePolling: true}, //Makes docker work
        series(
            
            parallel(scssTask,postcssTask)   
        )
    );    
}


exports.default = series(
    parallel(scssTask,postcssTask)   ,
    watchTask
);