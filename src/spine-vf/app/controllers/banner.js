var Banner = Spine.Controller.sub({

  init: function(){
    console.log("instantiating Banner");

    var zoneCreationParams = { 
      containerSelector: ".banner",
      navSelectors: {
        item: "span",
        itemParent: "li",
        itemRow: "ul",
      },
      selectionClasses: {
        basic: "selected"
      },   
    };
    var zone = new gtv.jq.KeyBehaviorZone(zoneCreationParams);
    window.App.keyController.addBehaviorZone(zone);

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
    
    if (this.uiSet)
      this.setFocus();
  },

  uiSet:false,
  setFocus:function(){
    console.log("setFocus Banner");
    window.App.keyController.setSelected($("#firstOne"));
  }
});

