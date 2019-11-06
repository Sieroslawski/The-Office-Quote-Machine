//opens a smaller window for the Tweet button

function openURL(url) {
  window.open(
    url,
    "Share",
    "Width = 550, height= 400, toolbar = 0, scrollbars = 1, location, = 0, statusbar = 0, menubar = 0, resizable = 0"
  );
}

//multi-dimensional array

var quotes = [
    [
  "The worst thing about prison was the dementors.", "Michael Scott"
    ],
    [
  "I talk a lot, so I’ve learned to tune myself out.", "Kelly Kapoor"
    ],
    [
  "If I don't have some cake soon, I might die.", "Stanley Hudson"
    ],
    [
  "I just want to lie on the beach and eat hot-dogs. That's all I've ever wanted.", "Kevin Malone"  
    ],
    [
   "Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls.", "Angela Martin"
    ],
    [
   "I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.", "Creed Bratton"
    ],
    [
    "Somebody had the balls to put my phone number on the men's room wall. Which is so messed up. It's 6782 not 83.", "Meredith Palmer" 
    ],
    [
    "I hate the idea that someone out there hates me. I even hate thinking that Al-Qaeda hates me. I think if they got to know me, they wouldn't hate me.", "Pam Halpert"  
    ],
    [
    "Hey. I just wanted you to know that you can't just say the word 'bankruptcy' and expect anything to happen.", "Oscar Nunez" 
    ],
    [
    "Right now this is just a job. If I advance any higher in this company, this would be my career. And, uh, if this were my career, I'd have to throw myself in front of a train.", "Jim Halpert"  
    ],
    [
    "I am so sick of February. It's the shortest month but it sure doesn't feel that way.", "Toby Flenderson"  
    ],
    [
    "I wonder what people like about me. Probably my jugs.", "Phyllis Vance"  
    ]
];

//variables
var randomquote = 0;
var previousquote = 0;
var quote = "";
var author = "";

//generate a random quote, and if the newly generated quote is the same as previous, then generate another

function generateNewQuote() {
  do {
    randomquote = Math.floor(Math.random() * quotes.length);
  } while (randomquote === previousquote);
  
    quote = quotes[randomquote][0];
    author = quotes[randomquote][1]; 
}

//put a quote into HTML
function insertQuote() {
  //fade in animation
  $("#quote-heading").css({
    opacity: "0.0"
  });
  $("#quote-heading").animate({
    opacity: "1"
  });
  //put text into HTML
  $("#quote-heading").html(quote);
  $("#nameheading").html("-" + author);
}

//have a quote ready on startup
$(document).ready(function() {
  generateNewQuote();
  insertQuote();
});

//click the new quote button
$("#new-quote").on("click", function(){
  generateNewQuote();
  
  generateNewQuote();
  insertQuote();
  previousquote = randomquote;
});

//click the TWEET button
$("#tweet-quote").on("click", function() {
  var tweet = $("#quote-heading").text;
    openURL(
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quote + '" ' + author)
    );
});