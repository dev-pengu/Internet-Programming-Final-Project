class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="page-header">
            <img src="img/includes/copyright.png" width="50" height="50" alt="logo">
            <h1>OPYRIGHT FOR YOU</h1>
        </div>
        `
    }
}

customElements.define('header-component', Header);