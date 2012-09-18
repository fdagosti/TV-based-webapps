var SideBar = Spine.Controller.sub({

className: "sidebarRoot",

  init: function(){
    var that = this;
    var zoneCreationParams = { 
      containerSelector: ".sidebarRoot",
      navSelectors: {
        item: "div"
      },
      selectionClasses: {
        basic: "selected"
      },   
      useGeometry: true,
      actions: {
        moveSelected: function(selectedItem, newSelected){
          Spine.trigger("Settings::moveSelected",selectedItem, newSelected);
        }
      }
    };
    this.zone = new gtv.jq.KeyBehaviorZone(zoneCreationParams);
    window.App.keyController.addBehaviorZone(this.zone);
    this.render();
  },

render: function(){
      // tests for ajax rendering ways
  	var that = this;
    $.get("app/views/settings/" + "sidebar.html", function(html){
      that.html(html);
      that.trigger("uiready");

   
    });
    return this;
    },

   

});