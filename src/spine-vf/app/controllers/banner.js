var Banner = Spine.Controller.sub({

  className: "bannerRoot",

  init: function(){
    console.log("instantiating Banner");

 this.routes({
        "banner": function(params){
          this.active();
        },
      });

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
      that.uiSet=true;
      if (that.isActive())
        that.setFocus();
    });
    return this;
  },

  activate:function(){
    Spine.Controller.prototype.activate.apply(this);
    if (!this.zoneSet){
      this.zoneSet = true;
      window.App.keyController.addBehaviorZone(this.zone);
    }
    this.navigate("banner");

    if (this.uiSet) 
     this.setFocus();
  },

  deactivate:function(){
    Spine.Controller.prototype.deactivate.apply(this);
    if (this.zoneSet){
      this.zoneSet = false;
      window.App.keyController.removeBehaviorZone(this.zone);
    }
  },

  uiSet:false,
  zoneSet:false,
  setFocus:function(){
    window.App.keyController.setSelected($("#firstOne"));
  }
});

