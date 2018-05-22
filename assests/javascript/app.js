// define the variables including the array or topic strings and the api url
// api key = ZJrHPWcQ0UesjHkVgQJeoKjaqOrdFD9f

var topics = ["Exercise", "Weight Lifting", "Crossfit", "HIIT Training", "Protein", "Carbs",
    "Healthy Fats", "Healthy Eating", "Sleep", "Puppies"];
console.log(topics);


function displayTopicInfo() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=ZJrHPWcQ0UesjHkVgQJeoKjaqOrdFD9f&limit=1&rating=g";
    console.log(queryURL);
    console.log(topic);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.rating);
    });
}

function createButtons() {
        // empty out the div
        $("#gif-space").empty();
        console.log("hi");
        // for loop to go through the topics and create buttons for each
        for(var i = 0; i <topics.length; i++) {
            var newButton = $("<button>");
            newButton.text(topics[i]);
            $("#gif-space").append(newButton);
            console.log(topics[i]);
        }
}
createButtons();


// start creating functions: we will need:
// document on ready
// a function that displays the gifs when the button is clicked
// a function that pushes the user input into the arry so that a button can be created on the screen to then be clicked
// to display the list of gifs
// lists the rating of each gif below the gif
// start with a still image of the gif, user can click to start gif and click again to pause gif