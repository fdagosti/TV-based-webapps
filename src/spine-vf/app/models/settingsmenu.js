var SettingsMenu = Spine.Model.setup("SettingsMenu", ["menuId", "detailsViewName"]);

var planner = new ProgramEvent({menuId: "planner", detailsViewName: "planner.html"});
planner.save();
var grid = new ProgramEvent({menuId: "grid", detailsViewName: "grid.html"});
grid.save();
var pref = new ProgramEvent({menuId: "preferences", detailsViewName: "pref.html"});
pref.save();
var reset = new ProgramEvent({menuId: "reset", detailsViewName: "reset.html"});
reset.save();

