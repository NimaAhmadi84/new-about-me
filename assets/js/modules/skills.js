export function initSkills() {
    const progressBars = document.querySelectorAll('.progress');

    // Set initial progress values
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.setAttribute('data-progress', width);
    });

    // Animate on scroll
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
            
            if (isVisible && !bar.dataset.animated) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                bar.dataset.animated = 'true';
            }
        });
    };

    // Initial check
    animateProgressBars();

    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
}