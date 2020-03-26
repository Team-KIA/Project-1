// Initial array of movies

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

  //var zipLocation = $(this).attr("data-name");
  var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=d3e37a66d6d28b413e572f08c28122a6&language=en-US&page=1";

  // Creating an AJAX call for the current weather 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // Record 3 Movie Information
    for (var i = 0; i < 3; i++) {

      console.log(response);
      // Creating a div to hold the current weather
      var weatherDiv = $("<div class='weatherInfo'>");

      // Storing the weather data
      var title = response.results[i].title;

      // Creating an element to have title displayed
      var pOne = $("<p>").text("Title: " + title);
      console.log(pOne)

      // Displaying the rating
      weatherDiv.append(pOne);

      //Storing the release date
      var releaseDate = response.results[i].release_date;

      // Creating an element to hold the release date
      var pTwo = $("<p>").text("Release Date: " + releaseDate);

      // Displaying the release date
      weatherDiv.append(pTwo);

      // Storing the review rating
      var viewRating = response.results[i].vote_average;

      // Creating an element to hold the plot
      var pThree = $("<p>").text("Viewer Rating: " + viewRating + "/10");

      // Appending the plot
      weatherDiv.append(pThree);

      //Storing the overview
      var plotSum = response.results[i].overview;

      // Creating an element to hold the release date
      var pFour = $("<p>").text("Plot Summary: " + plotSum);

      // Displaying the release date
      weatherDiv.append(pFour);


      // Retrieving the URL for the image
      var imgURL = "https://fmovies.cc/wp-content/uploads/2020/03/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg";

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      weatherDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#weather-view").prepend(weatherDiv);
    }

  })

}


      // // This function handles events where a movie button is clicked
      // $("#add-movie").on("click", function(event) {
      //   event.preventDefault();
      //   // This line grabs the input from the textbox
      //   var movie = $("#movie-input").val().trim();

      //   // Adding movie from the textbox to our array
      //   movies.push(movie);

      //   // Calling renderButtons which handles the processing of our movie array
      //   renderButtons();
      // });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", "#searchMovie", displayMovieInfo)