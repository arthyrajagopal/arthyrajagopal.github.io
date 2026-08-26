/**
 * main.js - Core interactive logic for Arthy L. R. Portfolio
 * Clean, lightweight, zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderFeaturedProjects('all');
  initProjectFilters();
  renderFreelanceCatalog();
  initFreelanceSearch();
  initContactForm();
  initCopyActions();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation & Smooth Scroll
   -------------------------------------------------------------------------- */
function initNavigation() {
  const hamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('is-active');
      hamburger.setAttribute('aria-expanded', isActive);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Featured Projects Dynamic Renderer & Filtering
   -------------------------------------------------------------------------- */
function renderFeaturedProjects(filterCategory = 'all') {
  const container = document.getElementById('featuredProjectsGrid');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => {
        if (filterCategory === 'laravel') return p.category === 'laravel' || p.tags.includes('Laravel');
        if (filterCategory === 'php') return p.category === 'php' || p.tags.includes('PHP') || p.tags.includes('CodeIgniter');
        if (filterCategory === 'mysql') return p.tags.includes('MySQL');
        if (filterCategory === 'web') return true;
        return true;
      });

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-id="${p.id}">
      <div class="project-card-top">
        <div class="project-meta-row">
          <span class="project-type-badge">${escapeHTML(p.type)}</span>
          ${p.hasLiveUrl ? `<span class="project-live-indicator"><span class="status-dot"></span> Live in Production</span>` : ''}
        </div>
        <h3 class="project-title">${escapeHTML(p.title)}</h3>
        <p class="project-desc">${escapeHTML(p.shortDescription)}</p>

        <div class="project-specs">
          <div class="spec-item">
            <span class="spec-label">Problem Solved</span>
            <p class="spec-val">${escapeHTML(p.problem)}</p>
          </div>
          <div class="spec-item" style="margin-top: 8px;">
            <span class="spec-label">My Backend Contribution</span>
            <p class="spec-val">${escapeHTML(p.contribution)}</p>
          </div>
        </div>

        <ul class="project-features-list">
          ${p.backendFeatures.slice(0, 3).map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>

        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
        </div>
      </div>

      <div class="project-card-actions">
        ${p.hasLiveUrl ? `
          <a href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Live Demo ↗
          </a>
        ` : ''}
        <button class="btn btn-secondary btn-sm" onclick="openCaseStudy('${p.id}')">
          Read Case Study
        </button>
      </div>
    </article>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderFeaturedProjects(filter);
    });
  });
}

/* --------------------------------------------------------------------------
   3. Freelance & Client Projects Catalog (All 26 Live Projects)
   -------------------------------------------------------------------------- */
function renderFreelanceCatalog(searchTerm = '') {
  const grid = document.getElementById('freelanceGrid');
  const countEl = document.getElementById('freelanceCountBadge');
  if (!grid) return;

  const normalized = searchTerm.toLowerCase().trim();
  const list = ALL_FREELANCE_PROJECTS.filter(item => {
    if (!normalized) return true;
    return (
      item.name.toLowerCase().includes(normalized) ||
      item.category.toLowerCase().includes(normalized) ||
      item.description.toLowerCase().includes(normalized) ||
      item.tech.some(t => t.toLowerCase().includes(normalized)) ||
      (item.server && item.server.toLowerCase().includes(normalized))
    );
  });

  if (countEl) {
    countEl.textContent = `${list.length} Projects`;
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 36px; color: var(--text-muted);">
        No projects found matching "${escapeHTML(searchTerm)}".
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => `
    <div class="freelance-item-card">
      <div class="freelance-item-top">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span class="freelance-item-num">PROJECT #${item.id.toString().padStart(2, '0')}</span>
          <span class="project-live-indicator"><span class="status-dot"></span> ${escapeHTML(item.status)}</span>
        </div>
        <h4 class="freelance-item-title">${escapeHTML(item.name)}</h4>
        <p class="freelance-item-desc">${escapeHTML(item.description)}</p>
        <div class="freelance-item-meta">
          <span class="freelance-mini-tag" style="color: var(--color-primary); font-weight: 700;">${escapeHTML(item.category)}</span>
          ${item.server ? `<span class="freelance-mini-tag">${escapeHTML(item.server)}</span>` : ''}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 12px;">
          ${item.tech.map(t => `<span class="skill-badge" style="font-size: 0.6875rem; padding: 2px 6px;">${escapeHTML(t)}</span>`).join('')}
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        ${item.url && item.url !== '#' ? `
          <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1; font-size: 0.75rem;">
            Visit Live ↗
          </a>
        ` : `<span style="font-size: 0.75rem; color: var(--text-muted); padding: 6px;">Internal Staging</span>`}
        <button class="btn btn-secondary btn-sm" onclick="openCaseStudy('${item.id}')" style="font-size: 0.75rem;" title="View architecture & details">
          Details
        </button>
      </div>
    </div>
  `).join('');
}

function initFreelanceSearch() {
  const searchInput = document.getElementById('freelanceSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderFreelanceCatalog(e.target.value);
    });
  }
}

/* --------------------------------------------------------------------------
   4. Contact Form & Feedback Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const mailtoLink = `mailto:arthy1810@gmail.com?subject=${encodeURIComponent(subject || 'Backend Developer Opportunity')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    if (alertBox) {
      alertBox.className = 'form-status-alert is-success';
      alertBox.innerHTML = `<strong>Thank you, ${escapeHTML(name)}!</strong> Opening your email client to dispatch message to <code>arthy1810@gmail.com</code>.`;
    }

    window.location.href = mailtoLink;
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   5. Copy Email & Quick Info Buttons
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyEmailBtns = document.querySelectorAll('.js-copy-email');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('arthy1810@gmail.com').then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied Email!';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2200);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Scroll Spy for Active Navigation Links
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
