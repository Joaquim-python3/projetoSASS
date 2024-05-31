document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('#topo__ferramentas .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
