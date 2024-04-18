const itemsContainer = document.getElementById("items");

// Create DOM
const link = document.createElement('a');
const article = document.createElement('article');
const articleImg = document.createElement('img');
const articleTitle=document.createElement('h3');
const articleText = document.createElement('p');

link.setAttribute("href", './production.html?id=42');
articleImg.setAttribute("src", '../product01.jpg');
article.setAttribute("alt", "Lorem ipsum dolor sit amet, Kanap name1");
articleTitle.textContent = "Kanap name 1";
articleText.classList.add("productDescription");

// add dom
itemsContainer.appendChild(link);
link.appendChild(article);
article.appendChild(articleImg);
article.appendChild(articleTitle);
article.appendChild(articleText);
