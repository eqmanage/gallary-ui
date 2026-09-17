(function () {
  var data = window.SITE_DATA;

  document.getElementById("artist-name").textContent = data.artist.name;

  var params = new URLSearchParams(window.location.search);
  var seriesId = params.get("series");
  var workId = params.get("work");
  var series = data.series.find(function (s) { return s.id === seriesId; });
  var index = series ? series.works.findIndex(function (w) { return w.id === workId; }) : -1;

  if (!series || index === -1) {
    document.querySelector(".artwork-main").hidden = true;
    document.getElementById("artwork-nav").hidden = true;
    document.getElementById("empty-note").hidden = false;
    return;
  }

  var work = series.works[index];

  document.title = work.title + " | " + data.artist.name + " アーカイブ";
  document.getElementById("series-back-link").textContent = "← " + series.title + " に戻る";
  document.getElementById("series-back-link").href = "series.html?series=" + encodeURIComponent(series.id);

  document.getElementById("artwork-series-tag").textContent = series.title;
  document.getElementById("artwork-title").textContent = work.title;
  document.getElementById("artwork-year").textContent = work.year;
  document.getElementById("artwork-medium").textContent = work.medium;
  document.getElementById("artwork-size").textContent = work.size;

  var descEl = document.getElementById("artwork-desc");
  if (work.description) {
    descEl.textContent = work.description;
  } else {
    descEl.remove();
  }

  var imgBox = document.getElementById("artwork-image");
  if (work.image) {
    imgBox.textContent = "";
    var img = document.createElement("img");
    img.src = work.image;
    img.alt = work.title;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    imgBox.appendChild(img);
  }

  document.getElementById("footer-artist-inline").textContent = "© " + data.artist.name + " アーカイブ";

  var prevLink = document.getElementById("prev-link");
  var nextLink = document.getElementById("next-link");

  function linkFor(w) {
    return "artwork.html?series=" + encodeURIComponent(series.id) + "&work=" + encodeURIComponent(w.id);
  }

  if (index > 0) {
    prevLink.href = linkFor(series.works[index - 1]);
  } else {
    prevLink.classList.add("disabled");
  }

  if (index < series.works.length - 1) {
    nextLink.href = linkFor(series.works[index + 1]);
  } else {
    nextLink.classList.add("disabled");
  }
})();
