(function() {

  require({
    urlArgs: "cachebuster=" + ((new Date()).getTime()),
    paths: {
      angular: 'http://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.min.js',
      jquery: 'vendor/jquery',
      jqueryui: 'vendor/jquery-ui-1.10.0.custom.js',
      jqueryuitouchpunch: 'vendor/jquery.ui.touch-punch.js',
      bootstrap: 'vendor/bootstrap.js',
      mortgagecalc: 'mortgagecalc.js'
    }
  }, ['app/example-view'], function(ExampleView) {
    var view = new ExampleView();
    view.render('body');
  });

}).call(this);
