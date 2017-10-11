# PostCSS-LostGrid

If you have cloned this repository, then make sure to install the dependancies:
```
$ npm install
```

If you'd like to set up ```PostCSS``` and ```LostGrid``` in a new repository or would just like to know how all this works, continue reading.


## Install Gulp
### What is [Gulp](https://www.npmjs.com/package/gulp)?

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow.

**Automation**
 - gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

**Platform-agnostic**
- Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.

**Strong Ecosystem**
 - Use npm modules to do anything you want + over 2000 curated plugins for streaming file transformations

**Simple**
 - By providing only a minimal API surface, gulp is easy to learn and simple to use


### To Install:
```
$ npm install gulp
```


### Project file structure

Add a ```gulpfile.js``` to your working directory:
```
$ touch gulpfile.js
```

Add another folder called ```dest``` to the working directory and add a ```styles.css``` file to the new folder.

 *Make sure to back out into the working directory after adding the files so as to avoid workflow confusion*
```
$ mkdir dest
$ cd dest
$ touch styles.css
$ cd ..
```


*Your file structure should look something like this to start with:*

![starting-file-structure](assests/starting-file-structure.png)


## Implement Gulp

### *gulpfile.js*
```js
var gulp = require('gulp');

gulp.task('styles', function() {
  return gulp.src('styles.css')
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
```
1. We have to require ```gulp``` since it is what we are using for a build runner in this project.
  * PostCSS offers alternative runners in their [Github repository](https://github.com/postcss/postcss) if you would like to use something other than ```gulp```


2. Indicate that ```styles.css``` (in the main directory) will be the source for the runner to compile . Then, the compiled file will be sent to the ```styles.css``` file within the 'destination' folder ```dest```.

3. If you are familar with Sass, then you have seen this ```watch``` before. We give ```gulp``` the ```task``` to ```watch``` our CSS files and when we make changes to them, ```gulp``` will see them and compile for us.


## Install and Require PostCSS

### Install gulp-postcss
[PostCSS gulp plugin](https://github.com/postcss/gulp-postcss) is used to pipe CSS through several plugins, but parse CSS only once.
```
$ npm install --save-dev gulp-postcss
```
*this will be added to our packages file and to our project*

### *gulpfile.js*

Require this package just like any other:
```js
var postcss = require('gulp-postcss')
```
