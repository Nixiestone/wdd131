document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.getElementById('primary-nav');
    
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');

        if (navigation.classList.contains('open')) {
            menuButton.textContent = '✕';
        } else {
            menuButton.textContent = '☰';
        }
    });
    


});