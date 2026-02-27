(function() {
    'use strict';

    // ========================================
    // Background Music
    // ========================================
    var audio = document.getElementById('bg-music');
    var VOLUME = 0.25;
    audio.volume = VOLUME;

    function updateMusicIcons(playing) {
        var on = document.getElementById('music-icon-on');
        var off = document.getElementById('music-icon-off');
        if (on) on.classList.toggle('hidden', !playing);
        if (off) off.classList.toggle('hidden', playing);
    }

    var musicPref = localStorage.getItem('sd-music');
    if (musicPref === 'on') {
        var startOnInteraction = function() {
            audio.play().then(function() { updateMusicIcons(true); }).catch(function() {});
            document.removeEventListener('click', startOnInteraction);
            document.removeEventListener('scroll', startOnInteraction);
        };
        document.addEventListener('click', startOnInteraction);
        document.addEventListener('scroll', startOnInteraction, { once: true });
    }

    document.getElementById('music-toggle').addEventListener('click', function(e) {
        e.stopPropagation();
        if (audio.paused) {
            audio.play().then(function() {
                updateMusicIcons(true);
                localStorage.setItem('sd-music', 'on');
            }).catch(function() {});
        } else {
            audio.pause();
            updateMusicIcons(false);
            localStorage.setItem('sd-music', 'off');
        }
    });

    // ========================================
    // Mobile Menu
    // ========================================
    var menuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }

    menuToggle.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
    });

    // Close mobile menu when a link inside it is clicked
    mobileMenu.addEventListener('click', function(e) {
        if (e.target.closest('a')) {
            closeMobileMenu();
        }
    });

    // ========================================
    // Parallax (harmless on non-index pages)
    // ========================================
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                document.documentElement.style.setProperty('--hero-parallax', window.scrollY);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ========================================
    // Page Initialization (runs on load + SPA nav)
    // ========================================
    function initPage() {
        // Scroll-triggered animations
        var animObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    if (el.classList.contains('stagger-children')) {
                        el.classList.add('visible');
                        Array.from(el.children).forEach(function(child, i) {
                            child.style.transitionDelay = (i * 100) + 'ms';
                        });
                    } else if (el.classList.contains('quote-reveal')) {
                        el.querySelectorAll('.quote-word').forEach(function(word, i) {
                            setTimeout(function() { word.classList.add('revealed'); }, i * 80);
                        });
                    } else {
                        el.classList.add('visible');
                    }
                    animObserver.unobserve(el);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('#page-content .fade-up, #page-content .fade-left, #page-content .stagger-children, #page-content .quote-reveal').forEach(function(el) {
            animObserver.observe(el);
        });

        // Execute inline scripts inside #page-content
        document.querySelectorAll('#page-content script[data-page-script]').forEach(function(old) {
            var s = document.createElement('script');
            s.textContent = old.textContent;
            old.parentNode.replaceChild(s, old);
        });
    }

    // ========================================
    // SPA Navigation
    // ========================================
    function updateActiveNav(path) {
        // Normalize path
        if (path === '/index.html' || path === '/index') path = '/';
        document.querySelectorAll('nav a[data-nav]').forEach(function(link) {
            var target = link.getAttribute('data-nav');
            if (target === path) {
                link.classList.remove('text-txt-secondary');
                link.classList.add('text-accent');
            } else {
                link.classList.remove('text-accent');
                link.classList.add('text-txt-secondary');
            }
        });
    }

    var navigating = false;

    function navigateTo(url, pushState) {
        if (navigating) return;
        navigating = true;

        var a = document.createElement('a');
        a.href = url;
        var path = a.pathname;
        var hash = a.hash;

        // If same page, just scroll
        if (path === window.location.pathname && hash) {
            var target = document.querySelector(hash);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            navigating = false;
            return;
        }

        fetch(url)
            .then(function(r) { return r.text(); })
            .then(function(html) {
                var doc = new DOMParser().parseFromString(html, 'text/html');
                var newMain = doc.getElementById('page-content');
                var newTitle = doc.querySelector('title');

                if (newMain) {
                    document.getElementById('page-content').innerHTML = newMain.innerHTML;
                    if (newTitle) document.title = newTitle.textContent;
                    if (pushState) history.pushState({}, '', url);
                    updateActiveNav(path);
                    closeMobileMenu();
                    initPage();

                    if (hash) {
                        setTimeout(function() {
                            var target = document.querySelector(hash);
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                        }, 50);
                    } else {
                        window.scrollTo(0, 0);
                    }
                }
                navigating = false;
            })
            .catch(function() {
                navigating = false;
                window.location.href = url;
            });
    }

    // Intercept internal link clicks
    document.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (!link) return;

        var href = link.getAttribute('href');
        if (!href) return;

        // Skip: external links, new tab, non-http, music toggle area
        if (link.target === '_blank') return;
        if (link.closest('#music-toggle')) return;
        if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
            // Allow absolute URLs to our own origin through
            if (href.startsWith('http') && link.origin !== window.location.origin) return;
        }

        // Hash-only on current page — let browser handle
        if (href.startsWith('#')) return;

        // Pause music if clicking a video facade
        if (link.closest('.video-facade')) return;

        e.preventDefault();
        navigateTo(link.href, true);
    });

    // Handle back/forward
    window.addEventListener('popstate', function() {
        navigateTo(window.location.href, false);
    });

    // Pause music when video facade is clicked (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.video-facade') && !audio.paused) {
            audio.pause();
            updateMusicIcons(false);
        }
    });

    // ========================================
    // Init on first load
    // ========================================
    initPage();
    updateActiveNav(window.location.pathname);
})();
