//LocalStorage
const cartList = window.localStorage.getItem("cartlist");
console.log
/*const quantity = window.localStorage.getItem("qty");
const colors = window.localStorage.getItem("colors");*/

//connect api
const response = await fetch(`http://localhost:3000/api/products/${cartList.id}`);
const products = await response.json();

const cartItems = document.getElementById("cart__items");


// CREATE DOM
const articleItems = document.createElement("article");
const cartItemsImg = document.createElement("div");
const itemsImg = document.createElement("img");
const cartItemsContent = document.createElement("div");
const cartItemsContentDescription = document.createElement("div");

const cartItemsDescriptionTitle = document.createElement("h2");
const cartItemsDescriptionTxt = document.createElement("p");
const cartItemsDescriptionPrice = document.createElement("p");
const cartItemsContentSettings = document.createElement("div");
const cartItemsSettingsQuantityContainer = document.createElement("div");
const cartItemsSettingsQuantityTxt = document.createElement("p");
const cartItemsSettingsQuantityInput= document.createElement("input");
const cartItemsContentDelete = document.createElement("div");
const cartItemsDeleteTxt = document.createElement("p");

const totalPrice = cartList .quantity * products.price;

//ADD CLASS & ATTRIBUTE
articleItems.classList.add("cart__item");
cartItemsImg.classList.add("cart__item__img");
cartItemsContent.classList.add("cart__item__content");
cartItemsContentDescription.classList.add("cart__item__content__description");
cartItemsContentSettings.classList.add("cart__item__content__settings");
cartItemsSettingsQuantityContainer.classList.add("cart__item__content__settings__quantity");
cartItemsSettingsQuantityInput.classList.add("itemQuantity");
cartItemsContentDelete.classList.add("cart__item__content__settings__delete");
cartItemsDeleteTxt.classList.add("deleteItem");

itemsImg.setAttribute("src",`${products.imageUrl}`);
itemsImg.setAttribute("alt",`${products.altTxt}`);
cartItemsSettingsQuantityInput.setAttribute("type","number");
cartItemsSettingsQuantityInput.setAttribute("name","itemQuantity");
cartItemsSettingsQuantityInput.setAttribute("min","1");
cartItemsSettingsQuantityInput.setAttribute("max","100");
cartItemsSettingsQuantityInput.setAttribute("value", cartList.quantity);

cartItemsDescriptionTitle.innerHTML = products.name;
cartItemsDescriptionTxt.innerHTML = colors;
cartItemsDescriptionPrice.innerHTML = products.price + " €";
cartItemsDeleteTxt.innerHTML = "Supprimer";
document.getElementById("totalQuantity").innerHTML = cartList.quantity;
document.getElementById("totalPrice").innerHTML = totalPrice;


// ADD DOM
cartItems.appendChild(articleItems);
articleItems.appendChild(cartItemsImg);
cartItemsImg.appendChild(itemsImg);
articleItems.appendChild(cartItemsContent);
cartItemsContent.appendChild(cartItemsContentDescription);
cartItemsContentDescription.appendChild(cartItemsDescriptionTitle);
cartItemsContentDescription.appendChild(cartItemsDescriptionTxt);
cartItemsContentDescription.appendChild(cartItemsDescriptionPrice);
cartItemsContent.appendChild(cartItemsContentSettings);
cartItemsContentSettings.appendChild(cartItemsSettingsQuantityContainer);
cartItemsSettingsQuantityContainer.appendChild(cartItemsSettingsQuantityTxt);
cartItemsSettingsQuantityContainer.appendChild(cartItemsSettingsQuantityInput);
cartItemsContentSettings.appendChild(cartItemsContentDelete);
cartItemsContentDelete.appendChild(cartItemsDeleteTxt);

