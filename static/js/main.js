function toggleLanguageOptions() {
    var options = document.querySelector('.language-options');
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}