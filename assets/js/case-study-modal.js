/**
 * case-study-modal.js
 * Handles technical case-study modal rendering, keyboard traps, and deep inspection
 */

function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentContainer = document.getElementById('modalDynamicContent');

  if (!modalBackdrop) return;

  window.openCaseStudy = function(projectId) {
    // Search in FEATURED_PROJECTS first, then ALL_FREELANCE_PROJECTS
    let project = FEATURED_PROJECTS.find(p => p.id === projectId);
    
    if (!project) {
      const freelance = ALL_FREELANCE_PROJECTS.find(p => p.id == projectId || p.name.toLowerCase().includes(projectId.toLowerCase()));
      if (freelance) {
        project = {
          title: freelance.name,
          client: freelance.server ? `Server: ${freelance.server}` : "Client Project",
          role: "Freelance Backend Developer",
          problem: freelance.description,
          contribution: `Engineered backend data endpoints, MySQL database integration, and reliable deployment on ${freelance.server || 'cPanel'}.`,
          backendFeatures: [
            "Relational MySQL database design and storage",
            "Server-side request handling and validation",
            "CRUD workflows and data maintenance",
            "Optimized asset delivery and fast load time"
          ],
          architecture: "Client Web Interface -> PHP Backend Handler -> Validation -> MySQL Database Storage",
          tags: freelance.tech,
          url: freelance.url,
          hasLiveUrl: freelance.url && freelance.url !== "#",
          result: `Successfully delivered and deployed to production (${freelance.status}).`
        };
      }
    }

    if (!project) return;

    // Render modal content
    modalContentContainer.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-group">
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.role || 'Backend Developer')} • ${escapeHTML(project.client || '')}</p>
        </div>
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close case study dialog">&times;</button>
      </div>
      <div class="modal-body">
        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Business Problem & Scope
          </div>
          <p>${escapeHTML(project.problem || '')}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            My Contribution & Implementation
          </div>
          <p>${escapeHTML(project.contribution || '')}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
            Backend Architecture Flow
          </div>
          <div class="modal-arch-box">
            ${escapeHTML(project.architecture || 'Request -> Routing -> Controller -> Model -> MySQL Database')}
          </div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            Key Backend Features & Security
          </div>
          <ul class="project-features-list">
            ${(project.backendFeatures || []).map(feat => `<li>${escapeHTML(feat)}</li>`).join('')}
          </ul>
        </div>

        ${project.challenges ? `
        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Technical Challenge & Solution
          </div>
          <p><strong>Challenge:</strong> ${escapeHTML(project.challenges)}</p>
          <p style="margin-top: 8px;"><strong>Solution:</strong> ${escapeHTML(project.solution || '')}</p>
        </div>` : ''}

        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Technologies Used
          </div>
          <div class="modal-tech-stack">
            ${(project.tags || []).map(t => `<span class="skill-badge">${escapeHTML(t)}</span>`).join('')}
          </div>
        </div>

        ${project.result ? `
        <div class="modal-section">
          <div class="modal-section-title">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            Production Outcome
          </div>
          <p>${escapeHTML(project.result)}</p>
        </div>` : ''}
      </div>
      <div class="modal-footer">
        <span style="font-size: 0.8125rem; color: var(--text-muted);">Verified against production deployment</span>
        <div>
          ${project.hasLiveUrl ? `
            <a href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              Launch Live Application ↗
            </a>
          ` : ''}
          <button class="btn btn-secondary btn-sm" onclick="closeCaseStudyModal()">Close</button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Bind new close button
    const closeBtn = modalContentContainer.querySelector('#modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeCaseStudyModal);
    }
  };

  window.closeCaseStudyModal = function() {
    modalBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  modalBackdrop.addEventListener('click', function(e) {
    if (e.target === modalBackdrop) {
      closeCaseStudyModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeCaseStudyModal();
    }
  });
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', initCaseStudyModal);
