define(function() {
  return Spine.Controller.sub({

    className: "detailsRoot",

    init: function() {

      var zoneCreationParams = {
        containerSelector: ".detailsRoot",
        navSelectors: {
          item: "div"
        },
        selectionClasses: {
          basic: "selected"
        },
        useGeometry: true
      };
      this.zone = new gtv.jq.KeyBehaviorZone(zoneCreationParams);
      window.App.keyController.addBehaviorZone(this.zone);

      Spine.bind("Settings::moveSelected", this.proxy(function(prevSelected, newSelected) {
        console.log("Details: receivedSelected " + prevSelected + " " + newSelected[0].id);
        this.render(newSelected[0].id);
      }));

    },

    render: function(id) {
      // tests for ajax rendering ways
      var that = this;
      $.get("app/views/settings/" + id + ".html", function(html) {
        console.log("received " + html);
        that.html(html);
        return this;
      });
    }
  });
});