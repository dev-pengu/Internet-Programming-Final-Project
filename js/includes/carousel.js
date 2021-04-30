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
    new InfoCard("Epidemic Sound",
                 "Epidemic Sound is a subscription based music libray. Once subscribed you will have access to over 45,000 songs and 90,000 sound effects. Epidemic Sound also offers the ability to buy the rights for a single song although it is cheaper to pay for a monthly subscription. Before deciding on subscribing you have the ability to listen to all of the songs. Epidemic Sound is a great page for all of your music needs. Their website is easy to use and they have a large library to choose from. Epidemic Sound is one of our Highly Recommended websites.",
                 "img/music/epidemic logo.png",
                 "https://www.epidemicsound.com/music/",
                 "Personal: $15/month <br> Commercial: $49/month <br> Enterprise: Quote Request"),
    new InfoCard("Audio Jungle",
                 "Audio Jungle is a subscription based music library. They have over 1,500,000 sound related choices to choose from. Audio Jungle contains full sound tracks, sound effect, as well as individual music kits to cater to any music needs. Audio Jungle also has the option to purchase the rights to single tracks for as little as $1. Audio Jungle is an easy to use website with the ability to search for exactly what you need. They are a great choice when selecting a site for your music needs. Audio Jungle is one of our Highly Recommended websites.",
                 "img/music/audio-jungle.png",
                 "https://audiojungle.net/",
                 "Personal: $16.50/month <br> Teams(price per person): $10.75-$14.50/month <br> Enterprise: Request Quote"),
    new InfoCard("Shutter Stock",
                 "Shutter stock is a subscription based website that allows you to pay for a plan based on the number of images you want to download a month <i>(The plans that we listed are for single users but they also have the option for teams and companies).</i> Shutter Stock has over 300 million images as well as over  1 million creators. This vast library means you will always find the perfect imgage for your project. They are a great pick for all of you image needs. Shutter Stock is one of our <b><em>Highly Recommended</em></b> sources.",
                 "img/image/shutterstock.jpg",
                 "https://www.shutterstock.com/images",
                 "10 downloads/month: $29/month <br> 50 downloads/month: $99/month <br> 350 downloads/month: $169/month"),
    new InfoCard("Pexels",
                 "Pexels is a free to use image library. They have over 1 million images to choose from. Their goal is to provide creators with the best imgages for use in their respective projects. They also host challenges for prizes. The website is easy to navigate and allows you to quickly find the image that is perfect for you. We recommend reading there license policy <a href='https://www.pexels.com/license/'>here</a>. Pexels is one of our <b><em>Highly Recommended</em></b> sources.",                 "img/image/pexels.png",
                 "https://www.pexels.com/discover/",
                 "Free"),
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