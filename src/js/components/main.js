import { LitElement, html, css } from "lit";
import { getAllData } from "../modules/getData";

export class mainShop extends LitElement{
    constructor() {
        super()
        this.data = getAllData()
    }
    static properties = {
        data: {typeof: Object}
    }
    static styles = css`
        :root{
            --color-main: #4b33a8;
            --color-white: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
            --color-verde: #00FF00;
        }
        
        * {
            margin: 0; 
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .main {
            background-color: var(--color-white);
            margin: 1rem;
            margin-left: 0;
            border-radius: 2rem;
            padding: 3rem;
        }
        .titulo{
            color: var(--color-main);
            margin-bottom: 2rem;
        }
        .container_product{
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            border-radius: 1rem;
        }
        .container-img {
            width:100%; 
            height: 60%; 
        }
        .img {
            max-width: 100%; 
            border-radius: 1rem;
            object-fit: cover;
        }
        .details {
            background: var(--color-main);
            color: var(--color-white);
            padding: .5rem; 
            border-radius: 1rem;
            margin-top: -2rem; 
            position: relative; 
            display: flex;
            flex-direction: column; 
            gap: .25rem; 
            text-transform: capitalize
        }
        .product-description {
            font-size: 1em; 
        }
        .product-button {
            border: none;
            background-color: var(--color-white); 
            color: var(--color-main); 
            padding: .25rem; 
            text-transform: uppercase;
            cursor: pointer; 
            border-radius: 2rem;    
            font-weight: 600; 
            transition: 0.5s
        }
        .product-button:hover {
            background-color: #00FF00; 
            color: var(--color-white)
        }

    `
    render(){
        console.log(this.data)
        return html`
            <main class="main">
                <h2 class="titulo">Todos los productos</h2>
                <div class="container_product">
                    ${this.data.abrigo.map(element => html`
                        <div class="product">
                            <div class="container-img">
                                <img src="${element.imagen}" class="img">
                            </div>
                            <div class="details">
                                <h3 class="product-description">description example</h3>
                                <p class="product-price">description price</p>
                                <button class="product-button">Agregar</button>
                            </div>
                        </div>
                    `)}
                    ${this.data.pantalon.map(element => html`
                    <div class="product">
                        <div class="container-img">
                            <img src="${element.imagen}" class="img">
                        </div>
                        <div class="details">
                            <h3 class="product-description">description example</h3>
                            <p class="product-price">description price</p>
                            <button class="product-button">Agregar</button>
                        </div>
                    </div>
                    `)}
                    ${this.data.camiseta.map(element => html`
                    <div class="product">
                        <div class="container-img">
                            <img src="${element.imagen}" class="img">
                        </div>
                        <img src="${element.imagen}" class="img">
                        <div class="details">
                            <h3 class="product-description">description example</h3>
                            <p class="product-price">description price</p>
                            <button class="product-button">Agregar</button>
                        </div>
                    </div>
                    `)}
                </div>
            </main>
        `
    }
}

customElements.define("main-shop", mainShop)