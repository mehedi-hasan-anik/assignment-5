document.getElementById('button').addEventListener("click", function () {
    const foodName = document.getElementById('inputFoodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
        .then(Response => Response.json())
        .then(data => displaySameFood(data))

    const displaySameFood = food => {

        const parent2 = document.getElementById('sameFood');
        const meal = food.meals;
        meal.forEach(element => {
            const li = document.createElement('li');

            li.innerHTML = `
            <h1>${element.strMeal} </h1>
            <img src="${element.strMealThumb}" style="width:200px;">


            `
            parent2.appendChild(li);



        })

    }
})