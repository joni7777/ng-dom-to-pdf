const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const angularFileSort = require('gulp-angular-filesort');

gulp.task('del-dist', function () {
	return del(['./dist/**']);
});

gulp.task('minify', ['del-dist'], function () {
	return gulp.src('./src/**/*.js')
		.pipe(angularFileSort())
		.pipe(sourcemaps.init())
		.pipe(concat('ng-dom-to-pdf.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist'));
});