const restaurantController = {
  init: function () {
    const showAllButton = document.querySelector("#showAll");
    const showTopRatedButton = document.querySelector("#showTopRated");
    const showPriceRangeButton = document.querySelector("#showInexpensive");
    const showRestaurantsByCuisineButton = document.querySelector("#showByCuisine");

    showAllButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getAllRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    // showTopRatedButton.addEventListener("click", function () {
    //   const restaurants = restaurantModel.getTopRatedRestaurants();
    //   restaurantView.displayRestaurants(restaurants);
    // });
    showTopRatedButton.addEventListener("click", function () {
      const topRated = restaurantModel.restaurants.filter(function (restaurant) {
        return restaurant.rating >= 4.7;
      });
      restaurantView.displayRestaurants(topRated);
    });
    
    showPriceRangeButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getPriceRangeResturants();
      restaurantView.displayRestaurants(restaurants);
    });

    showRestaurantsByCuisineButton.addEventListener("click", function () {
      const cuisine = prompt("Enter a cuisine type (e.g., Italian, Japanese, American, Vietnamese, Indian):");
      const restaurants = restaurantModel.getRestaurantsByCuisine(cuisine);
      restaurantView.displayRestaurants(restaurants);
      
      if (restaurants.length === 0) {
        const container = document.querySelector("#restaurantList");
        container.innerHTML = "<p>No restaurants found.</p>";
        return;
      }
    });

    restaurantView.displayRestaurants(restaurantModel.getAllRestaurants());
  }
};

restaurantController.init();


