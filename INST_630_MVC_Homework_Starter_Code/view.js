const restaurantView = {
  displayRestaurants: function (restaurants) {
    const container = document.querySelector("#restaurantList");
    container.innerHTML = "";

    restaurants.forEach(function (restaurant) {
      const card = document.createElement("div");
      card.classList.add("restaurant-card");
      card.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>Cuisine: ${restaurant.cuisine}</p>
        <p>Rating: ${restaurant.rating}</p>
        <p>Price Rating: ${restaurant.priceRating}</p>
      `;
      container.appendChild(card);
    });
  }
};
