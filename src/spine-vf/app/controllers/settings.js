var Settings = Spine.Controller.sub({
  init: function(){
    console.log("instantiating Settings");

    var zoneCreationParams = { 
      containerSelector: ".ca-menu",
      navSelectors: {
        item: "a",
        itemParent: "li",
        itemRow: ".ca-menu",
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
    $.get("app/views/" + "settings.html", function(html){
      that.el.html(html);
    that.uiSet=true;

   if (that.isActive())
        that.setFocus();

      console.log("toto settings"+that.isActive());
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
      console.log("setFocus Settings");
      window.App.keyController.setSelected($("#settingsFirstOne"));
    }

});