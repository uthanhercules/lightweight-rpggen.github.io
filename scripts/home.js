function redirect(url) {
    if (url === './pages/about.html' || url === './pages/utilities.html') {
        window.location.href = url;
    } else {
        alert('Under construction');
    }
}
