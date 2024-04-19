const params = new URL(document.location).searchParams;
const id = params.get("id");
const url = `http://localhost:3000/api/products/${id}`;

const response = await fetch(url);
const products = await response.json();

const productImgContainer = document.querySelector(".item__img");
const productTitle = document.getElementById("title");
const price = document.getElementById("price");
const productDescription = document.getElementById("description");
const colors = document.getElementById("colors");
const productImg = document.createElement("img");
const addCart = document.getElementById("addToCart");

productImg.setAttribute("src", `${products.imageUrl}`);
productImg.setAttribute("alt", products.altTxt);

productTitle.innerHTML = products.name;
price.innerHTML = products.price;
productDescription.innerHTML = products.description;

productImgContainer.appendChild(productImg);

for(let i=0 ; i < products.colors.length; i++){
    const colorsOptions = document.createElement("option");
    colorsOptions.setAttribute("value", products.colors[i]);
    colorsOptions.innerHTML= products.colors[i];
    colors.appendChild(colorsOptions);
}

addCart.addEventListener("click", function addToCard(){
    const qtyValue = document.getElementById("quantity").value;
    window.localStorage.setItem("id", id);
    window.localStorage.setItem("qty", qtyValue);
    window.localStorage.setItem("colors", colors.value);
    alert(`Le produit ${products.name} est bien ajouté à votre panier`);
})