function redirect_extern(url) {
    window.open(`http://${url}`, '_blank');
}

function redirect_intern(url) {
    const list_of_url = ['./pages/about.html', './pages/utilities.html', './name_generator.html'];
    if (list_of_url.includes(url)) {
        window.location.href = url;
    } else {
        alert('Under construction');
    }
}
