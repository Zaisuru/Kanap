//LocalStorage
//LocalStorage
const dataStored = window.localStorage.getItem("cartList");
let cartList = JSON.parse(dataStored);

if(cartList != null){
    let totalPrice = 0;
    let totalItems = 0; 

    const fetchData = async () => {
        // Utilise une boucle for...of pour itérer de manière asynchrone sur les éléments de cartList
        for(const item of cartList) {
            const idItems = item.id;
            const name = item.name;
            const colors = item.colors;
            const price = item.price;
            const quantity = item.quantity;
            // Utilise await à l'intérieur de la fonction asynchrone pour attendre la réponse de la requête fetch
            const response = await fetch(`http://localhost:3000/api/products/${idItems}`);
            const products = await response.json();
            
            // Appelle la fonction createCart une fois que la réponse est reçue
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

            totalPrice += price * quantity;
            totalItems += quantity;

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
            cartItemsSettingsQuantityInput.setAttribute("value", quantity);

            cartItemsDescriptionTitle.innerHTML = name;
            cartItemsDescriptionTxt.innerHTML = colors;
            cartItemsDescriptionPrice.innerHTML = price + " €";
            cartItemsDeleteTxt.innerHTML = "Supprimer";
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

            
            document.getElementById("totalQuantity").innerHTML = totalItems;
            document.getElementById("totalPrice").innerHTML = totalPrice;

        }
};

// Appelle la fonction fetchData
fetchData();
}else{
    alert("Votre panier est vide.")
    
}

/*const totalPrice = ; */



