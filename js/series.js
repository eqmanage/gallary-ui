(function () {
  var data = window.SITE_DATA;
  var PAGE_SIZE = 12;

  document.getElementById("artist-name").textContent = data.artist.name;
  document.getElementById("footer-artist").textContent = "© " + data.artist.name + " アーカイブ";
  document.getElementById("footer-note").textContent = data.artist.footerNote;

  var params = new URLSearchParams(window.location.search);
  var seriesId = params.get("series");
  var series = data.series.find(function (s) { return s.id === seriesId; });

  if (!series) {
    document.querySelector(".series-head").hidden = true;
    document.getElementById("empty-note").hidden = false;
    return;
  }

  document.title = series.title + " | " + data.artist.name + " アーカイブ";
  document.getElementById("series-title").textContent = series.title;
  document.getElementById("series-desc").textContent = series.description;
  document.getElementById("series-count").textContent =
    series.period + " ・ 全 " + series.works.length + " 点";

  var grid = document.getElementById("works-grid");
  var shown = 0;

  function renderNextPage() {
    var next = series.works.slice(shown, shown + PAGE_SIZE);
    next.forEach(function (w) {
      var a = document.createElement("a");
      a.href = "artwork.html?series=" + encodeURIComponent(series.id) + "&work=" + encodeURIComponent(w.id);
      a.className = "work-card";

      var ph = document.createElement("div");
      ph.className = "ph";
      if (w.image) {
        var img = document.createElement("img");
        img.src = w.image;
        img.alt = w.title;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        ph.textContent = "";
        ph.appendChild(img);
        if (w.demo) {
          var badge = document.createElement("span");
          badge.className = "demo-badge";
          badge.textContent = "サンプル画像";
          ph.appendChild(badge);
        }
      } else {
        ph.textContent = "作品画像";
      }
      a.appendChild(ph);

      var title = document.createElement("div");
      title.className = "title";
      title.textContent = w.title;
      a.appendChild(title);

      var year = document.createElement("div");
      year.className = "year";
      year.textContent = w.year;
      a.appendChild(year);

      grid.appendChild(a);
    });
    shown += next.length;

    var loadMoreWrap = document.getElementById("load-more-wrap");
    loadMoreWrap.hidden = shown >= series.works.length;
  }

  document.getElementById("load-more-btn").addEventListener("click", renderNextPage);
  renderNextPage();
})();
