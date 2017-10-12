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
If you haven't used ```gulp``` before, make sure to:
```
$ sudo npm install gulp -g
```

then:
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
    .pipe(gulp.dest('dest/styles.css'));
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

## Using PostCSS

### *gulpfile.js*
```js
gulp.task('styles', function() {
  return gulp.src('styles.css')
    .pipe(postcss());
    .pipe(gulp.dest('dest/styles.css'));
});
```
Now we can go ahead and use the PostCSS processesor in our ```gulp.task```. *It is considered a function, hence the parentheses*

The way PostCSS works, it requires you to have additional processesors
 * I am using [autoprefixer](https://www.npmjs.com/package/autoprefixer) which is plugin to parse CSS and add vendor prefixes to CSS
  * Autoprefixer supports the unit function (calc()), which will be important when we introduce ```LostGrid```

```
$ npm install --save-dev autoprefixer-core
```

- require the additional processesor
```js
var autoprefixer = require('autoprefixer')
```

- within ```gulp.task```, define a variable that will hold all of the processesors and pass that variable into the ```postcss()``` function.

```js
gulp.task('styles', function() {
  var processesors = [
    autoprefixer
  ]
  return gulp.src('styles.css')
    .pipe(postcss(processesors))
    .pipe(gulp.dest('dest/styles.css'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
```

### Browsers and Autoprefixer
You can specify the browsers you want to target in your project by passing the version as a string in an array via an object and a function when you declare ```autoprefixer()``` inside ```var properties```

```js
var processesors = [
  autoprefixer({browsers: ['last 2 version']})
]
```

Now we have ```autoprefixer``` looking for only the last two versions of the most recent browsers.

### *styles.css*
To test that everything is connected and correctly formatted, add some basic styling to the ```styles.css``` file in the main directory.

```css
body {
  background: red;
  display: flex;
}
```

From your command line, use ```gulp``` to 'watch' for when you are working in the ```styles.css``` file and ```autoprefixer``` will prefix your style properties into the ```styles.css``` in your ```dest``` folder.
```
$ gulp watch:styles
```

***dest/styles.css***

Prefixed ```flexbox``` for various web-kit and Microsoft prefixes:
```css
body {
  background: red;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```
