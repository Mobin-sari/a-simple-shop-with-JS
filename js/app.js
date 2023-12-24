const sectionProducts = document.getElementById("products");


const render = async () => {
    const fetchData = await fetch("data.json");
    const res = await fetchData.json()
    return res;
};

let product = 0;
const createProduct = () => {
    const productBox = document.createElement("div");
    productBox.classList.add("productsbox")
    sectionProducts.appendChild(productBox);
    return productBox;
};

const showProduct = async () => {
    const data = await render();
    data.forEach(e => {
        const divProduct = createProduct();
        divProduct.innerHTML = `
            <img src="./img/${e.image}" alt="${e.alt}">
            <div>
                <div>${e.name}</div>
                <div>${e.price}</div>
            </div>
        `
    });
};

showProduct();
document.addEventListener("DOMContentLoaded", render)