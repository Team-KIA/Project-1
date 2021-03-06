

$("button").on("click", function () {
    var dinner = $(this).attr("data-rest");

    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=" +
        dinner + "&count=5&sort=rating&apikey=b12fbdce2dfa854d91ec1e69686e185c"

    $(".Rest-Info").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            var results = response.restaurants
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                var RestInfoCard = $('<div class = "Rest-Info uk-card uk-card-default" ></div>');
                
                var RestInfoDiv = $('<div class = "Rest-Info uk-card-body" ></div>');
                
                var RESTname = results[i].restaurant.name;
                var pONE = $("<p class = 'uk-card-title'>").text("Name: " + RESTname)
                
                RestInfoDiv.append(pONE);

                var RESTaddress = results[i].restaurant.location.address;
                //var RESTlocality = results[i].restaurant.location.locality;
                var pTWO = $("<p>").text("Address: " + RESTaddress);
                RestInfoDiv.append(pTWO);

                var RESTratings = results[i].restaurant.user_rating.aggregate_rating;
                var RESTreviewnumber = results[i].restaurant.all_reviews_count;
                var pTHREE = $("<p>").text("Ratings: " + RESTratings + " ; " + " No. of reviews: " + RESTreviewnumber);
                RestInfoDiv.append(pTHREE);

                var RESTwebsite = results[i].restaurant.url;
                // var pFOUR = $("<p>").text("Website: " + RESTwebsite);
                // RestInfoDiv.append(pFOUR);
                 RestInfoCard.append(RestInfoDiv);

                var RestInfoimage = $(`<a href = ${RESTwebsite} class = "Rest-Info-Image uk-card-media-bottom" ></a>`);
                var RESTpics = results[i].restaurant.photos[0].photo.url;
                var pFIVE = $("<img>").attr("src", RESTpics);

                RestInfoimage.append(pFIVE);
                RestInfoCard.append(RestInfoimage);

                $(".container1").append(RestInfoCard);
            }

            

        });






});

