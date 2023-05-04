let slideDiv = document.getElementById("sliding");
let slideImg1 = document.getElementById("slideImg1");
let slideImg2 = document.getElementById("slideImg2");

let container = document.getElementById("container");

let images1 = [
    "https://c4.wallpaperflare.com/wallpaper/107/645/240/luxury-water-bungalows-maldives-wallpaper-preview.jpg",
    "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
let images2 = [
    "https://wallpapercave.com/dwp1x/wp4088743.jpg",
    "https://images.pexels.com/photos/1287452/pexels-photo-1287452.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=600"
]
let count1 = 0
let count2 = 0
// slideImg.src = images[count]
setInterval(() => {
    slideImg1.src = images1[count1]
    slideImg2.src = images2[count2]
    count1++
    count2++
    if(count1==images1.length && count2==images2.length){
        count1 = 0;
        count2 = 0;
    }
}, 2000)


fetchData()

function fetchData(){
  fetch("")
  .then(res => res.json())
  .then((data)=>{
    console.log(data)
    booksData = data;
    appendData();
  })
  .catch((error)=>{
    console.log(error)
  })
}

function appendData(data){
  container.innerHTML="";

  let cardlist = document.createElement("div");
  cardlist.className = "card-list";

  data.forEach((item) => {
    let card =  createCard(item);
    cardlist.append(card)
  })
  container.append(cardlist);
}

function createCard(item){
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id",item.id);

  let imgDiv = document.createElement("div");
  imgDiv.className = "card-img";

  let img = document.createElement("img");
  img.setAttribute("alt", "Image");
  img.src = item.image;

  imgDiv.append(img);

  let bodyDiv = document.createElement("div");
  bodyDiv.className = "card-body";

  let h4 = document.createElement("h4");
  h4.className = "card-title";
  h4.textContent = item.title;

  let p1 = document.createElement("p");
  p1.className = "card-location" ;
  p1.textContent = item.location;

  let p2 = document.createElement("p");
  p2.className = "card-category" ;
  p2.textContent = item.category;

  let p3 = document.createElement("p");
  p3.className = "card-price" ;
  p3.textContent = item.price;

  let a = document.createElement("a");
  a.className = "card-link";
  a.setAttribute("data-id",item.id);
  a.href = "#";
  a.textContent = "Proceed";
  
  let btn = document.createElement("button");
  btn.setAttribute("data-id",item.id);
  btn.className = "card-button" ;
  btn.textContent = "Details";

  // let id = item.id
  btn.addEventListener("click",()=>{
    
    
  })

  bodyDiv.append(h4,p1,p2,p3,a,btn);

  card.append(imgDiv,bodyDiv);

  return card;
}