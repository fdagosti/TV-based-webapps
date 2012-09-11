var Banner = Spine.Controller.sub({

  className: "bannerRoot",

  init: function(){
    console.log("instantiating Banner");

    var zoneCreationParams = { 
      containerSelector: ".bannerRoot",
      navSelectors: {
        item: "span",
        itemParent: "li",
        itemRow: "ul",
      },
      selectionClasses: {
        basic: "selected"
      },   
    };
    this.zone = new gtv.jq.KeyBehaviorZone(zoneCreationParams);
    

    this.render();
  },

  render: function(){
  	// tests for ajax rendering ways
  	var that = this;
    $.get("app/views/" + "banner.html", function(html){
      that.el.html(html);
      var test = $("#firstOne");
      that.uiSet=true;
      if (that.isActive())
        that.setFocus();
    });
    return this;
  },

  activate:function(){
    Spine.Controller.prototype.activate.apply(this);
    window.App.keyController.addBehaviorZone(this.zone);


    if (this.uiSet)
      this.setFocus();
  },

  deactivate:function(){
    Spine.Controller.prototype.deactivate.apply(this);
    window.App.keyController.removeBehaviorZone(this.zone);
  },

  uiSet:false,
  setFocus:function(){
    console.log("setFocus Banner");
    window.App.keyController.setSelected($("#firstOne"));
  }
});

