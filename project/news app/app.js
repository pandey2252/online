let key = "031ae912836a4b16be67f622e65f1e9c";
let baseUrl = "https://newsapi.org/v2/everything";
let topic = "india";

window.addEventListener("load", () => fetchNews(topic));

async function fetchNews(query) {
    const res = await fetch(`${baseUrl}?q=${query}&apiKey=${key}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById("card-container");
    const template = document.getElementById("template");

    // Clear the existing content of the card container
    cardContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = template.content.cloneNode(true);
        fillDataInCard(cardClone, article); // Call the correct function
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#img");
    const newsTitle = cardClone.querySelector("#title");
    const newsDesc = cardClone.querySelector("#p");
    const newsDate = cardClone.querySelector("#date"); // Fix ID to match the template

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsDate.innerHTML = `${article.source.name} · ${date}`; // Correct variable name

    // For opening in a new tab
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

// Define navbar category links
let cricket = document.getElementById("cricket");
let india = document.getElementById("india");
let world = document.getElementById("world");
let game = document.getElementById("game");

// Event listener for navbar category links
cricket.addEventListener("click", () => {
    topic = "cricket";
    fetchNews(topic);
});

india.addEventListener("click", () => {
    topic = "india";
    fetchNews(topic);
});

world.addEventListener("click", () => {
    topic = "world";
    fetchNews(topic);
});

game.addEventListener("click", () => {
    topic = "game";
    fetchNews(topic);
});





const searchButton = document.getElementById("search");
const searchText = document.getElementById("searchinput");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});