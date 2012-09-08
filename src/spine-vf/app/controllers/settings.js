var Settings = Spine.Controller.sub({
  init: function(){
    console.log("instantiating Settings");
    this.render();
  },

render: function(){
      // tests for ajax rendering ways
  	var that = this;
    $.get("app/views/" + "settings.html", function(html){
      that.el.html(html);
    });
    return this;
    },

});