export async function loadNavbar() {
    const response = await fetch('sections/navbar.html');
    document.getElementById('navbar-section').innerHTML = await response.text();
}

export function initNavbar() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');

    // Mobile menu toggle
    mobileMenuToggle?.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenuToggle.innerHTML = navList.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Search toggle functionality
    searchToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        searchInput.classList.toggle('show');
        if (searchInput.classList.contains('show')) {
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchInput?.classList.remove('show');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList?.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
}