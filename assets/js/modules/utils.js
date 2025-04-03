export async function loadSections(sections) {
    const loadingPromises = sections.map(async section => {
        try {
            const response = await fetch(`sections/${section}.html`);
            const html = await response.text();
            document.getElementById(`${section}-section`).innerHTML = html;
            
            // Initialize button hover effects for each section
            initButtonHoverEffects();
        } catch (error) {
            console.error(`Error loading ${section} section:`, error);
        }
    });

    await Promise.all(loadingPromises);
}

function initButtonHoverEffects() {
    document.querySelectorAll('.custom-button, .resume-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
}