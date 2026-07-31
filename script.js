const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const backToTopButton = document.querySelector('.back-to-top');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    backToTopButton?.classList.add('visible');
  } else {
    backToTopButton?.classList.remove('visible');
  }
});

backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const timelineElement = document.querySelector('#journey-timeline');

if (timelineElement) {
  const TIMELINE_START = new Date('2020-01-01T00:00:00');
  const TIMELINE_END = new Date('2028-12-31T23:59:59');
  const today = new Date();
  const seatechStart = '2024-09-01';
  const graduationDate = '2027-09-01';

  const timelineData = [
    {
      id: 'bac', type: 'event', category: 'formation', start: '2022-07-01',
      label: 'Baccalauréat', dateLabel: 'Juillet 2022', title: 'Obtention du baccalauréat',
      description: 'Obtention du baccalauréat et début de mon parcours dans l’enseignement supérieur scientifique.',
      badges: ['Formation'], milestone: true, labelPosition: 'above'
    },
    {
      id: 'prepa', type: 'period', category: 'prepa', start: '2022-09-01', end: '2024-06-30',
      label: 'Classe préparatoire', dateLabel: 'Sept. 2022 – juin 2024', title: 'Classe préparatoire PCSI – PC*',
      description: 'Deux années de classe préparatoire durant lesquelles j’ai développé de solides bases en mathématiques, physique, mécanique et sciences de l’ingénieur.',
      badges: ['Mathématiques', 'Physique', 'Mécanique', 'Sciences de l’ingénieur', 'Méthodes de travail'],
      lane: 139, labelPosition: 'above', labelTop: -42
    },
    {
      id: 'seatech', type: 'period', category: 'seatech', start: seatechStart,
      end: today.toISOString().slice(0, 10), futureEnd: graduationDate,
      label: 'SeaTech<br><span class="journey-label-secondary">Cycle ingénieur</span>', dateLabel: 'Sept. 2024 – sept. 2027', title: 'Cycle ingénieur SeaTech',
      description: 'Formation d’ingénieur en mécanique, modélisation, calcul scientifique et simulation numérique à SeaTech – Université de Toulon.',
      badges: ['Mécanique des fluides', 'CFD', 'Calcul scientifique', 'Programmation'],
      lane: 139, labelPosition: 'above', labelTop: -58
    },
    {
      id: 'seagale', type: 'period', category: 'work', start: '2025-06-01', end: '2025-07-31',
      label: 'Stage SEAGALE', dateLabel: 'Juin – juillet 2025', title: 'Stage chez SEAGALE',
      description: 'Première expérience en milieu industriel, avec une découverte du fonctionnement de l’entreprise, des méthodes de production et du travail en équipe.',
      badges: ['Environnement industriel', 'Production', 'Organisation', 'Travail en équipe'],
      image: 'assets/images/project-seagale.jpg', lane: 160, labelPosition: 'below', labelShift: -38, labelTop: 70
    },
    {
      id: 'naca-project', type: 'event', category: 'seatech', start: '2026-01-15',
      label: 'Projet NACA 4412', dateLabel: '2026', title: 'Simulation CFD d’un profil NACA 4412',
      description: 'Étude numérique de l’écoulement autour d’un profil NACA 4412 pour différents angles d’attaque, avec analyse des coefficients de portance, de traînée et de la convergence des simulations.',
      badges: ['OpenFOAM', 'CFD', 'Python', 'Linux', 'Maillage', 'Post-traitement'],
      image: 'assets/images/project-naca4412.png', link: '#project-naca4412', compact: true
    },
    {
      id: 'ls-project', type: 'event', category: 'seatech', start: '2026-03-15',
      label: 'Projet LS-0417', dateLabel: '2026', title: 'Simulation du profil LS-0417',
      description: 'Étude numérique d’un écoulement bidimensionnel autour du profil aérodynamique LS-0417 et analyse de ses performances.',
      badges: ['OpenFOAM', 'CFD', 'Python', 'Aérodynamique', 'Post-traitement'],
      image: 'assets/images/project-ls0417.png', link: '#project-ls0417', compact: true
    },
    {
      id: 'prague', type: 'period', category: 'mobility', start: '2026-05-01', end: '2026-08-31',
      label: 'Stage à Prague', dateLabel: 'Mai – août 2026', title: 'Stage à Prague – CTU',
      description: 'Stage académique au Czech Technical University in Prague consacré à la simulation numérique et à la caractérisation aérodynamique de profils d’ailes.',
      points: ['Simulations CFD sous OpenFOAM', 'Étude du profil LS-0417', 'Analyse des coefficients aérodynamiques', 'Outils Python de post-traitement', 'Comparaison de configurations de profils évolutifs'],
      badges: ['OpenFOAM', 'CFD', 'Python', 'Linux', 'Aérodynamique', 'Analyse de données'],
      image: 'assets/images/project-ls0417.png', link: '#project-ls0417', lane: 160, labelPosition: 'below', labelShift: 42, labelTop: 70
    },
    {
      id: 'diploma', type: 'event', category: 'formation', start: graduationDate,
      label: 'Diplôme d’ingénieur', dateLabel: 'Septembre 2027', title: 'Diplôme d’ingénieur SeaTech',
      description: 'Obtention prévue du diplôme d’ingénieur de SeaTech, avec une spécialisation en mécanique, modélisation et simulation numérique.',
      badges: ['Objectif futur'], milestone: true, future: true, labelPosition: 'above', labelTop: -48
    }
  ];

  const yearsElement = document.querySelector('#journey-years');
  const itemsElement = document.querySelector('#journey-items');
  const detailElement = document.querySelector('#journey-detail');
  const emptyElement = document.querySelector('#journey-empty');
  const detailWrap = document.querySelector('#journey-detail-wrap');
  let activeId = null;
  let openTimer;
  let closeTimer;

  const datePosition = (dateValue) => {
    const date = dateValue instanceof Date ? dateValue : new Date(`${dateValue}T00:00:00`);
    const ratio = (date - TIMELINE_START) / (TIMELINE_END - TIMELINE_START);
    return Math.max(0, Math.min(100, ratio * 100));
  };

  for (let year = 2020; year <= 2028; year += 1) {
    const tick = document.createElement('span');
    tick.className = 'journey-year';
    tick.style.left = `${datePosition(`${year}-01-01`)}%`;
    tick.textContent = String(year);
    yearsElement.appendChild(tick);
  }

  const makeEventButton = (item) => {
    const button = document.createElement('button');
    const start = datePosition(item.start);
    const end = item.end ? datePosition(item.end) : start;
    const isPeriod = item.type === 'period';
    button.type = 'button';
    button.className = `journey-event category-${item.category}${item.milestone ? ' is-milestone' : ''}${item.future ? ' is-future' : ''}${item.compact ? ' is-compact' : ''}`;
    button.dataset.timelineId = item.id;
    button.setAttribute('aria-label', `${item.title}, ${item.dateLabel}. Afficher les détails`);
    button.style.left = isPeriod ? `${start}%` : `calc(${start}% - 22px)`;
    button.style.top = `${isPeriod ? item.lane : 133}px`;
    button.style.width = isPeriod ? `${Math.max(end - start, 1.2)}%` : '44px';
    button.style.height = '44px';
    button.innerHTML = `
      <span class="${isPeriod ? 'journey-period-bar' : 'journey-marker'}" aria-hidden="true"></span>
      <span class="journey-event-label" style="top:${item.labelTop ?? (item.labelPosition === 'above' ? -28 : 38)}px;left:calc(50% + ${item.labelShift ?? 0}px)">${item.label}${item.showAxisDate === false ? '' : `<small class="journey-event-date">${item.dateLabel}</small>`}</span>
      <span class="journey-tooltip" role="tooltip">${item.title}<br>${item.dateLabel}</span>`;

    if (item.futureEnd) {
      const future = document.createElement('span');
      const futureEnd = datePosition(item.futureEnd);
      future.className = 'journey-future-bar';
      future.style.left = `${end}%`;
      future.style.top = `${item.lane + 16}px`;
      future.style.width = `${Math.max(futureEnd - end, 0)}%`;
      itemsElement.appendChild(future);
    }

    return button;
  };

  timelineData.forEach((item) => itemsElement.appendChild(makeEventButton(item)));

  const todayMarker = document.createElement('span');
  todayMarker.className = 'journey-today';
  todayMarker.style.left = `${datePosition(today)}%`;
  todayMarker.textContent = 'Aujourd’hui';
  itemsElement.appendChild(todayMarker);

  const closeDetail = (returnFocus = false) => {
    window.clearTimeout(openTimer);
    activeId = null;
    itemsElement.querySelectorAll('.journey-event').forEach((event) => {
      event.classList.remove('is-active');
      event.setAttribute('aria-expanded', 'false');
    });
    detailElement.classList.remove('is-open');
    detailElement.setAttribute('aria-hidden', 'true');
    emptyElement.hidden = false;
    if (returnFocus) document.querySelector(`[data-timeline-id="${detailElement.dataset.sourceId}"]`)?.focus();
  };

  const showDetail = (item, button) => {
    window.clearTimeout(closeTimer);
    activeId = item.id;
    itemsElement.querySelectorAll('.journey-event').forEach((event) => {
      const selected = event === button;
      event.classList.toggle('is-active', selected);
      event.setAttribute('aria-expanded', String(selected));
    });

    const imageMarkup = item.image ? `<img class="journey-detail-image" src="${item.image}" alt="Illustration de ${item.title}">` : '';
    const pointsMarkup = item.points?.length ? `<ul>${item.points.map((point) => `<li>${point}</li>`).join('')}</ul>` : '';
    const badgesMarkup = item.badges?.length ? `<div class="tags">${item.badges.map((badge) => `<span>${badge}</span>`).join('')}</div>` : '';
    const linkMarkup = item.link ? `<a class="btn btn-primary" href="${item.link}">Voir le projet</a>` : '';
    detailElement.className = `journey-detail${item.image ? ' has-image' : ''}`;
    detailElement.dataset.sourceId = item.id;
    detailElement.innerHTML = `
      ${imageMarkup}
      <div class="journey-detail-content">
        <p class="journey-detail-date">${item.dateLabel}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${pointsMarkup}${badgesMarkup}${linkMarkup}
      </div>
      <button class="journey-detail-close" type="button" aria-label="Fermer les détails"><i class="fas fa-xmark" aria-hidden="true"></i></button>`;
    emptyElement.hidden = true;
    detailElement.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => detailElement.classList.add('is-open'));
    detailElement.querySelector('.journey-detail-close').addEventListener('click', () => closeDetail(true));
  };

  itemsElement.querySelectorAll('.journey-event').forEach((button) => {
    const item = timelineData.find((entry) => entry.id === button.dataset.timelineId);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      window.clearTimeout(openTimer);
      if (activeId === item.id) closeDetail();
      else showDetail(item, button);
    });
    button.addEventListener('mouseenter', () => {
      window.clearTimeout(closeTimer);
      openTimer = window.setTimeout(() => showDetail(item, button), 160);
    });
    button.addEventListener('mouseleave', () => {
      window.clearTimeout(openTimer);
      closeTimer = window.setTimeout(() => closeDetail(), 320);
    });
  });

  detailWrap.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
  detailWrap.addEventListener('mouseleave', () => {
    closeTimer = window.setTimeout(() => closeDetail(), 320);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeId) closeDetail(true);
  });
}
