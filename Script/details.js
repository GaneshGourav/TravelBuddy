let slideDiv = document.getElementById("sliding");
let slideImg1 = document.getElementById("slideImg1");
let slideImg2 = document.getElementById("slideImg2");

let container = document.getElementById("container");

//sort and filter
let sortAtoZBtn = document.getElementById("sortAsc");
let sortZtoABtn = document.getElementById("sortDsc");

let sortAsc = document.getElementById("sortasc");
let sortDsc = document.getElementById("sortdsc");

let places = document.querySelector(".Places");

let bookingItem = JSON.parse(localStorage.getItem("booking-item")) || []

let logo = document.getElementById("left_nav");

logo.addEventListener("click",()=>{
  window.location.href = "index.html";
})
let images1 = [
    "https://www.thomascook.in/images/home-page-banners/2023/mar/Vietnam-Banner-1920x545.jpg",
    "https://resources.thomascook.in/images/holidays/PKG011248/photos/MaldivesNautica1500.jpg",
    "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://wallpapercave.com/dwp1x/wp4088743.jpg",
    "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://resources.thomascook.in/images/holidays/PKG010445/photos/Gangehi_1500.jpg",
    ]
    
let count1 = 0
setInterval(() => {
    slideImg1.src = images1[count1]
    count1++
    if(count1==images1.length){
        count1 = 0;
    }
}, 2000)

let travelData = []
fetchData()

function fetchData(){
  let loading = document.createElement("img");
  loading.id = "Loading";
  loading.src = "https://myraviprint.xyz/assets/image/loader.gif";
  container.append(loading);

  fetch("https://projectnewapi.onrender.com/lucknow")
  .then(res => res.json())
  .then((data)=>{
    console.log(data)
    container.removeChild(loading);
    travelData = data;
    appendData(data);
    createList(data)
  })
  .catch((error)=>{
    console.log(error)
    container.removeChild(loading);
  })
}

function appendData(data){
  container.innerHTML="";
  places.innerHTML = "";

  let cardlist = document.createElement("div");
  cardlist.className = "card-list";

  data.forEach((item) => {
    let card =  createCard(item);
    cardlist.append(card)
    places.append(createList(item))
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

  let centerDiv = document.createElement("div");
  centerDiv.className = "center-div";

  let h3 = document.createElement("h4");
  h3.className = "card-name";
  h3.textContent = item.name;

  let p1 = document.createElement("p");
  p1.className = "card-rating" ;
  p1.textContent = `Customers Rating : ${item.rating} ⭐`;

  let p2 = document.createElement("p");
  p2.className = "card-detail" ;
  p2.textContent = item.detail;

  let p3 = document.createElement("p");
  p3.className = "card-price" ;
  p3.textContent = `$ ${item.price} / Person`;
  p3.style.fontWeight = "bold"

  let p4 = document.createElement("p");
  p4.textContent = `${Math.floor(item.name.length / 5)}Days/${Math.floor(item.name.length / 5) -1} Nights`
  p4.style.color = 'gray'

  let btn = document.createElement("button");
  btn.setAttribute("data-id",item.id);
  btn.className = "card-button" ;
  btn.textContent = "Proceed";

  // let id = item.id
  btn.addEventListener("click",()=>{
    bookingItem.pop();
    bookingItem.push({...item,quantity:1})
    localStorage.setItem("booking-item",JSON.stringify(bookingItem))

    window.location.href = "payment.html";
  })
  
  extraBox = document.createElement("div");
  extraBox.id = "extraBox"

  centerDiv.append(h3,p2,p4)
  bodyDiv.append(p1,p3,btn);
  extraBox.append(imgDiv,centerDiv)

  card.append(extraBox,bodyDiv);

  return card;
}

function createList(item){
  // let h2 = document.createElement("h2");
  let list = document.createElement("li");
  list.textContent = item.name;
  
  return list
}


// var video = document.getElementById("video");
//     video.addEventListener('canplaythrough', function() {
//         video.play();
//     });

sortAtoZBtn.addEventListener("click",function(){
  let ascData = travelData.sort((a,b)=>{
    return a.price-b.price
  })
  appendData(ascData);
})

sortZtoABtn.addEventListener("click",function(){
  let desData = travelData.sort((a,b)=>{
    return b.price-a.price
  })
  appendData(desData);
})

sortAsc.addEventListener("click",function(){
  let ascData = travelData.sort((a,b)=>{
    return a.rating-b.rating
  })
  appendData(ascData);
})

sortDsc.addEventListener("click",function(){
  let desData = travelData.sort((a,b)=>{
    return b.rating-a.rating
  })
  appendData(desData);
})