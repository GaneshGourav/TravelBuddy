const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});




let Name = document.getElementById("username")
let email = document.getElementById("useremail");
let password = document.getElementById("userpassword")
let form = document.getElementById("createform");

let signupdata = JSON.parse(localStorage.getItem("signup")) || [];

checking(signupdata)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userdata = {
        Name: Name.value,
        email: email.value,
        password: password.value
    }
    signupdata.push(userdata);
    localStorage.setItem("signup", JSON.stringify(signupdata));

    console.log(userdata);
    Name.value = "";
    email.value = "";
    password.value = "";

});

let loginmail = document.getElementById("loginemail");
let loginpass = document.getElementById("loginpass");
let loginbtn = document.getElementById("signin");
loginbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checking()) {

        alert("login successful")
    } else {
        alert("login failed")

    }




})





function checking(signupdata) {
    // let signupdata = localStorage.getItem("signup") || [];

    signupdata.forEach(element => {
        // if (element.email === loginmail.value && element.password === loginpass.value) {
        //     return true
        // }
        console.log(element)

    });

    // return false

}