const foodArr=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const itemsDiv=document.getElementById("items");


for(let i=0;i<foodArr.length;i++){
    let newdiv=document.createElement("div");
    newdiv.className="itemsClass"
    newdiv.style.border="1px solid grey"
    newdiv.style.boxShadow="2px 2px 3px 3px grey"
    newdiv.style.display="flex";
    newdiv.style.justifyContent="center"
    newdiv.style.justifyContent="space-around"
    newdiv.style.flexDirection="column";
    newdiv.style.width="25vw";
    newdiv.style.height="60vh";


    newdiv.innerHTML=`
    <img src="${foodArr[i].imageSrc}"></img>
    <div class="veg">${(foodArr[i].type==="veg")?"Veg":"Non-Veg"}</div>
    <div class="itemIn">
        <div style="font-size:4vh;font-weight: bold;margin-left:1vw">
            ${foodArr[i].name}
        </div>
        <div class="icons">
        <p><i class="fa-solid fa-star "></i></p>
        <p>${foodArr[i].rating}</p>
        </div>
    </div>
    <div class="itemIn">
        <div style="font-size:4vh;font-weight: bold; color:red;margin-left:1vw">
            ${foodArr[i].time} 
        </div>
        <div class="icons">
            <p class="likeBut"><i class="fa-regular fa-heart"></i></p>
            <p><i class="fas fa-comment"></i></p>   
        </div>
    </div> `

    
    itemsDiv.appendChild(newdiv);
}
const likeBut=document.getElementsByClassName("likeBut");
for(let i=0;i<likeBut.length;i++){
    likeBut[i].addEventListener("click",(event)=>{
        event.target.classList.toggle("red-heart");
        foodArr[i].isLiked="true";
    })
}
let input=document.getElementById("searchInput");
let allItems=document.getElementsByClassName("itemsClass");
input.addEventListener("keyup",()=>{
   for(let i=0;i<allItems.length;i++){
     if(!foodArr[i].name.toLowerCase().includes(input.value.toLowerCase())){
       allItems[i].style.display="none";
     }
   }
})

let inputBut=document.getElementById("searchButton");
inputBut.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
        if(!foodArr[i].name.toLowerCase().includes(input.value.toLowerCase())){
          allItems[i].style.display="none";
        }
      }
})

let allBut=document.getElementById("showAll");
allBut.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
          allItems[i].style.display="block";
      }
})

let sortVegBut=document.getElementById("sortVeg");
sortVegBut.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
        if(foodArr[i].type==="non-veg"){
          allItems[i].style.display="none";
        }
      }
})

let nonVegBut=document.getElementById("sortNonVeg");
nonVegBut.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
        if(foodArr[i].type==="veg"){
          allItems[i].style.display="none";
        }
      }
})

const radioBut1=document.getElementById("rating1");
const radioBut2=document.getElementById("rating2");

radioBut1.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
        if(foodArr[i].rating<4){
          allItems[i].style.display="none";
        }
    }
})
radioBut2.addEventListener("click",()=>{
    for(let i=0;i<allItems.length;i++){
        if(foodArr[i].rating>=4){
          allItems[i].style.display="none";
        }
    }
})

window.addEventListener("resize",changeDis)
const but=document.getElementById("displayBut");
const links=document.getElementById("links");
const div2=document.getElementById("div2");
const logo=document.getElementById('logo');

document.addEventListener("DOMContentLoaded",()=>{
    div2.style.display="none";
})
function changeDis(){
    if(window.innerWidth<=657){
        but.style.display="inline";
        links.style.display="none";
        logo.style.display="block";
    }
    else{
        but.style.display="none";
        links.style.display="flex";
        div2.style.display="none";
    }
}

but.addEventListener("click",()=>{
    logo.style.display="none";
    div2.style.display="flex";
    div2.style.backgroundColor="white";
    
})





