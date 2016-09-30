var gulp = require('gulp');
var replace = require('gulp-replace-task');
var gulpUtil = require('gulp-util');

var ENV_MAP = {
  'dev': {
    'API_URL': 'https://api.myjson.com/bins/'
  },
  'qa': {
    'API_URL': 'https://qa.craftsvilla.com/'
  },
  'staging': {
    'API_URL': 'https://staging.craftsvilla.com/'
  },
  'production': {
    'API_URL': 'https://craftsvilla.com/international/'
  },
  'post': {
    'API_URL': 'https://appapi2.craftsvilla.com/'
  }
}

var ENVIRONMENTS = ['dev', 'qa', 'staging', 'production', 'post']

gulp.task('default', function(){
  var envIndex = process.argv.indexOf('--env');
  if(envIndex == -1){
    throw new gulpUtil.PluginError({
      plugin: 'default',
      message: 'pass environment type in following format gulp --env'
    });
  }
  else {
    var env = process.argv[envIndex + 1];
    if(ENVIRONMENTS.indexOf(env) == -1){
      throw new gulpUtil.PluginError({
        plugin: 'default',
        message: 'Environment variable should be one of ' + ENVIRONMENTS.join(' or ')
      })
    }
    else {
      return gulp.src(['src/app/shared/services/http-client.service.ts'])
          .pipe(replace({
            patterns: [
              {
                match: /private BASE_URL = \'(.*)';/g,
                replacement: function(){
                  gulpUtil.log('found a match')
                  return "private BASE_URL = " + "'" + ENV_MAP[env]['API_URL'] + "';";
                }
              }
            ]
          })) .pipe(gulp.dest('src/app/shared/services/'));
    }
  }

})
