//API Connect
const response = await fetch("http://localhost:3000/api/products");
const products = await response.json();

const itemsContainer = document.getElementById("items");

for(let i = 0 ; i < products.length; i++){
    const link = document.createElement('a');
    const article = document.createElement('article');
    const articleImg = document.createElement('img');
    const articleTitle=document.createElement('h3');
    const articleText = document.createElement('p');

    link.setAttribute("href", `./production.html?id=${products[i]._id}`);
    articleImg.setAttribute("src", products[i].imageUrl);
    article.setAttribute("alt", "Lorem ipsum dolor sit amet, Kanap name1");
    articleTitle.textContent = products[i].name;
    articleText.classList.add("productDescription");

    // add dom
    itemsContainer.appendChild(link);
    link.appendChild(article);

    article.appendChild(articleImg);
    article.appendChild(articleTitle);
    article.appendChild(articleText);
}