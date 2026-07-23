function showTab(tabName) {
    // Hide all tabs
    document.getElementById('resume-tab').style.display = 'none';
    document.getElementById('knowledge-tab').style.display = 'none';

    // Show the selected tab
    if (tabName === 'resume') {
        document.getElementById('resume-tab').style.display = 'block';
    } else if (tabName === 'knowledge') {
        document.getElementById('knowledge-tab').style.display = 'block';
    }
}
