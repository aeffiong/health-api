// define the variables including the array or topic strings and the api url
// api key = ZJrHPWcQ0UesjHkVgQJeoKjaqOrdFD9f

var topics = ["Exercise", "Weight Lifting", "Crossfit", "HIIT Training", "Protein", "Carbs",
    "Healthy Fats", "Healthy Eating", "Sleep", "Puppies"];
console.log(topics);

$(document).ready(function(){
// api call not working - also is this referring to topics array?

function displayTopicInfo() {
    var topic = $(this).attr("data-name");
    // var topic  = "puppy";
    console.log(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=ZJrHPWcQ0UesjHkVgQJeoKjaqOrdFD9f&limit=10&rating=g";
    console.log(queryURL);
    console.log(topic);
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].rating);
        console.log("hi");

        
        // adding divs and p's to the screen to display the information to the screen
        for(var i =0; i<response.data.length; i++) {
            var gifWrapper = $("<div>");
            var imageUrl = response.data[i].images.fixed_height.url;
            var imageStill = response.data[i].images.fixed_height_still.url;
            console.log(imageUrl);
            var topicImage = $("<img>");
            // adding classes and data attributes to the gis so we can use that to start and stop it
            topicImage.addClass("gif");
            topicImage.attr("src", imageStill).attr("data-still", imageStill).attr("data-animate", imageUrl).attr("data-state", "still");
            console.log(topicImage);
            var ratings = $("<p>");
            ratings.text("Rating: " + response.data[i].rating);
            console.log(ratings);
            gifWrapper.append(ratings);
            gifWrapper.prepend(topicImage);
            $("#gifSpace").append(gifWrapper);
        }
        // on click event of the gif, start it, when clicked again, stop it
        $(".gif").on("click", function(event){
            var state = $(this).attr("data-state");
            console.log(state);
            if(state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        })
      
    });
}

function createButtons() {
        // empty out the div
        $("#buttons-view").empty();
        console.log("hi");
        // for loop to go through the topics and create buttons for each
        for(var i = 0; i <topics.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("topic");
            newButton.attr("data-name", topics[i]);
            newButton.text(topics[i]);
            // trying to add space between buttons
            pTag = $("<p>");
            newButton.append(pTag);
            $("#buttons-view").append(newButton);
            console.log(topics[i]);
        }
}
// function to handle what happens with user input and add topic button is clicked
$("#add-topic").on("click", function(event){
    event.preventDefault();
    // grab input from text box
    var topic = $("#topics-input").val().trim();
    // add user input to topics array
    topics.push(topic);
    createButtons();
});

// add a function to get the images to show up using still url
// $("#buttons-view").on("click", function(event){
//     for(var i = 0; i < topics.length; i++) {

//     }

// });
   
// add a function to get gif to play by using original url
// add a function to pause gif using image still url

// adding click functionality to the buttons on screen
$(document).on("click", ".topic", displayTopicInfo);

createButtons();

});
// start creating functions: we will need:
// document on ready
// a function that displays the gifs when the button is clicked
// a function that pushes the user input into the arry so that a button can be created on the screen to then be clicked
// to display the list of gifs
// lists the rating of each gif below the gif
// start with a still image of the gif, user can click to start gif and click again to pause gif