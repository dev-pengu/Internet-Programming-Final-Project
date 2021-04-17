function buildFooter() {document.getElementById("custom-footer").innerHTML =`
<div id="page-footer">
    <div id="attribution">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <small id="copyright">&copy; <script>document.write(getCurrentYear());</script> Matt Lippelman & Zach Reynolds</small>
</div>`;}

function buildHeader() {
    document.getElementById("custom-header").innerHTML = `
    <div id="page-header">
        <img src="img/includes/copyright.png" width="50" height="50" alt="logo">
        <h1>OPYRIGHT FOR YOU</h1>
    </div>
    `;
}

function buildNav() {
    document.getElementById("custom-nav").innerHTML = `
    <input type="checkbox" id="nav-menu">
    <label for="nav-menu">
    <div id="nav-icon" onclick="openNav()">
        <span class="hamburger-button"></span>
        <span class="hamburger-button"></span>
        <span class="hamburger-button"></span>
        <span class="hamburger-button"></span>
        <span class="hamburger-button"></span>
        <span class="hamburger-button"></span>
    </div>
    </label>
    <div id="sidenav" class ="sidenav">
        <a href="#">Home</a>
        <a href="#">Music Resources</a>
        <a href="#">Image Resources</a>
        <a href="#">SFX Resources</a>
        <a href="#">Video Resources</a>
        <a href="#">Submit a Resource</a>
        <a href="#">Contact</a>
    </div>`;
}

document.write(`
<button onClick="topFunction()" id="topBtn" title="Go to top">
    &and;
</button>
`);
