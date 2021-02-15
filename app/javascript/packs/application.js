// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';

const listCocktailInstances = gon.cocktails
const input = document.querySelector("#search_query");

input.addEventListener("keyup", (event) => {
  listCocktailInstances.forEach((cocktail) => {
    if (cocktail.name.includes(input.value)) {
      console.log(cocktail)
      document.querySelector('.cards').insertAdjacentHTML('beforeend',
      `<h1> <%= ${cocktail.name}.upcase %> </h1>`)
    }
  });
});


      //   <div class="card" style="background-image: url('<%= cl_image_path ${cocktail.photo.key} %>')">
      //   <%= link_to ${cocktail.name}.upcase, cocktail_path(cocktail)%>
      //   </div>`);

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
