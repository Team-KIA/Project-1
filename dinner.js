
var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&apikey=b12fbdce2dfa854d91ec1e69686e185c";

$.ajax({
url: queryURL,
method: "GET"
})
.then(function(response) {
  
for (var i = 0; i < response.restaurants.length; i++){
//console.log(response.restaurants[i].restaurant.user_rating.aggregate_rating);
//console.log(response.restaurants[i].restaurant.timings);
console.log(response.restaurants[i].restaurant.location.locality);

  
  
  
  
  
  

}
});
