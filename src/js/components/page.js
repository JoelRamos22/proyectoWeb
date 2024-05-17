import { LitElement, html, css } from "lit";
import { myNavAside } from "./aside";
import { mainShop } from "./main";
export class allPage extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
        :root {
            --color-main: #4b33a8;
            --color-main-light: #785be9;
            --color-white: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
        }
        * {
            margin: 0;
            padding: 0; 
            box-sizing: border-box; 
        }
        .container {
            display:grid;
            background: var(--color-main);
            grid-template-columns: 1.2fr 4fr;
            grid-template-rows: 1fr;
        }
        .nav {
            grid-area: 1 / 1 / 2 / 2;
        }
        .main {
            grid-area: 1 / 2 / 2 / 3; 
        }
    `
    render(){
        return html`
            <div class="container">
                <nav-aside class="nav"></nav-aside>
                <!--main-shop class="main"></main-shop> -->
            </div>
        `
    }
}

customElements.define("all-page", allPage)