/* © Created by Caviar9045 */


/* Variables & dictionaries */

var currentIndex;

const famousQuotes = {
    "Michael Jackson": "I'm a perfectionist. I want to be perfect. I want my performances to be perfect.",
    "Madonna": "Better to live one year as a tiger, than a hundred as a sheep.",
    "Prince": "Despite everything, no one can dictate who you are to other people.",
    "Whitney Houston": "The biggest devil is me. I'm either my best friend or my worst enemy.",
    "Bon Jovi": "It's my life, it's now or never, I ain't gonna live forever, I just want to live while I'm alive.",
    "U2": "Music can change the world because it can change people.",
    "The Police": "I don't have any use for bodyguards, but I do have a specific use for two highly trained certified public accountants.",
    "Queen": "I won't be a rock star. I will be a legend.",
    "Cyndi Lauper": "I just want to be who I am. I think all women go through that. We want to be who we are, but society won't let us be.",
    "Guns N' Roses": "I'm not a civil rights activist, I'm a musician. I'm just doing what I do, and if people want to listen, that's their decision.",
    "David Bowie": "I don't know where I'm going from here, but I promise it won't be boring.",
    "George Michael": "You'll never find peace of mind until you listen to your heart.",
    "Cyndi Lauper": "Girls just want to have fun.",
    "Bruce Springsteen": "I'm sick of sittin' 'round here trying to write this book. I need a love reaction come on now baby give me just one look.",
    "The Smiths": "I am the son and the heir of a shyness that is criminally vulgar.",
    "Tina Turner": "We don't need another hero. We don't need to know the way home. All we want is life beyond the thunderdome.",
    "Whitesnake": "Here I go again on my own. Going down the only road I've ever known.",
    "Depeche Mode": "Words are very unnecessary. They can only do harm.",
    "Pet Shop Boys": "In the night, the DJ's rockin' hard. And I'm spinning like a disco ball.",
    "Van Halen": "Jump! Might as well jump! Go ahead and jump!",
}
const imgFamous = {
    "Michael Jackson": "https://cdn.discordapp.com/attachments/1082508875292483594/1098827991586459669/187735.png",
    "Madonna": "https://media.discordapp.net/attachments/1082508875292483594/1098818584651771954/img-madonna.jpg?width=1246&height=701",
    "Prince": "https://media.discordapp.net/attachments/1082508875292483594/1098818585289306182/img-prince.jpg?width=1246&height=701",
    "Whitney Houston": "https://media.discordapp.net/attachments/1082508875292483594/1098818586656641034/img-whitney-houston.jpg",
    "Bon Jovi": "https://media.discordapp.net/attachments/1082508875292483594/1098818583720636417/img-bon-jovi.jpg?width=1246&height=701",
    "U2": "https://media.discordapp.net/attachments/1082508875292483594/1098818586266566666/img-u2.jpg?width=1246&height=701",
    "The Police": "https://media.discordapp.net/attachments/1082508875292483594/1098818585884897300/img-the-police.webp?width=1246&height=701",
    "Queen": "https://media.discordapp.net/attachments/1082508875292483594/1098818585553539123/img-queen.webp?width=1059&height=701",
    "Cyndi Lauper": "https://media.discordapp.net/attachments/1082508875292483594/1098818584110694440/img-cyndi-lauper.jpg",
    "Guns N' Roses": "https://media.discordapp.net/attachments/1082508875292483594/1098818584353968168/img-guns-n-roses.jpg?width=1246&height=701",
    "David Bowie": "https://media.discordapp.net/attachments/1082508875292483594/1099163414451998741/img-david-bowie.jpg?width=1072&height=701",
    "George Michael": "https://media.discordapp.net/attachments/1082508875292483594/1099163414061920416/img-george-michael.webp?width=935&height=701",
    "Cyndi Lauper": "https://media.discordapp.net/attachments/1082508875292483594/1098818584110694440/img-cyndi-lauper.jpg",
    "Bruce Springsteen": "https://media.discordapp.net/attachments/1082508875292483594/1099163413701218495/img-bruce-springsteen.webp?width=1122&height=701",
    "The Smiths": "https://media.discordapp.net/attachments/1082508875292483594/1099163413457944797/img-the-smiths.jpg?width=1246&height=701",
    "Tina Turner": "https://media.discordapp.net/attachments/1082508875292483594/1099163413193699379/img-tina-turner.jpg?width=1246&height=701",
    "Whitesnake": "https://media.discordapp.net/attachments/1082508875292483594/1099163676088487946/img-whitesnake.jpeg?width=1246&height=701",
    "Depeche Mode": "https://media.discordapp.net/attachments/1082508875292483594/1099163415458631720/img-depeche-mode.jpg?width=935&height=701",
    "Pet Shop Boys": "https://media.discordapp.net/attachments/1082508875292483594/1099163415223746560/img-pet-shop-boys.jpg",
    "Van Halen": "https://media.discordapp.net/attachments/1082508875292483594/1099163414946918482/img-van-halen.jpg?width=1246&height=701",
}

function getRandomQuote() {
    setInterval(1000);
    /* Get quote & author */

    /* Set "i" counter depending on the number of quotes we have. */
    var i = getRandomInt(Object.keys(famousQuotes).length);

    /* Select each quote & author by the "i" variable we previously got. */
    var valuesArray = Object.values(famousQuotes);
    var quote = valuesArray[i];

    var keysArray = Object.keys(famousQuotes);
    var author = keysArray[i];

    /* Replace HTML values with the ones we got */
    if (quote == undefined) {
        var i = Math.round(Math.random() * 10);
        var valuesArray = Object.values(famousQuotes);
        var quote = valuesArray[i];

        var keysArray = Object.keys(famousQuotes);
        var author = keysArray[i];
    }
    else {
        document.getElementById('text').innerText = quote;
        document.getElementById('author').innerText = author;
    }


    /* Set background Image */
    setBackgroundImg(i);
}

/* Function to change the background of the website. */

function setBackgroundImg(imgToSet) {
    $(document).ready(function () {
        const myDiv = $("body"); // the HTML object to change the background image of
        const mainContainer = $("#wrapper"); // this is where our text and buttons are located.

        // define the animation function
        function changeImage() {
            mainContainer.animate({
                opacity: 0 // fade out the object
            }, 250, function () {
                let j = imgToSet;
                let valuesArray = Object.values(imgFamous);
                let imageIndex = valuesArray[j];
                // when the animation is complete, change the background image and fade the object back in
                myDiv.css("background-image", "url(" + imageIndex + ")");
                mainContainer.animate({ opacity: 1 }, 250);
            });
        }

        // call the animation function
        changeImage();
    });
}
/* Function get a random number */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
/* Function to open a new browser tab on Tweeter with the quote & author we got ready to post.*/
function tweet() {
    let quoteText = document.getElementById('text').innerText;
    let authorText = document.getElementById('author').innerText;
    let tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + quoteText + '" ') + "%0A" + "- " + encodeURIComponent("" + authorText) + "." + "%0A%0A";
    
    // This is just for freeCodeCamp code to pass the test.
    $('#tweet-quote').attr(
        'href',
        tweetUrl
    );
    window.open(tweetUrl); //Opens a new tab.
}

getRandomQuote();   //this line calls our function to get a randomQuote every time this script loads (everytime the site loads.)