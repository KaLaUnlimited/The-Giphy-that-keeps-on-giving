// var topics=[];



// function getGifs() {
//     var input = $('#giphy-input').val().trim();
//     var api_key = '3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL';
//     var url = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + input + '&limit=10';

//     $.ajax({
//         url: url
//     }).done(function(res) {
//         var gifs = res.data;

//         $('#giphy-view').empty();

//         for ( var i = 0; i < gifs.length; i++ ) {
//             var url = gifs[i].images.downsized.url;

//             $('#gifs').append($('<div>').css('background-image', 'url(' + url +')'));
//         }
//     });
// }

//this function is to add and display giph buttons to the 
 function createGiphyButton() {
    event.preventDefault();
    
var giphySearch = $("#giphy-input").val().trim();
    var giphyButton = $("<button>");

    giphyButton.addClass("myGiphs");

    

    giphyButton.text(giphySearch);
    $("#giphyButtons-view").append(giphyButton);
  }

  $(document).on("click", "#add-giphy", createGiphyButton);


//this function is to grab the giph from API
// $('#add-giphy').on('click', getGifs);