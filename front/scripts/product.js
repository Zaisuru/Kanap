const productImgContainer = document.querySelector("item__img");
const productTitle = document.getElementById("title");
const price = document.getElementById("price");
const productDescription = document.getElementById("description");
const colors = document.getElementById("colors");


const productImg = document.createElement("img");

productImg.setAttribute("src", "../images/logo.png");
productImg.setAttribute("alt", "Photographie d'un canapé");

productTitle.innerHTML = "Kanap name 1";
price.innerHTML = 1;
productDescription.innerHTML = "Lorem Ipsum";

productImgContainer.appendChild(productImg);