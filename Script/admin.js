const lucknowapi = "https://projectnewapi.onrender.com/lucknow";
const dubaiapi = "https://projectnewapi.onrender.com/dubai";

let container = document.getElementById("right");
let imgis = document.getElementById("imgis");
imgis.addEventListener("click",function(){
    window.location.href = "./index.html";
})

// For search functionality id here************
let search_select = document.getElementById("search_select");
let searching = document.getElementById("searching");
let search = document.getElementById("search");

// For adding new place in API id here**********
let addtext = document.getElementById("addtext");

let url = document.getElementById("url");
let addimg = document.getElementById("addimg");
let addname = document.getElementById("addname");
let addprice = document.getElementById("addprice");
let addrating = document.getElementById("addrating");
let addbutton = document.getElementById("addbutton");

//For updating Lucknow Place id here*********
let lucktext = document.getElementById("lucktext");

let luckid = document.getElementById("luckid");
let luckimg = document.getElementById("luckimg");
let luckname = document.getElementById("luckname");
let luckprice = document.getElementById("luckprice");
let luckrating = document.getElementById("luckrating");
let luckupdate = document.getElementById("luckupdate");

//For Updating Dubai Place id here***********
let dubtext = document.getElementById("dubtext");

let dubid = document.getElementById("dubid");
let dubimg = document.getElementById("dubimg");
let dubname = document.getElementById("dubname");
let dubprice = document.getElementById("dubprice");
let dubrating = document.getElementById("dubrating");
let dubupdate = document.getElementById("dubupdate");

//For Sorting based on Price**********
let lowtohigh = document.getElementById("lowbtn");
let hightolow = document.getElementById("highbtn");

//For Fetching lucknow and dubai data**********
let luckdata = document.getElementById("luckdata");
let dubdata = document.getElementById("dubdata");

//****************************************************
let empdata = [];


fetchdata();



function fetchdata() {
    fetch(lucknowapi)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
            empdata = data;

function fetchdata(){
    let loadingImg = document.createElement("img");
    loadingImg.src = "https://myraviprint.xyz/assets/image/loader.gif";
    loadingImg.id = "loading";
    container.append(loadingImg);


    fetch(lucknowapi)
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        empdata = data;
        container.removeChild(loadingImg);


            appenddata(data)


        }).catch(function(error) {
            console.log(error);
        })
    }).catch(function(error){
        console.log(error);
        container.removeChild(loadingImg);
    })
}

function appenddata(element) {
    container.innerHTML = "";

    element.forEach(element => {
        let card = createcard(element);

        container.append(card);
    });
}



function createcard(ele) {

    let div = document.createElement("div");
    div.id = "box";

    let imgdiv = document.createElement("div");
    imgdiv.id = "card-img";

    let img = document.createElement("img");
    img.src = ele.image;

    imgdiv.append(img);

    let cardbody = document.createElement("div");
    cardbody.id = "card-body";

    let h3 = document.createElement("h3");
    h3.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = `$${ele.price}/Person`;

    let rating = document.createElement("p");
    rating.innerText = `${ele.rating}⭐`;

    let edit = document.createElement("button");
    edit.id = "edit";
    edit.innerText = "Edit";

    edit.addEventListener("click", function() {
        luckid.value = ele.id;
        luckimg.value = ele.image;
        luckname.value = ele.name;
        luckprice.value = ele.price;
        luckrating.value = ele.rating;
    })

    let del = document.createElement("button");
    del.id = "delete";
    del.innerText = "Delete";

    del.addEventListener("click", function() {
        deleting(ele.id);
    })

    cardbody.append(h3, price, rating, edit, del);

    div.append(imgdiv, cardbody);

    return div;
}

function deleting(id) {
    fetch(`${lucknowapi}/${id}`, {
        method: "DELETE"

    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        fetchdata();

    }).catch(function(error) {
        console.log(error);
    })
}

search.addEventListener("click", function() {
    if (search_select.value === "https://projectnewapi.onrender.com/lucknow") {
        fetch(`${search_select.value}?name_like=${searching.value}`, {
            method: "GET"

        }).then(function(res) {
            return res.json();
        }).then(function(data) {
            appenddata(data);

        }).catch(function(error) {
            console.log(error);
        })
    } else if (search_select.value === "https://projectnewapi.onrender.com/dubai") {
        fetch(`${search_select.value}?name_like=${searching.value}`, {
            method: "GET"

        }).then(function(res) {
            return res.json();
        }).then(function(data) {
            appendubai(data);

        }).catch(function(error) {
            console.log(error);
        })
    } else {
        fetchdata();
    }
})

