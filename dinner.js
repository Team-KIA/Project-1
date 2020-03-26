
//var locales = ["East Village", "Soho", "Upper East Side", "Lower East Side", "Greenwich Village", "Gramercy-Flatiron", "Hell's Kitchen", "Chelsea", "Midtown"];

$(".uk-button").on("click", function () {

    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&apikey=b12fbdce2dfa854d91ec1e69686e185c";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);

            var results = response.restaurants
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                //console.log(RestInfoDiv);
                jQuery('#soho').click(function () {
                    $(this).data('clicked', true);
                });
                if (jQuery('#soho').data('clicked')) {
                    var RestInfoDiv = $('<div class = "Rest-Info"></div>');

                    //Storing the east village restaurants data
                    var RESTname = results[i].restaurant.name;
                    //Creating an element to have name displayed
                    var pONE = $("<p>").text("Name: " + RESTname);
                    RestInfoDiv.append(pONE);
                    var RESTaddress = results[i].restaurant.location.address;
                    var pTWO = $("<p>").text("Address: " + RESTaddress);
                    RestInfoDiv.append(pTWO);
                    var RESTratings = results[i].restaurant.user_rating.aggregate_rating;
                    var RESTreviewnumber = results[i].restaurant.all_reviews_count;
                    var pTHREE = $("<p>").text("Ratings: " + RESTratings + " ; " + " No. of reviews: " + RESTreviewnumber);
                    RestInfoDiv.append(pTHREE);
                    var RESTwebsite = results[i].restaurant.url;
                    var pFOUR = $("<p>").text("Website: " + RESTwebsite);
                    RestInfoDiv.append(pFOUR);
                    var RESTpics = results[i].restaurant.photos[2];
                    var pFIVE = $("<img>").attr("src", RESTpics);
                    RestInfoDiv.append(pFIVE);
                    $(".container").append(RestInfoDiv);


                }

                // if (results[i].restaurant.location.locality === "Soho" || results[i].restaurant.location.locality === "East Village" || results[i].restaurant.location.locality === "Upper East Side"  ) {

                //     //Creating a div to store restaurants in east village
                //     var RestInfoDiv = $('<div class = "Rest-Info"></div>');


                //     //Storing the east village restaurants data
                //     var RESTname = results[i].restaurant.name;
                //     //Creating an element to have name displayed
                //     var pONE = $("<p>").text("Name: " + RESTname);
                //     RestInfoDiv.append(pONE);


                //     var RESTaddress = results[i].restaurant.location.address;
                //     var pTWO = $("<p>").text("Address: " + RESTaddress);
                //     RestInfoDiv.append(pTWO);
                //     var RESTratings = results[i].restaurant.user_rating.aggregate_rating;
                //     var RESTreviewnumber = results[i].restaurant.all_reviews_count;
                //     var pTHREE = $("<p>").text("Ratings: " + RESTratings + " ; " + " No. of reviews: " + RESTreviewnumber);
                //     RestInfoDiv.append(pTHREE);
                //     var RESTwebsite = results[i].restaurant.url;
                //     var pFOUR = $("<p>").text("Website: " + RESTwebsite);
                //     RestInfoDiv.append(pFOUR);
                //     var RESTpics = results[i].restaurant.photos[2];
                //     var pFIVE = $("<img>").attr("src", RESTpics);
                //     RestInfoDiv.append(pFIVE);
                //     $(".container").append(RestInfoDiv);

                //}




            }

        });






});

