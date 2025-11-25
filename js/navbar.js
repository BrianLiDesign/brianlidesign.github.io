class Navbar extends HTMLElement {
  connectedCallback() {
    const isSubpage = this.getAttribute("data-subpage") === "true";
    const prefix = isSubpage ? "../" : "";

    this.innerHTML = `
        <header id="header">
            <div class="container">
                <nav>
                    <div class="nav-left">
                        <a href="${prefix}index.html" class="nav-title">Brian Li</a>
                    </div>
                    <ul>
                        <li><a href="${prefix}pages/projects.html">Projects</a></li>
                        <li><a href="${prefix}pages/writing.html">Writing</a></li>
                        <li><a href="${prefix}pages/about.html">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
  }
}

customElements.define("nav-bar", Navbar);