addbutton.addEventListener("click", function() {
    if (url.value === "https://projectnewapi.onrender.com/lucknow") {

        fetch(url.value, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    image: addimg.value,
                    name: addname.value,
                    price: addprice.value,
                    rating: addrating.value
                })
            })
            .then(function(res) {

                return res.json();
            })
            .then(function(data) {

                fetchdata();
                url.value = "";
                addimg.value = "";
                addname.value = "";
                addprice.value = "";
                addrating.value = "";
                addtext.innerText = "😊Added Successfully!!";

                setTimeout(() => {
                    addtext.innerText = "";
                }, 3000);
            })
            .catch(function(error) {
                console.log(error);
            })

    } else if (url.value === "https://projectnewapi.onrender.com/dubai") {
        //dubai data show instant

        fetch(url.value, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    image: addimg.value,
                    name: addname.value,
                    price: addprice.value,
                    rating: addrating.value
                })
            })
            .then(function(res) {

                return res.json();
            })
            .then(function(data) {

                dubupdating();
                url.value = "";
                addimg.value = "";
                addname.value = "";
                addprice.value = "";
                addrating.value = "";
                addtext.innerText = "😊Added Successfully!!";

                setTimeout(() => {
                    addtext.innerText = "";
                }, 3000);


            })
            .catch(function(error) {
                console.log(error);
            })
    } else {
        addtext.innerText = "Please Select Anyone API server";
        addtext.style.color = "red";

        setTimeout(() => {
            addtext.innerText = "";
        }, 3000);
    }
});

luckupdate.addEventListener("click", function() {
    fetch(`${lucknowapi}/${luckid.value}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: luckimg.value,
            name: luckname.value,
            price: luckprice.value,
            rating: luckrating.value
        })
    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        fetchdata();

        luckid.value = "";
        luckimg.value = "";
        luckname.value = "";
        luckprice.value = "";
        luckrating.value = "";
        lucktext.innerText = "😊Updated Successfully!!";

        setTimeout(() => {
            lucktext.innerText = "";
        }, 3000);

    }).catch(function(error) {
        console.log(error);;
    })
})

dubupdate.addEventListener("click", function() {
    fetch(`${dubaiapi}/${dubid.value}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: dubimg.value,
            name: dubname.value,
            price: dubprice.value,
            rating: dubrating.value
        })
    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        dubupdating();

        dubid.value = "";
        dubimg.value = "";
        dubname.value = "";
        dubprice.value = "";
        dubrating.value = "";
        dubtext.innerText = "😊Updated Successfully!!";

        setTimeout(() => {
            dubtext.innerText = "";
        }, 3000);

    }).catch(function(error) {
        console.log(error);;
    })
})

lowtohigh.addEventListener("click", function() {
    let sorting = empdata.sort(function(a, b) {
        return a.price - b.price;
    })
    appenddata(sorting)
})

hightolow.addEventListener("click", function() {
    let sorting = empdata.sort(function(a, b) {
        return b.price - a.price;
    })
    appenddata(sorting)
})

luckdata.addEventListener("click", function() {
    fetchdata();
})

dubdata.addEventListener("click", function() {
    dubupdating();
})

function dubupdating() {
    fetch(dubaiapi)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
            appendubai(data);

        }).catch(function(error) {
            console.log(error);
        })
}

function appendubai(element) {
    container.innerHTML = "";

    element.forEach(element => {
        let card = createdubai(element);

        container.append(card);
    });
}



function createdubai(ele) {

    let div = document.createElement("div");
    div.id = "box";

    let imgdiv = document.createElement("div");
    imgdiv.id = "card-img";

    let img = document.createElement("img");
    img.src = ele.image;

    imgdiv.append(img);

    let cardbody = document.createElement("div");
    cardbody.id = "card-body";

    let h3 = document.createElement("h3");
    h3.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = `$${ele.price}/Person`;

    let rating = document.createElement("p");
    rating.innerText = `${ele.rating}⭐`;

    let edit = document.createElement("button");
    edit.id = "edit";
    edit.innerText = "Edit";

    edit.addEventListener("click", function() {
        dubid.value = ele.id;
        dubimg.value = ele.image;
        dubname.value = ele.name;
        dubprice.value = ele.price;
        dubrating.value = ele.rating;
    })

    let del = document.createElement("button");
    del.id = "delete";
    del.innerText = "Delete";

    del.addEventListener("click", function() {
        deleted(ele.id);
    })

    cardbody.append(h3, price, rating, edit, del);

    div.append(imgdiv, cardbody);

    return div;
}

function deleted(id) {
    fetch(`${dubaiapi}/${id}`, {
        method: "DELETE"

    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        dubupdating();

    }).catch(function(error) {
        console.log(error);
    })
}