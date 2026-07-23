function showTab(tabName, sectionId = null) {
    // 1. Hide all tabs first
    document.getElementById('resume-tab').style.display = 'none';
    document.getElementById('knowledge-tab').style.display = 'none';

    // 2. Show the correct tab based on what was clicked
    if (tabName === 'resume') {
        document.getElementById('resume-tab').style.display = 'block';
    } else if (tabName === 'knowledge') {
        document.getElementById('knowledge-tab').style.display = 'block';
    }
    
    // 3. Handle the scrolling magic
    if (sectionId) {
        setTimeout(function() {
            const section = document.getElementById(sectionId);
            if (section) {
                // Adjusted to account for the new layout spacing
                const yOffset = -100; 
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 10); 
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// 4. Scroll Reveal Animation Logic
document.addEventListener('DOMContentLoaded', function() {
    // Set up the options for the observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the section is visible on screen
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                
                // Optional: Stop observing once it's visible so it doesn't fade out and in repeatedly
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Grab all sections with the 'fade-in' class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
