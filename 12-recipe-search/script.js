const apiKey = 1;
const apiURL = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php`;
async function searchRecipes(searchTerms) {
    const response = await axios.get(apiURL, {
        params: {
            's': searchTerms

        }
    });
    return response.data.meals;
}

function getIngredients(recipe) {
    const ingredients = [];
    for (let i = 1; i < 21; i++) {
        if (recipe["strIngredient"+i]) {
            ingredients.push(recipe["strIngredient"+i])
        } else {
            break;
        }
    }
    return ingredients;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#search-btn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#search-terms").value;
        const recipes = await searchRecipes(searchTerms);
        const output = document.querySelector("#output");
        output.innerHTML = "";
        recipes.forEach(function (r) {
            output.innerHTML += `
                <div class="card me-2" style="width: 18rem;">
                <img src="${r.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${r.strMeal}</h5>
                    <ul>
                        <li>Category:${r.strCategory}</li>
                        ${ r.strTags ? `<li>Tags:${r.strTags}</li>` : ''}
                        <li>Ingredients: ${getIngredients(r)}</li>
                    </ul>
                   
                    <a href="#" class="btn btn-primary">More Details</a>
                </div>
            </div>
            `
        })
    });
})