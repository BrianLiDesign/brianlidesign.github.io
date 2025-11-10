class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header">
            <div class="container">
                <div class="nav-left">
                    <a href="index.html" class="nav-title">Brian Li</a>
                </div>
                <nav>
                    <a href="pages/projects.html">Projects</a>
                    <a href="pages/writing.html">Writing</a>
                    <a href="pages/about.html">About</a>
                </nav>
            </div>
        </header>
    `;
  }
}

customElements.define("nav-bar", Navbar);
