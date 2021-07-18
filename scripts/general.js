function redirect_extern(url) {
    window.open(`http://${url}`, '_blank');
}

function redirect_intern(url) {
    window.location.href = url;
}
