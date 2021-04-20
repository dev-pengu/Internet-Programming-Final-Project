class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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
            <a href="javascript:void(0)" class="close-btn" onclick="closeNav()">&times;</a>
            <a href="index.html">Home</a>
            <a href="music.html">Music Resources</a>
            <a href="#">Image Resources</a>
            <a href="#">SFX Resources</a>
            <a href="#">Video Resources</a>
            <a href="#">Submit a Resource</a>
            <a href="contact.html">Contact</a>
        </div>
        `;
    }
}

customElements.define('nav-component', Nav);