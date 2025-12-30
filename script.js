function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const blur = document.getElementById("blur-overlay");

    sidebar.classList.toggle("open");
    blur.classList.toggle("active");
}

function changeImage(id, src) {
    document.getElementById(id).src = src;
}
