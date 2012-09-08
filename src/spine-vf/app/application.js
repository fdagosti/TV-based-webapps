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

    default: "banner"
  });

  var app = new App;
});