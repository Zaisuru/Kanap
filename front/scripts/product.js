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
    // Je récupère les données du localStorage
    let dataStored = window.localStorage.getItem('cartList');
    let cartList = JSON.parse(dataStored) || []; // Si localStorage est vide, initialise cartList à un tableau vide

    let found = false; // Variable pour suivre si l'article est trouvé dans le panier

    // Je vérifie si le localStorage est vide
    if(dataStored  == null){
        // Si localStorage est vide, j'ajoute un nouvel article au panier
        cartList.push({
            'id' : products._id,
            'name' : products.name,
            'price' : products.price,
            'colors' : colors.value,
            'quantity' : document.getElementById("quantity").value 
        });
    } else {
        // Si le localStorage contient déjà des articles, je vérifie s'il existe déjà un article avec le même ID et la même couleur
        cartList.forEach(item => {
            if(item.id == products._id && item.colors == colors.value){
                // Si l'article est trouvé, je mets à jour la quantité
                item.quantity = document.getElementById("quantity").value;
                found = true;
                console.log("Quantité mise à jour pour l'article existant :", item.name);
            }
        });

        // Si l'article n'est pas trouvé dans le panier, j'ajoute un nouvel article au panier
        if(!found){
            cartList.push({
                'id' : products._id,
                'name' : products.name,
                'price' : products.price,
                'colors' : colors.value,
                'quantity' : document.getElementById("quantity").value
            });
        }
    }

    // Je mets à jour le localStorage avec le panier mis à jour
    window.localStorage.setItem('cartList', JSON.stringify(cartList));

    // Je recharge la page 
    window.location.reload();
});
