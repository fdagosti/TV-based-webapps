
$(function($){
  
  window.App = Spine.Stack.sub({
    controllers:{
      banner: Banner,
      settings: Settings
    },

    events: {
    "keydown": "keydown"
    },

    keydown: function(key){
      console.log("key down key received "+key);
      switch(key.keyCode){
        case 49:
          this.banner.active();
          return true;
        case 50:
          this.settings.active();
          return true;
      }
    },

    el:"body",
    // no need for default, the routing will take care of it
    // default: "banner",

  });

  App.keyController = new gtv.jq.KeyController();
  App.keyController.start();

  
  var app = new App;
  Spine.Route.setup();
  if (Spine.Route.getFragment() == "")
    app.banner.active();
});