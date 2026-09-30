/* Light/dark mode toggle. Remembers the visitor's choice. */
(function () {
    var r = document.documentElement, b = document.getElementById("theme");
    function eff() { var t = r.getAttribute("data-theme"); if (t) return t; return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" }
    function paint() { var d = eff() === "dark"; b.innerHTML = d ? "&#9728; Light" : "&#9790; Dark"; b.setAttribute("aria-label", d ? "Switch to light mode" : "Switch to dark mode") }
    try { var s = localStorage.getItem("theme"); if (s === "dark" || s === "light") r.setAttribute("data-theme", s) } catch (e) { }
    paint();
    b.addEventListener("click", function () { var n = eff() === "dark" ? "light" : "dark"; r.setAttribute("data-theme", n); try { localStorage.setItem("theme", n) } catch (e) { } paint() });
})();