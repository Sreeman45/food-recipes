let food = document.querySelector(".food")
let indian = document.getElementById('indian')
let canadian = document.getElementById('canadian')
let american = document.getElementById('american')
let thai = document.getElementById('thai')
let british = document.getElementById('british')
let russian = document.getElementById('russian')
let search = document.querySelector('#search')
var recipe;
let fetchdata = async (country) => {
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  let jsondata = await data.json()
  recipe = jsondata.meals
  food.innerHTML = recipe.map((i) => `
  <div class="p"><img src="${i.strMealThumb}">
  <div><p style="margin-top:7px">${i.strMeal}</p></div></div>
  
  `).join('')
}

fetchdata("indian")
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const img6 = document.querySelector('#img6');
indian.addEventListener('mouseover', () => {
    img1.style.transform = 'translateY(-10px)';
    img1.style.width='130px'
});

indian.addEventListener('mouseleave', () => {
    img1.style.transform = 'translateY(0)';
    img1.style.width='100px'
});
canadian.addEventListener('mouseover', () => {
  img2.style.transform = 'translateY(-10px)';
  img2.style.width='130px'
});

canadian.addEventListener('mouseleave', () => {
  img2.style.transform = 'translateY(0)';
  img2.style.width='100px'
});
american.addEventListener('mouseover', () => {
  img3.style.transform = 'translateY(-10px)';
  img3.style.width='130px'
})

american.addEventListener('mouseleave', () => {
  img3.style.transform = 'translateY(0)';
  img3.style.width='100px'
});
thai.addEventListener('mouseover', () => {
  img4.style.transform = 'translateY(-10px)';
  img4.style.width='130px'
});

thai.addEventListener('mouseleave', () => {
  img4.style.transform = 'translateY(0)';
  img4.style.width='100px'})

british.addEventListener('mouseover', () => {
    img5.style.transform = 'translateY(-10px)';
    img5.style.width='130px'
});
british.addEventListener('mouseleave', () => {
  img5.style.transform = 'translateY(0)';
  img5.style.width='100px'
});

russian.addEventListener('mouseover', () => {
  img6.style.transform = 'translateY(-10px)';
  img6.style.width='130px'
});
russian.addEventListener('mouseleave', () => {
  img6.style.transform = 'translateY(0)';
  img6.style.width='100px'
});
indian.addEventListener('click', () => fetchdata('indian'));
canadian.addEventListener('click', () => fetchdata('canadian'));
american.addEventListener('click', () => fetchdata('american'));
thai.addEventListener('click', () => fetchdata('thai'));
british.addEventListener('click', () => fetchdata('british'));
russian.addEventListener('click', () => fetchdata('russian'));
search.addEventListener('keyup', () => {
  let inputValue = search.value.trim().toLowerCase();
  let items = recipe.filter((i) =>
    i.strMeal.trim().toLowerCase().includes(inputValue)
  );
  if(items.length > 0){
  food.innerHTML = items.map((i) => `
      <div class="p">
          <img src="${i.strMealThumb}">
          <div><p style="margin-top:7px">${i.strMeal}</p></div>
      </div>
  `).join('')}
  else{
      food.innerHTML=`
       <div class="p">
          <div><p style="margin-top:7px;Font-family:verdena">No Such Items</p></div>
      </div>`
  }


});

