let form = document.getElementById("adminlogin");
let adminemail = document.getElementById("username");
let adminpass = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (adminemail.value === "ganesh@travelbuddy.com" && adminpass.value === "123") {
        alert("login Successful")
        window.location.href = "admin.html"
    } else {
        alert("Wrong Crendentials")
    }
    adminemail.value = "";
    adminpass.value = "";

})