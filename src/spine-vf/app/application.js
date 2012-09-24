requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'lib',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: '../app'
  },
  /*shim: {
        'spine.1.0.8/manager': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['jquery-1.8.1'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    }*/

});
// Start the main app logic.
requirejs(['app/controllers/banner', 'app/controllers/settings'], function(Banner, Settings) {

  $(function($) {

    window.App = Spine.Stack.sub({
      controllers: {
        banner: Banner,
        settings: Settings
      },

      events: {
        "keydown": "keydown"
      },

      keydown: function(key) {
        console.log("key down key received " + key);
        switch (key.keyCode) {
        case 49:
          this.banner.active();
          return true;
        case 50:
          this.settings.active();
          return true;
        }
      },

      el: "body"
      // no need for default, the routing will take care of it
      // default: "banner",
    });

    App.keyController = new gtv.jq.KeyController();

    window.app = new App();
    App.keyController.start();
    Spine.Route.setup();
    if (Spine.Route.getFragment() === "") app.banner.active();
  });
});