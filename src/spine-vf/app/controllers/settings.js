var Settings = Spine.Controller.sub({
  init: function(){
    console.log("instantiating Settings");
    this.render();
  },

render: function(){
      this.el.html($("#settingsTemplate").html());
    },

});