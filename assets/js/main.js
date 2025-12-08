/* ============================================
   Portfolio Website - Main JavaScript
   Author: Arthy L. R.
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
	initNavigation();
	initThemeToggle();
	initSmoothScroll();
	initIntersectionObserver();
});

/* ============================================
   Navigation - Hamburger Menu
   ============================================ */
function initNavigation() {
	const navToggle = document.querySelector(".nav-toggle");
	const navMenu = document.querySelector(".nav-menu");
	const navLinks = document.querySelectorAll(".nav-link");

	if (!navToggle || !navMenu) return;

	// Toggle menu on button click
	navToggle.addEventListener("click", () => {
		const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
		navToggle.setAttribute("aria-expanded", !isExpanded);
		navMenu.classList.toggle("active");

		// Prevent body scroll when menu is open
		document.body.style.overflow = navMenu.classList.contains("active")
			? "hidden"
			: "";
	});

	// Close menu when clicking on a link
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			navToggle.setAttribute("aria-expanded", "false");
			navMenu.classList.remove("active");
			document.body.style.overflow = "";
		});
	});

	// Close menu when clicking outside
	document.addEventListener("click", (e) => {
		if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
			navToggle.setAttribute("aria-expanded", "false");
			navMenu.classList.remove("active");
			document.body.style.overflow = "";
		}
	});

	// Highlight active nav link on scroll
	window.addEventListener("scroll", () => {
		highlightActiveNavLink();
	});
}

/* ============================================
   Highlight Active Navigation Link
   ============================================ */
function highlightActiveNavLink() {
	const sections = document.querySelectorAll(".section[id]");
	const navLinks = document.querySelectorAll(".nav-link");

	let currentSection = "";
	const scrollPosition = window.scrollY + 200; // Offset for better UX

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			currentSection = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${currentSection}`) {
			link.classList.add("active");
		}
	});
}

/* ============================================
   Theme Toggle - Dark/Light Mode
   ============================================ */
function initThemeToggle() {
	const themeToggle = document.querySelector(".theme-toggle");
	const themeIcon = document.querySelector(".theme-icon");

	if (!themeToggle) return;

	// Check for saved theme preference or default to system preference
	const savedTheme = localStorage.getItem("theme");
	const systemPrefersDark = window.matchMedia(
		"(prefers-color-scheme: dark)",
	).matches;

	// Set initial theme
	if (savedTheme) {
		document.documentElement.setAttribute("data-theme", savedTheme);
		updateThemeIcon(savedTheme, themeIcon);
	} else {
		// Respect system preference
		const systemTheme = systemPrefersDark ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", systemTheme);
		updateThemeIcon(systemTheme, themeIcon);
	}

	// Toggle theme on button click
	themeToggle.addEventListener("click", () => {
		const currentTheme =
			document.documentElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";

		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		updateThemeIcon(newTheme, themeIcon);
	});

	// Listen for system theme changes
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => {
			if (!localStorage.getItem("theme")) {
				const systemTheme = e.matches ? "dark" : "light";
				document.documentElement.setAttribute(
					"data-theme",
					systemTheme,
				);
				updateThemeIcon(systemTheme, themeIcon);
			}
		});
}

function updateThemeIcon(theme, iconElement) {
	if (!iconElement) return;
	iconElement.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ============================================
   Smooth Scrolling for Navigation Links
   ============================================ */
function initSmoothScroll() {
	const navLinks = document.querySelectorAll('a[href^="#"]');

	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			const href = link.getAttribute("href");

			// Skip if it's just "#"
			if (href === "#") return;

			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				e.preventDefault();

				// Calculate offset for fixed header
				const headerHeight =
					document.querySelector(".header").offsetHeight;
				const targetPosition = targetElement.offsetTop - headerHeight;

				// Check for reduced motion preference
				const prefersReducedMotion = window.matchMedia(
					"(prefers-reduced-motion: reduce)",
				).matches;

				window.scrollTo({
					top: targetPosition,
					behavior: prefersReducedMotion ? "auto" : "smooth",
				});
			}
		});
	});
}

/* ============================================
   Intersection Observer - Section Reveal Animations
   ============================================ */
function initIntersectionObserver() {
	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (prefersReducedMotion) {
		// If reduced motion, just make all sections visible
		const sections = document.querySelectorAll(
			".section-reveal, .timeline-item",
		);
		sections.forEach((section) => {
			section.classList.add("visible");
		});
		return;
	}

	// Create intersection observer
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				// Unobserve after animation to improve performance
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all sections and timeline items
	const sections = document.querySelectorAll(
		".section-reveal, .timeline-item",
	);
	sections.forEach((section) => {
		observer.observe(section);
	});
}

/* ============================================
   Toast Notification
   ============================================ */
function showToast(message, type = "success") {
	const toast = document.getElementById("toast");
	const toastMessage = toast.querySelector(".toast-message");

	if (!toast || !toastMessage) return;

	// Set message
	toastMessage.textContent = message;

	// Set type (for styling if needed)
	toast.className = `toast ${type}`;

	// Show toast
	toast.classList.add("show");

	// Hide after 3 seconds
	setTimeout(() => {
		toast.classList.remove("show");
	}, 3000);
}

/* ============================================
   Utility Functions
   ============================================ */

// Debounce function for performance optimization
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// Throttle function for scroll events
function throttle(func, limit) {
	let inThrottle;
	return function (...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

// Optimized scroll handler
const optimizedScrollHandler = throttle(() => {
	highlightActiveNavLink();
}, 100);

window.addEventListener("scroll", optimizedScrollHandler);
