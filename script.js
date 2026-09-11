// Lógica de la web: renderizado de fichas, buscador, filtros y vista de detalle.
(function () {
  "use strict";

  const grid = document.getElementById("grid");
  const filtersEl = document.getElementById("filters");
  const searchInput = document.getElementById("searchInput");
  const resultsCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  let activeFilter = "Todas";
  let query = "";

  // Lista única de disciplinas para construir los filtros.
  const disciplinas = ["Todas", ...new Set(sinsombrero.flatMap((p) => p.disciplinas))];

  // Número de figuras por disciplina (para el contador de cada filtro).
  function countFor(disc) {
    return disc === "Todas"
      ? sinsombrero.length
      : sinsombrero.filter((p) => p.disciplinas.includes(disc)).length;
  }

  // Icono editorial según la disciplina principal de cada figura.
  const ICON_BY_DISC = {
    Pintura: "brush", Vanguardia: "brush", Ilustración: "brush", Surrealismo: "brush", Grabado: "brush",
    Escultura: "chisel",
    Filosofía: "book", Ensayo: "book",
    Escenografía: "mask", Teatro: "mask", Cine: "mask", Producción: "mask", Guion: "mask", Música: "mask",
    Poesía: "pen", Narrativa: "pen", Edición: "pen", Traducción: "pen", Escritura: "pen",
    "Literatura infantil": "pen", Periodismo: "pen", Activismo: "pen", Política: "pen", "Crítica de arte": "pen",
  };
  function iconFor(p) {
    for (const d of p.disciplinas) if (ICON_BY_DISC[d]) return ICON_BY_DISC[d];
    return "pen";
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function buildFilters() {
    disciplinas.forEach((disc) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (disc === activeFilter ? " is-active" : "");
      btn.type = "button";
      btn.innerHTML = `${esc(disc)}<span class="filter-btn__count">${countFor(disc)}</span>`;
      btn.addEventListener("click", () => {
        activeFilter = disc;
        document.querySelectorAll(".filter-btn").forEach((b) =>
          b.classList.toggle("is-active", b === btn)
        );
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  function matches(persona) {
    const byFilter =
      activeFilter === "Todas" || persona.disciplinas.includes(activeFilter);

    const haystack = [
      persona.nombre,
      persona.nombreCompleto,
      persona.lugar,
      persona.bio,
      persona.bioLarga,
      persona.cita || "",
      persona.disciplinas.join(" "),
      (persona.obras || []).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    const byQuery = query === "" || haystack.includes(query);
    return byFilter && byQuery;
  }

  function avatarMarkup(p, className) {
    if (p.imagen) {
      // Si la imagen falla al cargar, se sustituye por el avatar de iniciales.
      return `<img class="${className} ${className}--img" src="${esc(p.imagen)}"
        alt="Retrato de ${esc(p.nombre)}" loading="lazy"
        onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'${className}',style:'background:${p.color}',textContent:'${p.iniciales}'}))" />`;
    }
    return `<div class="${className}" style="background:${p.color}">${p.iniciales}</div>`;
  }

  function cardTemplate(p) {
    const vida = p.fallecimiento ? `${p.nacimiento}–${p.fallecimiento}` : `n. ${p.nacimiento}`;
    const icon = iconFor(p);
    const disc = p.disciplinas[0] || "";
    const media = p.imagen
      ? `<svg class="card-illus"><use href="#icon-${icon}"/></svg>
         <img class="card-photo" src="${esc(p.imagen)}" alt="Retrato de ${esc(p.nombre)}" loading="lazy" onerror="this.remove()" />`
      : `<svg class="card-illus"><use href="#icon-${icon}"/></svg>`;
    return `
      <article class="card" tabindex="0" role="button" data-id="${p.id}"
        aria-label="Ver ficha de ${esc(p.nombre)}">
        <div class="card-media">
          ${media}
          <span class="card-initials">${esc(p.iniciales)}</span>
          <span class="card-years">${vida}</span>
          <span class="card-disc"><svg class="icon"><use href="#icon-${icon}"/></svg>${esc(disc)}</span>
        </div>
        <div class="card-body">
          <h2 class="card-name">${esc(p.nombre)}</h2>
          <p class="card-bio">${esc(p.bio)}</p>
          <span class="card-cta">Ver ficha →</span>
        </div>
      </article>
    `;
  }

  const headCount = document.getElementById("headCount");

  function render() {
    const filtradas = sinsombrero.filter(matches);
    grid.innerHTML = filtradas.map(cardTemplate).join("");

    const n = filtradas.length;
    if (resultsCount) {
      resultsCount.textContent =
        n === 0
          ? ""
          : `${n} ${n === 1 ? "figura" : "figuras"}${
              activeFilter !== "Todas" ? " · " + activeFilter : ""
            }`;
    }
    if (headCount) headCount.textContent = `${sinsombrero.length} fichas`;

    emptyState.hidden = n !== 0;
  }

  // ---------- Vista de detalle ----------
  function openModal(id) {
    const p = sinsombrero.find((x) => x.id === id);
    if (!p) return;

    const vida = p.fallecimiento ? `${p.nacimiento} – ${p.fallecimiento}` : `n. ${p.nacimiento}`;
    const tags = p.disciplinas.map((d) => `<span class="tag">${esc(d)}</span>`).join("");
    const obras = (p.obras || []).map((o) => `<li>${esc(o)}</li>`).join("");

    // Biografía por párrafos (contenido propio con <em>); si no, texto simple escapado.
    const bioHtml = (p.bioParrafos && p.bioParrafos.length)
      ? p.bioParrafos.map((t) => `<p class="detail__bio">${t}</p>`).join("")
      : `<p class="detail__bio">${esc(p.bioLarga || p.bio)}</p>`;

    const datos = p.datos
      ? Object.entries(p.datos)
          .map(([k, v]) => `<div class="detail__dato"><dt>${esc(k)}</dt><dd>${v}</dd></div>`)
          .join("")
      : "";

    const fuentes = (p.fuentes || [])
      .map((f) =>
        f.href
          ? `<li><a href="${esc(f.href)}" target="_blank" rel="noopener">${f.label} ↗</a></li>`
          : `<li>${f.label}</li>`
      )
      .join("");

    // Galería de obras (imágenes locales) para figuras que la tengan.
    const galeria = (p.galeria || [])
      .map(
        (o) => `<figure class="detail__obra">
          <img src="${esc(o.src)}" alt="${esc(o.titulo)}" loading="lazy" />
          <figcaption>${esc(o.titulo)}</figcaption>
        </figure>`
      )
      .join("");

    modalContent.innerHTML = `
      <div class="detail">
        <div class="detail__media">
          ${avatarMarkup(p, "detail__avatar")}
          <div class="detail__tags">${tags}</div>
        </div>
        <div class="detail__info">
          <h2 class="detail__name" id="modalName">${esc(p.nombre)}</h2>
          <p class="detail__fullname">${esc(p.nombreCompleto)}</p>
          <div class="detail__meta">
            <span>📅 ${vida}</span>
            <span>📍 ${esc(p.lugar)}</span>
          </div>
          ${bioHtml}
          ${p.cita ? `<blockquote class="detail__quote">${esc(p.cita)}${p.citaFuente ? `<cite>${esc(p.citaFuente)}</cite>` : ""}</blockquote>` : ""}
          ${datos ? `<h3 class="detail__subtitle">Datos</h3><dl class="detail__datos">${datos}</dl>` : ""}
          ${obras ? `<h3 class="detail__subtitle">Obras destacadas</h3><ul class="detail__works">${obras}</ul>` : ""}
          ${galeria ? `<h3 class="detail__subtitle">Galería de obras</h3><div class="detail__galeria">${galeria}</div>` : ""}
          ${fuentes ? `<h3 class="detail__subtitle">Fuentes</h3><ul class="detail__fuentes">${fuentes}</ul>` : ""}
          ${p.enlace ? `<a class="detail__link" href="${esc(p.enlace)}" target="_blank" rel="noopener">Saber más en Wikipedia ↗</a>` : ""}
        </div>
      </div>
    `;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".card");
      if (card) {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // Filtros colapsables (solo si existen en el DOM).
  const filtersToggle = document.getElementById("filtersToggle");

  function refreshFiltersToggle() {
    if (!filtersEl || !filtersToggle) return;
    filtersEl.classList.add("is-collapsed");
    const overflows = filtersEl.scrollHeight > filtersEl.clientHeight + 2;
    filtersToggle.hidden = !overflows;
    if (!overflows) filtersEl.classList.remove("is-collapsed");
  }

  if (filtersToggle && filtersEl) {
    filtersToggle.addEventListener("click", () => {
      const collapsed = filtersEl.classList.toggle("is-collapsed");
      filtersToggle.textContent = collapsed ? "Ver más" : "Ver menos";
      filtersToggle.setAttribute("aria-expanded", String(!collapsed));
    });
    window.addEventListener("resize", () => {
      if (filtersToggle.textContent.trim() === "Ver menos") return;
      refreshFiltersToggle();
    });
  }

  if (filtersEl) buildFilters();
  refreshFiltersToggle();
  render();
})();
