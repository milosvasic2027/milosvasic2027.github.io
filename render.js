/* render.js — page builder. You do not need to edit this file. */
(function () {
  var P = window.PROFILE || PROFILE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  /* A value still marked [FILL IN] must never reach a visitor. Anything that
     is only a placeholder is dropped from the page instead of printed. */
  var PH = /\[\s*(FILL IN|CONFIRM)[^\]]*\]/i;
  function unset(v) {
    if (v == null) return true;
    var t = String(v).trim();
    if (!t) return true;
    return PH.test(t.replace(/^<b>[^<]*<\/b>\s*:?\s*/i, "").trim()) &&
           !t.replace(PH, "").replace(/^<b>[^<]*<\/b>\s*:?\s*/i, "").trim();
  }
  function clean(list) {
    return (list || []).filter(function (x) { return !unset(x); });
  }

  /* allow the <b> tags used in the list fields */
  var rich = function (s) {
    return esc(s).replace(/&lt;b&gt;/g, "<b>").replace(/&lt;\/b&gt;/g, "</b>");
  };

  /* ---- video address to embed address ---- */
  function embedUrl(u) {
    if (!u) return "";
    u = String(u).trim();
    var m;
    m = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if (m) return "https://www.youtube-nocookie.com/embed/" + m[1];
    m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return "https://player.vimeo.com/video/" + m[1];
    m = u.match(/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/);
    if (m) return "https://drive.google.com/file/d/" + m[1] + "/preview";
    m = u.match(/hudl\.com\/video\/(?:\d+\/)*([A-Za-z0-9]+)/);
    if (m) return "https://www.hudl.com/embed/video/" + m[1];
    if (/hudl\.com\/embed\//.test(u)) return u;
    return u;
  }

  function ytId(u) {
    var m = String(u || "").match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : "";
  }
  function autoThumb(u) {
    var id = ytId(u);
    return id ? "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg" : "";
  }
  function sourceName(u) {
    u = String(u || "");
    if (!u) return "";
    if (ytId(u)) return "YouTube";
    if (/hudl\.com/.test(u)) return "Hudl";
    if (/drive\.google\.com/.test(u)) return "Google Drive";
    if (/vimeo\.com/.test(u)) return "Vimeo";
    if (isLocalVideo(u)) return "Plays here";
    return "Link";
  }

  function isLocalVideo(u) { return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(String(u || "")); }

  function videoBlock(url, label, poster) {
    url = String(url || "").trim();
    if (!url) {
      return '<div class="ph"><b>' + esc(label || "Video slot open") + '</b>' +
             '<span>Paste the video address in profile.js to fill this frame.</span></div>';
    }
    if (isLocalVideo(url)) {
      return '<video controls preload="metadata" playsinline' +
             (poster ? ' poster="' + esc(poster) + '"' : '') +
             '><source src="' + esc(url) + '" type="video/mp4">' +
             'Your browser cannot play this file.</video>';
    }
    return '<iframe src="' + esc(embedUrl(url)) + '" title="' + esc(label || "Video") +
           '" allowfullscreen allow="accelerometer; autoplay; clipboard-write; ' +
           'encrypted-media; gyroscope; picture-in-picture"></iframe>';
  }

  function gallery(items) {
    if (!items || !items.length) return "";
    return '<div class="gal">' + items.map(function (g) {
      var cap = unset(g.caption) ? "" : g.caption;
      return '<figure class="gal-i"><img src="' + esc(g.src) + '" alt="' + esc(cap) +
             '" loading="lazy">' + (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "") +
             "</figure>";
    }).join("") + "</div>";
  }

  /* ---- header ---- */
  $("h-eyebrow").textContent = P.eyebrow || "";
  $("h-name").textContent = P.name || "";
  $("h-sub").textContent = P.tagline || "";
  $("h-meta").textContent = P.intro || "";
  document.title = (P.name || "Recruiting Profile") + " | " + (P.tagline || "");

  $("h-cta").innerHTML = (P.buttons || []).map(function (b, i) {
    var u = String(b.url || "");
    /* a target that is still a placeholder renders as a dashed, inert chip
       rather than a link that goes nowhere */
    if (!u || /\[FILL IN/i.test(u)) {
      return '<span class="btn btn-off" title="Not set yet">' + esc(b.label) + "</span>";
    }
    if (/^film:/.test(u)) {
      return '<a class="btn ' + (b.primary ? "btn-primary" : "btn-ghost") +
             '" href="#film" data-goto-film="' + esc(u.slice(5)) + '">' +
             esc(b.label) + "</a>";
    }
    return '<a class="btn ' + (b.primary ? "btn-primary" : "btn-ghost") +
           '" href="' + esc(u) + '"' +
           (/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "") + ">" +
           esc(b.label) + "</a>";
  }).join("");

  $("h-photo").innerHTML = P.photo
    ? '<img src="' + esc(P.photo) + '" alt="' + esc(P.name) + '">'
    : "<span>Photo slot open.<br>Add a file name to <b>photo</b> in profile.js.</span>";

  /* ---- stat strip ---- */
  $("stat-strip").innerHTML = (P.stats || []).map(function (s) {
    return '<div class="stat"><div class="v">' + esc(s.value) +
           '</div><div class="l">' + esc(s.label) + "</div></div>";
  }).join("");

  /* ---- schedule ---- */
  var CHIP = { "open gym": "chip-open", "game": "chip-game", "showcase": "chip-show" };
  if ($("sched-intro")) $("sched-intro").textContent = P.scheduleIntro || "";
  if ($("sched-foot")) $("sched-foot").textContent = P.scheduleNote || "";
  if ($("sched-table")) {
    var rows = (P.schedule || []).filter(function (r) { return !unset(r.date); });
    $("sched-table").innerHTML = rows.length
      ? '<div class="sched-row sched-head"><div>Date</div><div>Event</div>' +
        "<div>Location</div><div>Time</div></div>" +
        rows.map(function (r) {
          var cls = CHIP[String(r.type || "").toLowerCase()] || "chip-game";
          var loc = unset(r.location) ? "" : r.location;
          var tm  = unset(r.time) ? "" : r.time;
          var nt  = unset(r.note) ? "" : r.note;
          return '<div class="sched-row"><div class="sched-d">' + esc(r.date) +
            '</div><div class="sched-e">' +
            (r.type ? '<span class="chip ' + cls + '">' + esc(r.type) + "</span>" : "") +
            esc(r.event) + (nt ? "<small>" + esc(nt) + "</small>" : "") +
            '</div><div class="sched-l">' + esc(loc) +
            '</div><div class="sched-t">' + esc(tm) + "</div></div>";
        }).join("")
      : '<div class="sched-row"><div class="sched-e">No dates listed yet.</div></div>';
  }

  /* ---- film ---- */
  $("film-intro").textContent = P.filmIntro || "";

  var films = (P.films || []).filter(function (f) { return f && (f.video || f.link); });
  var playable = films.filter(function (f) { return f.video; });

  function showFilm(i) {
    var f = playable[i];
    if (!f) return;
    $("film-main").innerHTML = videoBlock(f.video, f.title, f.poster);
    $("film-title").textContent = f.title || "";
    $("film-note").textContent = f.note || "";
    Array.prototype.forEach.call(
      document.querySelectorAll(".reel[data-play]"),
      function (b) { b.setAttribute("aria-current", b.getAttribute("data-play") === String(i)); });
  }

  var pi = -1;
  $("film-list").innerHTML = films.map(function (f) {
    var ext = !f.video;
    var idx = ext ? -1 : ++pi;
    var thumb = f.thumb || f.poster || autoThumb(f.video || f.link);
    var inner =
      '<div class="reel-thumb">' +
      (thumb ? '<img src="' + esc(thumb) + '" alt="" loading="lazy">' : "") +
      '<span class="play"><i></i></span></div>' +
      '<div class="reel-b"><div class="t">' + esc(f.title) + '</div>' +
      '<div class="s">' + esc(f.badge || sourceName(f.video || f.link)) +
      (ext ? " &middot; opens in a new tab" : "") + "</div></div>";
    return ext
      ? '<a class="reel reel-ext" href="' + esc(f.link) +
        '" target="_blank" rel="noopener">' + inner + "</a>"
      : '<button class="reel" type="button" data-play="' + idx + '">' + inner + "</button>";
  }).join("");

  Array.prototype.forEach.call(
    document.querySelectorAll(".reel[data-play]"),
    function (b) {
      b.addEventListener("click", function () { showFilm(+b.getAttribute("data-play")); });
    });

  /* hero buttons that name a specific reel select it, then scroll to the player */
  Array.prototype.forEach.call(
    document.querySelectorAll("[data-goto-film]"),
    function (a) {
      a.addEventListener("click", function () {
        var want = a.getAttribute("data-goto-film");
        var idx = -1;
        playable.forEach(function (f, i) {
          if (idx === -1 && String(f.key || "") === want) idx = i;
        });
        if (idx === -1 && /^\d+$/.test(want)) idx = parseInt(want, 10);
        if (idx > -1) showFilm(idx);
      });
    });

  if (playable.length) showFilm(0);
  else {
    $("film-main").innerHTML = videoBlock("", "No film yet");
    $("film-title").textContent = "";
    $("film-note").textContent = "";
  }

  /* ---- academics ---- */
  $("acad-intro").textContent = P.academicsIntro || "";
  $("acad-table").innerHTML =
    "<tr><th>Item</th><th>Detail</th></tr>" +
    (P.academicsTable || []).filter(function (r) { return !unset(r[1]); })
      .map(function (r) {
        return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>";
      }).join("");
  $("acad-list").innerHTML = clean(P.academicsList).map(function (i) {
    return "<li>" + rich(i) + "</li>";
  }).join("");

  /* ---- serbia ---- */
  $("serbia-title").textContent = P.serbiaTitle || "";
  $("serbia-intro").textContent = P.serbiaIntro || "";
  $("serbia-video").innerHTML = P.serbiaVideo
    ? videoBlock(P.serbiaVideo, "Serbia U18 clips", P.serbiaPoster) : "";
  if (!P.serbiaVideo) { var sv = $("serbia-video"); if (sv) sv.style.display = "none"; }
  var sg = $("serbia-gallery"); if (sg) sg.innerHTML = gallery(P.serbiaGallery);
  function featureHTML(F) {
    if (!F || !F.src) return "";
    return '<figure class="feature' + (F.tall ? " tall" : "") + '"><img src="' +
      esc(F.src) + '" alt="' + esc(F.alt || "") +
      '" loading="lazy"><figcaption class="feature-cap">' +
      (F.source ? '<div class="fc-src">' + esc(F.source) + "</div>" : "") +
      (F.headline ? '<div class="fc-hl">' + esc(F.headline) + "</div>" : "") +
      (F.translation ? '<div class="fc-tr"><em>Translation:</em> ' +
        esc(F.translation) + "</div>" : "") +
      (F.note ? '<div class="fc-tr" style="margin-top:7px">' + esc(F.note) + "</div>" : "") +
      "</figcaption></figure>";
  }
  var sf = $("serbia-feature");
  if (sf) sf.innerHTML = featureHTML(P.serbiaFeature);
  var nf = $("season-feature");
  if (nf) nf.innerHTML = featureHTML(P.seasonFeature);
  var ng = $("season-gallery");
  if (ng) ng.innerHTML = gallery(P.seasonGallery);
  $("serbia-list").innerHTML = clean(P.serbiaList).map(function (i) {
    return "<li>" + rich(i) + "</li>";
  }).join("");
  var sLinks = (P.serbiaLinks || []).filter(function (l) { return l.url || !unset(l.label); });
  $("serbia-links").innerHTML = sLinks.length
    ? sLinks.map(function (l) {
        return l.url
          ? '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
            esc(l.label) + "</a></li>"
          : "<li>" + esc(l.label) + " <span style=\"opacity:.6\">(no link yet)</span></li>";
      }).join("")
    : "<li>Links go here. Add them in profile.js.</li>";

  /* ---- showcases ---- */
  $("show-intro").textContent = P.showcaseIntro || "";
  $("show-grid").innerHTML = (P.showcases || [])
    .filter(function (c) { return !unset(c.title); })
    .map(function (s) {
    /* focus: where to anchor the crop, for example "center 20%" for a portrait.
       Without a clip and without a photograph the frame is left out entirely,
       so a coach never sees an empty box. */
    var media = "";
    if (s.video) {
      media = videoBlock(s.video, s.title, s.poster);
    } else if (s.photo) {
      media = '<img src="' + esc(s.photo) + '" alt="' + esc(s.title) +
        '" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;' +
        'object-fit:cover;object-position:' + esc(s.focus || "center 20%") + '">';
    }
    return '<article class="evt">' +
      (media
        ? '<div class="video" style="border-radius:0;border:0;' +
          'border-bottom:1px solid var(--line);margin:0">' + media + "</div>"
        : "") +
      '<div class="evt-body"><div class="date">' + esc(unset(s.date) ? "" : s.date) + "</div><h3>" +
      esc(s.title) + "</h3><p>" + esc(unset(s.text) ? "" : s.text) + '</p><div class="tags">' +
      (s.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") +
      "</div></div></article>";
  }).join("");

  /* ---- aau ---- */
  $("aau-title").textContent = P.aauTitle || "";
  $("aau-intro").textContent = P.aauIntro || "";
  $("aau-video").innerHTML = videoBlock(P.aauVideo, "AAU clips", P.aauPoster);
  $("aau-list").innerHTML = clean(P.aauList).map(function (i) {
    return "<li>" + rich(i) + "</li>";
  }).join("");

  /* ---- season ---- */
  $("season-title").textContent = P.seasonTitle || "";
  $("season-intro").textContent = P.seasonIntro || "";
  $("champ-title").textContent = P.champTitle || "";
  $("champ-text").textContent = P.champText || "";
  $("season-video").innerHTML = videoBlock(P.seasonVideo, "Season clips", P.seasonPoster);
  $("season-list").innerHTML = clean(P.seasonList).map(function (i) {
    return "<li>" + rich(i) + "</li>";
  }).join("");

  /* ---- scouting quote ---- */
  var q = $("quote-box");
  if (q) {
    q.innerHTML = P.quote && P.quote.text
      ? '<blockquote class="quote">&ldquo;' + esc(P.quote.text) + '&rdquo;' +
        '<cite>&mdash; ' + esc(P.quote.source) + "</cite></blockquote>"
      : "";
  }

  /* ---- published coverage: real quotes, each with its source ---- */
  var pb = $("press-box");
  if (pb) {
    var press = (P.press || []).filter(function (q) { return q && q.text; });
    pb.innerHTML = press.length
      ? '<div class="press-h">What scouts have written</div><div class="press">' +
        press.map(function (q) {
          var cite = esc(q.source || "");
          if (q.url) cite = '<a href="' + esc(q.url) + '" target="_blank" rel="noopener">' + cite + "</a>";
          return '<div class="press-i"><p>&ldquo;' + esc(q.text) + '&rdquo;</p><cite>' +
                 cite + (q.date ? " &middot; " + esc(q.date) : "") + "</cite></div>";
        }).join("") + "</div>" +
        (unset(P.pressNote) ? "" : '<p class="press-n">' + esc(P.pressNote) + "</p>")
      : "";
  }

  /* ---- recruiting profile links ---- */
  var pl = $("profile-links");
  if (pl) {
    pl.innerHTML = (P.profileLinks || [])
      .filter(function (l) { return l.url || !unset(l.note); })
      .map(function (l) {
      return l.url
        ? '<a class="plink" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
          '<span class="pl-n">' + esc(l.label) + "</span><span class=\"pl-u\">" +
          esc(l.note || "") + "</span></a>"
        : '<span class="plink plink-off"><span class="pl-n">' + esc(l.label) +
          '</span><span class="pl-u">' + esc(l.note || "Link to come") + "</span></span>";
    }).join("");
  }

  /* ---- contact ---- */
  var cp = $("contact-photo");
  if (cp) {
    cp.innerHTML = P.contactPhoto
      ? '<img src="' + esc(P.contactPhoto) + '" alt="' + esc(P.name) + '" loading="lazy">'
      : "";
    if (!P.contactPhoto) cp.style.display = "none";
  }
  $("contact-grid").innerHTML = (P.contacts || []).map(function (c) {
    /* make every address and number inside the line clickable, so a coach on a
       phone can tap to write or to call */
    var d = esc(c.detail)
      .replace(/([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})/g,
               '<a href="mailto:$1">$1</a>')
      .replace(/(\b\d{3}-\d{3}-\d{4}\b)/g,
               '<a href="tel:$1">$1</a>');
    return '<div class="contact-card"><div class="role">' + esc(c.role) +
      '</div><div class="nm">' + esc(c.name) + '</div><div class="dt">' + d + "</div></div>";
  }).join("");

  $("foot-line").textContent = P.footer || "";

  /* ---- lightbox for every gallery photo ---- */
  (function () {
    var box = $("lightbox");
    if (!box) return;
    var im = $("lb-img"), cap = $("lb-cap");
    var shots = [], at = 0;

    /* Scope the viewer to the gallery that was clicked, so the arrows stay
       inside one set instead of running on into the next section. */
    function collect(from) {
      var scope = from ? from.closest(".gal") : null;
      shots = Array.prototype.slice.call(
        (scope || document).querySelectorAll(".gal-i img"));
    }
    function paint() {
      var n = shots[at];
      if (!n) return;
      im.src = n.getAttribute("src");
      im.alt = n.getAttribute("alt") || "";
      var f = n.parentNode.querySelector("figcaption");
      cap.textContent = (f ? f.textContent : "") +
        "   (" + (at + 1) + " of " + shots.length + ")";
    }
    function open(i) { at = i; paint(); box.classList.add("open");
      document.body.style.overflow = "hidden"; }
    function close() { box.classList.remove("open"); im.removeAttribute("src");
      document.body.style.overflow = ""; }
    function step(d) { if (!shots.length) return;
      at = (at + d + shots.length) % shots.length; paint(); }

    Array.prototype.forEach.call(document.querySelectorAll(".gal-i img"), function (n) {
      n.style.cursor = "zoom-in";
      n.addEventListener("click", function () {
        collect(n);
        open(shots.indexOf(n));
      });
    });
    $("lb-x").addEventListener("click", close);
    $("lb-p").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
    $("lb-n").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  })();
})();
