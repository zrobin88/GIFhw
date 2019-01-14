
//array of topics for GIF buttons 
const topics = ["music", "heavy metal", "guitar", "arnold schwarzenegger", "metallica", "star wars", "trailer park boys", "dimebag darrell","goku", "vegeta"]


//add gifs based on value of input 
$("#add-gif").on("click", function(event) {
  event.preventDefault();

  
  // This line of code will grab the input from the textbox
  let userInput = $("#gif-input").val().trim(); 

  // The topic from the textbox is then added to our array
  topics.push(userInput);

  // Calling renderButtons 
  renderButtons();
});


//render buttons function 

renderButtons = () => {

  //delete prior content
  $("#buttons-view").empty();
  // Loops through the array of topics

  for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");
    // Adds a class of topic to button
    a.addClass("topics-button buttonStyle");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);

    console.log(topics[i]);
  }
}


//call renderbuttons function to display buttons
renderButtons(); 



//create click event for buttons that generate gifs based on the name of each button 
$(".topics-button").on("click", function () {
  
  //variable to hold button info (by name) in API key 
  let gifButton = $(this).attr("data-name");
 //var that holds api link and key 
  let queryURL = "http://api.giphy.com/v1/gifs/search?q="+gifButton+"&api_key=nrQ5ktF2K7HdVctvvKa70hbMfPiKAlo6";

 
  //ajax call to api 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    for(let i =0; i <10; i++){
  
      let imageDiv = $("<img>"); 
      imageDiv.addClass("img");
      imageDiv.attr("src",response.data[i].images.fixed_width.url);
      $("#gif-div").append(imageDiv); 
    }
  });


});



$("#clear").on("click", function(){
  location.reload();
});

