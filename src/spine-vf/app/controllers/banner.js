var Banner = Spine.Controller.sub({

  init: function(){
    console.log("instantiating Banner");
    console.log("toto");
    this.render();
  },

  render: function(){

  	// tests for ajax rendering ways
  	var that = this;
    $.get("app/views/" + "banner.html", function(html){
      //var html = $(template).tmpl();
      that.el.html(html);
    });
    return this;

   // regular rendering way
      // this.el.html($("#bannerTemplate").html());
    },

});

