// Import modules
import { initParticles } from './modules/particles-config.js';
import { loadNavbar, initNavbar } from './modules/navbar.js';
import { loadProfile } from './modules/profile.js';
import { loadSections } from './modules/utils.js';

// Initialize the app
async function initApp() {
    // Load particles.js
    initParticles();
    
    // Load navbar
    await loadNavbar();
    initNavbar();
    
    // Load profile section
    await loadProfile();
    
    // Load all content sections
    await loadSections([
        'about',
        'skills',
        'why-me',
        'education',
        'vision',
        'contact'
    ]);
    
    // Initialize skills animations
    const { initSkills } = await import('./modules/skills.js');
    initSkills();
}

// Start the app
document.addEventListener('DOMContentLoaded', initApp);