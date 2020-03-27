// Initial array of movies
      var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayCurrentWeather() {

        //var zipLocation = $(this).attr("data-name");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=06804,us&appid=cee88101192942cc1ddef8fb37f11635";

        // Creating an AJAX call for the current weather 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          console.log(response);
          // Creating a div to hold the current weather
          var weatherDiv= $("<div class='weatherInfo'>");

          // Storing the weather data
          var weather = response.weather[0].main;

          // Creating an element to have weather displayed
          var pOne = $("<p>").text("Weather: " + weather);
          console.log(pOne)

          // Displaying the rating
          weatherDiv.append(pOne);

          // Storing the release year
          var humidity = response.main.humidity;

          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Humidity: " + humidity + "%");

          // Displaying the release year
          weatherDiv.append(pTwo);

          // Storing the plot
          var plot = response.Plot;

          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          weatherDiv.append(pThree);

          // Retrieving the URL for the image
          var imgURL = response.Poster;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          weatherDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#weather-view").prepend(weatherDiv);
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("movie-btn");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding movie from the textbox to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", "#searchWeather", displayCurrentWeather);

      // Calling the renderButtons function to display the initial buttons
      renderButtons();

      // var queryURL = "api.openweathermap.org/data/2.5/weather?zip=" + zipLocation + "&appid=cee88101192942cc1ddef8fb37f11635";

 