function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    const hamburger = document.getElementById("nav-icon");
    hamburger.style.left = "200px";
    hamburger.onclick = closeNav;
    const bars = document.getElementsByClassName("hamburger-button");
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "#00C94B";
    }
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    const hamburger = document.getElementById("nav-icon");
    hamburger.style.left = "5px";
    hamburger.onclick = openNav;
    const bars = document.getElementsByClassName("hamburger-button");
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "#051360";
    }
}