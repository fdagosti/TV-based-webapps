define(["./details","./sidebar"], function(Details, SideBar) {
  console.log("details = "+Details);
  return Spine.Controller.sub({

    className: "settingsRoot",

    init: function() {
      this.routes({
        "settings": function() {
          this.active();
        }
      });
      this.sidebar = new SideBar();
      this.append(this.sidebar);
      this.details = new Details();
      this.append(this.details);

      this.sidebar.bind("uiready", this.proxy(function() {
        console.log("received uiread");
        this.uiSet = true;
        this.setFocus();
      }));

    },

    activate: function() {
      Spine.Controller.prototype.activate.apply(this);

      if (this.uiSet) this.setFocus();

      this.sidebar.bind("focusChanged", this.proxy(function(newSelected) {
        this.details.trigger("change", newSelected);
      }));
    },

    deactivate: function () {
      console.log("deactive settings");
      Spine.Controller.prototype.deactivate.apply(this);
      this.sidebar.unbind("focusChanged");
    },


    uiSet: false,

    setFocus: function() {
      window.App.keyController.setSelected(this.$("#planner"));
    }

  });
});