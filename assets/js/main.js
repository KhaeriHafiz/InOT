// navbar-show
function showing() {
  document.getElementById("nav-hp").style.display = "block";
}

function closing() {
  document.getElementById("nav-hp").style.display = "none";
}

(function () {
  "use strict";

  var treeviewMenu = $(".ul-no");

  // Activate sidebar treeview toggle
  $("[data-toggle='treeview']").click(function (event) {
    event.preventDefault();
    if (!$(this).parent().hasClass("is-expanded")) {
      treeviewMenu
        .find("[data-toggle='treeview']")
        .parent()
        .removeClass("is-expanded");
    }
    $(this).parent().toggleClass("is-expanded");
  });

  // Set initial active toggle
  $("[data-toggle='treeview.'].is-expanded")
    .parent()
    .toggleClass("is-expanded");
})();
