class InfoCard {
    constructor(title, description, imageURL, siteURL, cost) {
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.siteURL = siteURL;
        this.cost = cost;
    }
}
//Testing list of cards. this will be built using a function
let cardList = [
    new InfoCard("Test card 1 title",
                 "This is a brief description of the page. It has any information that may be needed about the site",
                 "https://placeimg.com/450/450/animals",
                 "https://google.com",
                 "Free"),
    new InfoCard("Test card 2 title",
                 "This is a brief description of the page. It has any information that may be needed about the site",
                 "https://picsum.photos/id/8/450/450",
                 "https://my.missouristate.edu",
                 "$20/month"),
    new InfoCard("Test card 3 title",
                 "This is a brief description of the page. It has any information that may be needed about the site",
                 "https://placeimg.com/450/450/tech",
                 "https://missouristate.edu",
                 "Free"),
    new InfoCard("Test card 4 title",
                 "This is a brief description of the page. It has any information that may be needed about the site",
                 "https://placeimg.com/450/450/nature",
                 "https://www.twitch.tv",
                 "$9.99/month"),
  ];

let mainCard = 0;
let prevCard = cardList.length - 1;
let nextCard = 1;

function loadGallery() {
    document.getElementById("main-img").src = cardList[mainCard].imageURL;
    document.getElementById("main-title").innerHTML = cardList[mainCard].title;
    document.getElementById("main-link").href = cardList[mainCard].siteURL;
    document.getElementById("main-link").innerHTML = cardList[mainCard].siteURL;
    document.getElementById("main-cost").innerHTML = cardList[mainCard].cost;
    document.getElementById("main-desc").innerHTML = cardList[mainCard].description;


    document.getElementById("left-img").src = cardList[prevCard].imageURL;
    document.getElementById("left-title").innerHTML = cardList[prevCard].title;
    document.getElementById("left-link").href = cardList[prevCard].siteURL;
    document.getElementById("left-link").innerHTML = cardList[prevCard].siteURL;
    document.getElementById("left-cost").innerHTML = cardList[prevCard].cost;
    document.getElementById("left-desc").innerHTML = cardList[prevCard].description;

    document.getElementById("right-img").src = cardList[nextCard].imageURL;
    document.getElementById("right-title").innerHTML = cardList[nextCard].title;
    document.getElementById("right-link").href = cardList[nextCard].siteURL;
    document.getElementById("right-link").innerHTML = cardList[nextCard].siteURL;
    document.getElementById("right-cost").innerHTML = cardList[nextCard].cost;
    document.getElementById("right-desc").innerHTML = cardList[nextCard].description;
};

function scrollRight() {
    prevCard = mainCard;
    mainCard = nextCard;
    if (nextCard >= (cardList.length - 1)) {
        nextCard = 0;
    } else {
        nextCard++;
    };
    loadGallery();
};

function scrollLeft() {
    nextCard = mainCard;
    mainCard = prevCard;

    if (prevCard === 0) {
        prevCard = cardList.length - 1;
    } else {
        prevCard--;
    };
    loadGallery();
};

function initCarousel() {
    document.getElementById("nav-right").addEventListener("click", scrollRight);
    document.getElementById("nav-left").addEventListener("click", scrollLeft);
    document.getElementById("right-view").addEventListener("click", scrollRight);
    document.getElementById("left-view").addEventListener("click", scrollLeft);

    loadGallery();
}