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
let password = document.getElementById("userpassword");
let cretext = document.getElementById("cretext");
let form = document.getElementById("createform");

let signupdata = JSON.parse(localStorage.getItem("signup")) || [];

// checking(signupdata)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userdata = {
        Name: Name.value,
        email: email.value,
        password: password.value
    }
    signupdata.push(userdata);
    localStorage.setItem("signup", JSON.stringify(signupdata));
    cretext.innerText = "Signup Successfull✅"

    setTimeout(() => {
        cretext.innerText = ""
    }, 2000);

    form.reset();

});

let loginmail = document.getElementById("loginemail");
let loginpass = document.getElementById("loginpass");
let loginbtn = document.getElementById("signin");
let logtext = document.getElementById("logtext");


loginbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checking()) {
        
        logtext.innerText = "Login Successfull✅"
        logtext.style.color = "green";
        form.reset();
        
        setTimeout(() => {
        logtext.innerText = ""
        window.location.href = "./index.html"
    }, 2000);
    } else {

        logtext.innerText = "Login Unsuccessfull❌"
        logtext.style.color = "red";
        
        setTimeout(() => {
        logtext.innerText = ""
    }, 2000);
    }

})

function checking() {
    let flag = false;
    signupdata.forEach(element => {
        if (element.email === loginmail.value && element.password === loginpass.value) {
            flag=true;
        }

    });

    return flag;

}