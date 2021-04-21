

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="page-footer">
            <div id="attribution">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <small id="copyright">&copy;` + getCurrentYear() + ` Matt Lippelman & Zach Reynolds</small>
        </div>
        `
    }
}

customElements.define('footer-component', Footer);

