document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active', 'text-danger', 'fw-bold');
            link.classList.remove('text-dark'); // Xóa lớp text-dark nếu cần
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.list-group-item');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add( 'bg-danger','text-light', 'fw-bold');
        }
    });
});