const restaurantModel = {
  restaurants: [
    { name: "Milano's", cuisine: "Italian", rating: 4.5, priceRating: "$$" },
    { name: "Sakura Sushi", cuisine: "Japanese", rating: 4.2, priceRating: "$" },
    { name: "The Brass Elephant", cuisine: "American", rating: 4.8, priceRating: "$$$" },
    { name: "Pho Corner", cuisine: "Vietnamese", rating: 4.3, priceRating: "$" },
    { name: "Tandoor Palace", cuisine: "Indian", rating: 4.1, priceRating: "$" }
  ],

  getAllRestaurants: function () {
    return this.restaurants;
  },

  getTopRatedRestaurants: function () {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.rating >= 4.5;
    });
  },

  getPriceRangeResturants: function (){
    return this.restaurants.filter(function (restaurant) {
      return restaurant.priceRating === "$";
    });
  },

  getRestaurantsByCuisine: function (cuisine) {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.cuisine === cuisine;
    });
  }

};

// priceRange is an example of data about each resturant (model's array).