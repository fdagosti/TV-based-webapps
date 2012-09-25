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
  }/*,
  shim: {
        'spine.1.0.8/spine': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: [ 'spine.1.0.8/spine',
                  'spine.1.0.8/manager',
                  'spine.1.0.8/route'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Spine'
        },
       
    }*/

});
// Start the main app logic.
requirejs(['app/controllers/banner', 'app/controllers/settings' ], function(Banner, Settings) {

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
          this.navigate("banner");
          return true;
        case 50:
        this.navigate("settings");
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