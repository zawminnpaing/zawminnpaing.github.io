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
        // If a specific section was clicked (like 'achievements'), scroll to it.
        // We use a tiny delay (10 milliseconds) to give the browser time to render the newly unhidden tab!
        setTimeout(function() {
            const section = document.getElementById(sectionId);
            if (section) {
                // Account for the floating navbar by adjusting the scroll position
                const yOffset = -90; 
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 10); 
    } else {
        // If just switching main tabs without a section, smoothly go to the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
