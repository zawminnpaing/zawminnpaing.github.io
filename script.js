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
