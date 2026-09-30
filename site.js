/* Applies config.js to every page: name injection, placeholder
   notice, nav state, footer year. No other JS on the site. */
(function () {
  var name = (typeof GROUP_NAME !== "undefined") ? GROUP_NAME : "The Group";

  document.querySelectorAll("[data-group-name]").forEach(function (el) {
    el.textContent = name;
  });
  document.title = document.title.replace(/\{\{GROUP_NAME\}\}/g, name);
  document.querySelectorAll("title").forEach(function (t) {
    t.textContent = t.textContent.replace(/\{\{GROUP_NAME\}\}/g, name);
  });

  var showNotice = (typeof SHOW_PLACEHOLDER_NOTICE !== "undefined") && SHOW_PLACEHOLDER_NOTICE;
  var notice = document.getElementById("placeholder-notice");
  if (notice && !showNotice) notice.remove();

  var year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });

  /* Active nav link */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
