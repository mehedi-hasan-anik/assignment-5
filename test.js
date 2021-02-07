
document.getElementById('button').addEventListener("click", function () {
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
            <h1> <span>${element.strMeasure1}</span> ${element.strIngredient1} </h1>
            <h1>${element.strIngredient2} </h1>
            <h1>${element.strIngredient3} </h1>
            <h1>${element.strIngredient4} </h1>
            <h1>${element.strIngredient5} </h1>
            <h1>${element.strIngredient6} </h1>
            <h1>${element.strIngredient7} </h1>
            <h1>${element.strIngredient8} </h1>
            
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
