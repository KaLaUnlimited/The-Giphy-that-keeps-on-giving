 var topics = ["Rugrats", "Doug", "Animaniacs", "Hey Arnold", "Power Puff Girls"];

 function getGifs() {

     var input = $(this).data("giphy");
     var api_key = '3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL';
     var url = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + input + ' cartoon&limit=10';

     $.ajax({
         url: url
     }).done(function(res) {
         console.log(res);
         var gifs = res.data;

         $('#giphy-view').empty();

         for (var i = 0; i < gifs.length; i++) {
             var giphDiv = $('<div>');
             var url_2 = $('<img>').attr('src', gifs[i].images.fixed_height_still.url)
             var rating = $('<p>').text("Rating: " + gifs[i].rating);

             //  $('#giphy-view').append($('<div>').css('background-image', 'url(' + url2 + ')'));
             giphDiv.addClass("pause");
             giphDiv.attr("data-still", gifs[i].images.fixed_height_still.url);
             giphDiv.attr("data-animate", gifs[i].images.fixed_height.url);
             giphDiv.attr("data-state", "still")
             giphDiv.append(rating);
             giphDiv.append(url_2);
             $('#giphy-view').append(giphDiv);

         }
     });
 }

 //this function is to add and display giph buttons to the 
 function createGiphyButton() {
     $("#giphyButtons-view").empty();
     event.preventDefault();

     var giphySearch = $("#giphy-input").val().trim();
     topics.push(giphySearch);

     displayButtons();

 }
 //this is loop is to go through topics array and display on DOM

 function displayButtons() {

     for (var i = 0; i < topics.length; i++) {
         var giphyButton = $("<button>");

         giphyButton.addClass("myGiphsButtons");
         giphyButton.attr("data-giphy", topics[i])

         giphyButton.text(topics[i]);
         $("#giphyButtons-view").append(giphyButton);
     }

 }


 displayButtons();


 $("#add-giphy").on("click", createGiphyButton);


 //this function is to grab the giph from API
 $(document).on('click', '.myGiphsButtons', getGifs);

 $(document).on("click", ".pause", changeState);


 function changeState() {
     var state = $(this).attr("data-state");


     if (state === "still") {
         $(this).attr("src", $(this).attr('data-animate'));
         $(this).attr("data-state", "animate");

     } else {
         $(this).attr("src", $(this).attr("data-still"));
         $(this).attr("data-state", "still");

     }
 }