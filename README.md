# Gulp exercise

Gulp is a useful tool for front-end automation, so does npm script
</br>
this exericse is to make a gulpfile and install some plugins, also using a little bit npm script
</br>

**origin code** in  folder "eg from build-podcast"

###### gulp plugins includes:
- gulp-minify-css/gulp-clean-css :to compress css file
- gulp-rename : to rename file, eg: add '.min'
- gulp-uglify :to compress js file
- del :to delete old file before reload
- gulp-jshint : check syntax
- gulp-plumber : check syntax and debug without stop

######Tips:  gulp.watch

### Relevant resource:
0. [!!!AWESOME node school](https://nodeschool.io/zh-tw/)
1. [gulp homepage](https://github.com/gulpjs/gulp)
2. [gulp cheatsheet](https://github.com/osscafe/gulp-cheatsheet)
3. [getting start with gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
4. [advanced gulpfile](https://www.mikestreety.co.uk/blog/advanced-gulp-file)

###### Reference:
- [build-podcast gulp](https://build-podcast.com/gulp/)
- [jshint in gulp](https://www.xiabingbao.com/gulp/2015/10/15/gulp-jshint)
- [npm script1/](https://aotu.io/notes/2016/02/26/use-npm-script-instead-of-gulp/?utm_source=tuicool&utm_medium=referral)
[npm script2/](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
[!!npm script example](http://substack.net/task_automation_with_npm_run)
- [browsersync1/](http://www.browsersync.cn/docs/gulp/)
[browsersync2/](https://browsersync.io/docs/gulp/)
[browsersync3](https://segmentfault.com/a/1190000002607627)

### gulp exercise code:
```
mkdir gulp-exercise
npm init

//1-1 install
npm install gulp -g 
npm install gulp --save-dev

//1-2 create css/style.css

//1-3 install gulp-minify-css
npm install --save-dev gulp-minify-css

//1-4 create gulpfile.js then will create assets/style.css
gulp style

//1-5 create index.html & js/script.js

//1-6 install uglify
npm install gulp-uglify --save-dev
// update gulpfile & group gulp task into default

//1-7 install del
npm install del --save-dev
// update gulpfile
gulp delete

//1-8 install rename
npm install gulp-rename --save-dev
// update gulpfile & asset/all files will have suffix:min

//1-9 install jshint
npm install gulp-jshint --save-dev

//1-10 install plumber
```
