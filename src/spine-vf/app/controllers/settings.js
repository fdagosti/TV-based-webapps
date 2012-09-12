var Settings = Spine.Controller.sub({

  className: "settingsRoot",

  init: function(){

this.routes({
        "settings": function(params){
          this.active();
          console.log("settings", params.id)
        },
      });

    var zoneCreationParams = { 
      containerSelector: ".settingsRoot",
      navSelectors: {
        item: "div",
      },
      selectionClasses: {
        basic: "selected"
      },   
      selectHidden:true,
    };
    this.zone = new gtv.jq.KeyBehaviorZone(zoneCreationParams);
    window.App.keyController.addBehaviorZone(this.zone);
    
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
    });
    return this;
    },

    activate:function(){
      Spine.Controller.prototype.activate.apply(this);
      window.App.keyController.addBehaviorZone(this.zone);
this.navigate("settings");
      if (this.uiSet)
        this.setFocus();
    },

    deactivate:function(){
      Spine.Controller.prototype.deactivate.apply(this);
      window.App.keyController.removeBehaviorZone(this.zone);
    },

    uiSet:false,
    setFocus:function(){
      console.log("setFocus Settings");
      window.App.keyController.setSelected($("#settingsFirstOne"));
    }

});