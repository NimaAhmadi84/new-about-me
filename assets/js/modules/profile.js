export async function loadProfile() {
    const response = await fetch('sections/profile.html');
    document.getElementById('profile-section').innerHTML = await response.text();
    initProfileHover();
}

function initProfileHover() {
    const profilePic = document.querySelector('.profile-pic');
    if (!profilePic) return;

    let isHovering = false;

    profilePic.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    profilePic.addEventListener('mouseleave', () => {
        isHovering = false;
        profilePic.style.transform = 'scale(1)';
    });

    document.addEventListener('mousemove', (e) => {
        if (isHovering && window.innerWidth > 768) {
            const x = (e.clientX / window.innerWidth) * 20 - 10;
            const y = (e.clientY / window.innerHeight) * 20 - 10;
            profilePic.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        }
    });
}