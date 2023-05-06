let paymentdata = JSON.parse(localStorage.getItem("payment")) || [];

paymentdata.push({
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0a/15/13/e5/dubai-aquarium-underwater.jpg",
    name: "Dubai Aquarium",
    price: 880,
    quantity: 1
})

localStorage.setItem("payment",JSON.stringify(paymentdata));


