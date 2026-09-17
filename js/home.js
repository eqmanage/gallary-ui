(function () {
  var data = window.SITE_DATA;

  document.getElementById("artist-name").textContent = data.artist.name;
  document.getElementById("artist-tagline").textContent = data.artist.tagline;
  document.getElementById("artist-intro").textContent = data.artist.intro;
  document.getElementById("footer-artist").textContent = "© " + data.artist.name + " アーカイブ";
  document.getElementById("footer-note").textContent = data.artist.footerNote;

  var totalWorks = data.series.reduce(function (sum, s) { return sum + s.works.length; }, 0);
  document.getElementById("collections-summary").textContent =
    "全 " + data.series.length + " シリーズ・" + totalWorks + " 点";

  var grid = document.getElementById("collections-grid");
  data.series.forEach(function (s) {
    var a = document.createElement("a");
    a.href = "series.html?series=" + encodeURIComponent(s.id);
    a.className = "collection-card";

    var ph = document.createElement("div");
    ph.className = "ph";
    var coverWork = s.works.find(function (w) { return w.image; });
    if (coverWork) {
      var img = document.createElement("img");
      img.src = coverWork.image;
      img.alt = s.title;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      ph.appendChild(img);
      if (coverWork.demo) {
        var badge = document.createElement("span");
        badge.className = "demo-badge";
        badge.textContent = "サンプル画像";
        ph.appendChild(badge);
      }
    } else {
      ph.textContent = "作品画像";
    }
    a.appendChild(ph);

    var h3 = document.createElement("h3");
    h3.textContent = s.title;
    a.appendChild(h3);

    var meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = s.period + " ・ " + s.works.length + " 点";
    a.appendChild(meta);

    grid.appendChild(a);
  });
})();
