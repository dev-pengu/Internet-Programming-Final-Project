function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    let hamburger = document.getElementById("nav-icon");
    hamburger.style.left = "200px";
    hamburger.onclick = closeNav;
    let bars = document.getElementsByClassName("hamburger-button");
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "#00C94B";
    }
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    let hamburger = document.getElementById("nav-icon");
    hamburger.style.left = "5px";
    hamburger.onclick = openNav;
    let bars = document.getElementsByClassName("hamburger-button");
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "#051360";
    }
}

const topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getCurrentYear() {
    var theDate= new Date();
    return theDate.getFullYear();
}