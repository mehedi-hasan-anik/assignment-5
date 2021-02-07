
document.getElementById('button').addEventListener("click", function () {
    const foodName = document.getElementById('inputFoodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
    .then(Response => Response.json())
    .then(data => console.log(data))

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => display(data))

    const display = data => {
        const parent = document.getElementById('namePhoto');
        const meal = data.meals;
        meal.forEach(element => {
            parent.innerHTML = `
            <h1>${element.strMeal} </h1>
            <img src="${element.strMealThumb}" style="width:200px;">

            `
            
        })


    }

})

function details() {
    const foodName = document.getElementById('inputFoodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => display(data))

    const display = data => {
        const parent = document.getElementById('namePhoto');
        const meal = data.meals;
        meal.forEach(element => {
            parent.innerHTML = `
            <h1>${element.strMeal} </h1>
            <img src="${element.strMealThumb}" style="width:200px;">
            <h3> <span>${element.strMeasure1}</span> ${element.strIngredient1} </h3>
            <h3> <span>${element.strMeasure2}</span> ${element.strIngredient2} </h3>
            <h3> <span>${element.strMeasure3}</span> ${element.strIngredient3} </h3>
            <h3> <span>${element.strMeasure4}</span> ${element.strIngredient4} </h3>
            <h3> <span>${element.strMeasure5}</span> ${element.strIngredient5} </h3>
            <h3> <span>${element.strMeasure6}</span> ${element.strIngredient6} </h3>
            <h3> <span>${element.strMeasure7}</span> ${element.strIngredient7} </h3>
            <h3> <span>${element.strMeasure8}</span> ${element.strIngredient8} </h3>
            
            `
        })


    }
}






//    document.getElementById('button').addEventListener("click",function(){
//       const foodName = document.getElementById('inputFoodName').value;
//        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
//         .then(res => res.json())
//         .then(data => display(data))

//         function display(data){
//             const parent = document.getElementById('namePhoto');
//             const meal = data.meals;
//             for (let i = 0; i < meal.length; i++) {
//                 const element = meal[i];
//                 parent.innerHTML =`
//                 <h1>${element.strMeal} </h1>
//                 <img src="${element.strMealThumb}" style="width:200px;">
//                 <p> ${element.strInstructions}</p>

//                 `

//             }
//         }
//    })
