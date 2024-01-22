let allRecipes = [];
let recipeDetails = {};
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");




async function getRecipes(term) {
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    allRecipes = await apiResponse.json();
    allRecipes = allRecipes.recipes;
    displayRecipes();
}


function displayRecipes() {
    let cartona = ``;
    for (let i = 0; i < allRecipes.length; i++) {
        cartona += `
        <div class="col-md-4">
        <div class="recipe" onclick = getRecipesDetails(${allRecipes[i].recipe_id})        >
          <img class= "w-100" src="${allRecipes[i].image_url}" alt="">
          <h4 class="color-mine">${allRecipes[i].title}</h4>
          <p>${allRecipes[i].publisher}</p>

        </div>
      </div>`;
    }
    document.getElementById("recipesRow").innerHTML = cartona;
};




async function getRecipesDetails(id) {
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    recipeDetails = await apiResponse.json();
    recipeDetails = recipeDetails.recipe;
    displayRecipesDetails();
}

//getRecipesDetails(47746); 

function displayRecipesDetails() 
{
    let cartoona = ` <div class="recipeDetails py-3">
    <h2 class="color-mine py-1 font-weight-bolder">${recipeDetails.title}</h2>
    <img src="${recipeDetails.image_url}" class="w-100 " alt="">
    <ul class="fa-ul py-3">`;
    
    for (let x of recipeDetails.ingredients) {
    cartoona+=`<li class="d-flex align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>`
    }
    cartoona+=`</ul>
  </div> `;
    document.getElementById("recipeDetails").innerHTML = cartoona;
};

searchBtn.addEventListener("click", function () {
    getRecipes(searchInput.value);
})
