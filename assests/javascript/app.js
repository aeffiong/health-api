// define the variables including the array or topic strings and the api url
// api key = ZJrHPWcQ0UesjHkVgQJeoKjaqOrdFD9f

var topics = ["Exercise", "Weight Lifting", "Crossfit", "HIIT Training", "Protein", "Carbs",
    "Healthy Fats", "Healthy Eating", "Sleep", "Puppies"];
console.log(topics);

$(document).ready(function(){
// function not working - also is this referring to topics array?

function displayTopicInfo() {
    // var topic = $(this).attr("data-name");
    var topic  = "puppy";
    console.log(this);
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
        var topicDiv = $("<div>");
        var ratings = $("<p>");
        ratings.text(JSON.stringify(response.data.rating));
        topicDiv.append(ratings);
        $("#gifSpace").append(topicDiv);
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
})
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