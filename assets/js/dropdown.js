// Dynamic dropdown bracket sizing
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownLinks = dropdown.querySelector('.dropdown-links');
        const bracket = dropdown.querySelector('.dropdown-bracket');
        
        if (dropdownLinks && bracket) {
            const linkCount = dropdownLinks.querySelectorAll('a').length;
            
            // Calculate dynamic width based on number of links
            // Base width of 120px, plus 40px per additional link
            const dynamicWidth = Math.max(120, 80 + (linkCount * 30));
            
            // Set the dropdown content width
            dropdownContent.style.minWidth = dynamicWidth + 'px';
            
            // Adjust bracket width to match content
            bracket.style.setProperty('--bracket-width', (dynamicWidth - 30) + 'px');
        }
    });
});
