document.getElementById('togglePassword').addEventListener('click', function() {
    ['current-password', 'new-password', 'confirm-password'].forEach(function(id) {
        const passwordField = document.getElementById(id);
        const toggleIcon = document.getElementById('toggleIcon');

        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    });

    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
});