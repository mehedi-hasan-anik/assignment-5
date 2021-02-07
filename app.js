
document.getElementById('button').addEventListener("click", function () {
    const foodName = document.getElementById('inputFoodName').value;

    if(foodName ===''){
        alert("enter food name");
    }
    
    
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => display(data))

    const display = data => {
        const parent = document.getElementById('namePhoto');
        const meal = data.meals[0];
        meal.forEach(element => {
            parent.innerHTML = `
            <img src="${element.strMealThumb}" style="width:200px;">
            <h1>${element.strMeal} </h1>

            `
            parent.onclick= about;
            function about(){
                parent.innerHTML = `
                <img src="${element.strMealThumb}" style="width:200px;">
                <h1>${element.strMeal} </h1>
                <ul class="list-unstyled">

                <li> <span>${element.strMeasure1}</span> ${element.strIngredient1} </li>
                <li> <span>${element.strMeasure2}</span> ${element.strIngredient2} </li>
                <li> <span>${element.strMeasure3}</span> ${element.strIngredient3} </li>
                <li> <span>${element.strMeasure4}</span> ${element.strIngredient4} </li>
                <li> <span>${element.strMeasure5}</span> ${element.strIngredient5} </li>
                <li> <span>${element.strMeasure6}</span> ${element.strIngredient6} </li>
                <li> <span>${element.strMeasure7}</span> ${element.strIngredient7} </li>
                <li> <span>${element.strMeasure8}</span> ${element.strIngredient8} </li>
                
                </ul>
    
                `
            }
            
        })


    }
    }

})

// search by first letter

document.getElementById('button').addEventListener("click", function () {
    const foodName = document.getElementById('inputFoodName').value;
    if(foodName === '')
    {
        alert("enter food name");
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(Response => Response.json())
        .then(data => displaySameFood(data))

    const displaySameFood = food => {

        const parent2 = document.getElementById('sameFood');
        const meal = food.meals;
        meal.forEach(element => {
            const divName = document.createElement('div');
            divName.innerHTML = `
            <img src="${element.strMealThumb}" style="width:200px;">
            <h1>${element.strMeal} </h1>

            `
            divName.onclick = displayDetail;
            function displayDetail(){
                divName.innerHTML = `
              <img src="${element.strMealThumb}" style="width:200px;">
              <h1>${element.strMeal} </h1>
             <ul class="list-unstyled">

             <li> <span>${element.strMeasure1}</span> ${element.strIngredient1} </li>
             <li> <span>${element.strMeasure2}</span> ${element.strIngredient2} </li>
             <li> <span>${element.strMeasure3}</span> ${element.strIngredient3} </li>
             <li> <span>${element.strMeasure4}</span> ${element.strIngredient4} </li>
             <li> <span>${element.strMeasure5}</span> ${element.strIngredient5} </li>
             <li> <span>${element.strMeasure6}</span> ${element.strIngredient6} </li>
             <li> <span>${element.strMeasure7}</span> ${element.strIngredient7} </li>
             <li> <span>${element.strMeasure8}</span> ${element.strIngredient8} </li>
             
             </ul>

              `
            }
           
            parent2.appendChild(divName);

        })

    }
    }
})

