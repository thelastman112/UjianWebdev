
class Navbar extends HTMLElement {
  constructor () {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.title_head = this.getAttribute('title') || 'Movies & TV'
    this.render()
  }

  render () {
    this._shadowRoot.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               text-decoration-line: none;
           }
           :host {
               display: flex;
               flex-direction: row;
               justify-content: space-between;
               background-color: var(--color-background);
               color: var(--color-text);
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
           h2:hover {
                text-shadow: 0 0 10px var(--color-shadow);
                cursor: pointer;
              }
            :host > nav {
                display: flex;
                flex-direction: row;
            }
            :host > nav > li {
                list-style: none;
                height: 100%;
                display: inherit;
                align-items: center;
                padding: 0 16px;
            }
            :host > nav > li:hover {
                cursor: pointer;
                text-shadow: 0 0 10px var(--color-shadow);
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) inset;
            }
            :host > nav > li > a {
              color: var(--color-text);
            }
       </style>`
    this._shadowRoot.innerHTML += `
         <h2>${this.title_head}</h2>
         <nav>
            <li>
                <a href="" id="movie">Movies</a>
            </li>
            <li>
                <a href="/tv" id="tv">Tv</a>
            </li>
         </nav>
         `
  }
}
customElements.define('nav-bar', Navbar)
