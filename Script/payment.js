let left1 = document.querySelector(".left1");
let main= document.getElementById("main");
let box= document.getElementById("box");

let nameis = document.getElementById("name");
let con = document.getElementById("con");
let num = document.getElementById("num");
let gender = document.getElementById("gender");
let payment = document.getElementById("payment");
let submit = document.getElementById("submit");

let popup = document.getElementById("popup");
let ok = document.querySelector(".ok");

let bookingItem = JSON.parse(localStorage.getItem("booking-item")) || [];

Display(bookingItem);

function Display(data){
    left1.innerHTML = "";

    if(data.length===0){
        let h2 = document.createElement("h2");
        h2.style.color = "red";
        h2.innerText = "Please Add Any Packages";        
        left1.append(h2);

    }else{
        data.forEach(element => {
            let imgdiv = document.createElement("div");
            imgdiv.id = "imgdiv";
    
            let img = document.createElement("img");
            img.src = element.image;
    
            imgdiv.append(img);
    
            let cardbody = document.createElement("div");
            cardbody.id = "cardbody";
    
            let h2 = document.createElement("h2");
            h2.innerText = element.name;
    
            let h3= document.createElement("h3");
            h3.innerText = `$${element.price}/Person`;
    
            let addbtn = document.createElement("button");
            addbtn.id = "add";
            addbtn.innerText = "+";
    
            addbtn.addEventListener("click",function(){
                element.quantity++;
                localStorage.setItem("booking-item", JSON.stringify(data));
                Display(data);
            })
    
            let quantity = document.createElement("span");
            quantity.innerText = `${element.quantity} Person`;
    
            let subbtn = document.createElement("button");
            subbtn.id = "sub";
            subbtn.innerText = "-";
    
            subbtn.addEventListener("click",function(){
                if(element.quantity>1){
                    element.quantity--;
                    localStorage.setItem("booking-item", JSON.stringify(data));
                    Display(data);
                }
            })
    
            let price = document.createElement("p");
            price.innerText = `Total price is $${element.price*element.quantity}`;
            price.style.fontWeight = "bold";
            price.style.color = "Blue";
    
            cardbody.append(h2,h3,addbtn,quantity,subbtn,price);
    
            left1.append(imgdiv,cardbody);
        });
    }
}

submit.addEventListener("click",function(){
    if(nameis.value.trim()==="" || con.value.trim()==="" || num.value.trim()==="" || gender.value.trim()==="" || payment.value.trim()===""){
        alert("Please Fill All Fields");
        return;

    }

    popup.style.filter = "blur(0)";
    main.style.filter = "blur(2px)";
    box.style.filter = "blur(2px)";
    popup.classList.add("open-popup");

    nameis.value = "";
    con.value = "";
    num.value = "";
    gender.value = "";
    payment.value = "";
    
})

ok.addEventListener("click",function(){
    popup.classList.remove("open-popup");
    main.style.filter = "blur(0)"
    box.style.filter = "blur(0)";

        setTimeout(() => {
            localStorage.removeItem("booking-item")
            window.location.href= "./details.html"
        }, 1000);
})