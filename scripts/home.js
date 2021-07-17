function redirect(url) {
    const list_of_url = ['./pages/about.html', './pages/utilities.html'];
    if (list_of_url.includes(url)) {
        window.location.href = url;
    } else {
        alert('Under construction');
    }
}
