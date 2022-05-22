const form = document.querySelector("#registration");

form.addEventListener("submit" (event) => {
    event.preventDefault();

    const userId = form.elements["userId"].value;
    const name = form.elements["name"].value;
    const designaton = form.elements["designation"].value;
    const email = form.elements["email"].value;
    localStorage.setItem("userId");
    localStorage.setItem("name");
    localStorage.setItem("designation");
    localStorage.setItem("email");
})

function registration() {

    var userId = document.getElementById("t1").value;
    var name = document.getElementById("t2").value;
    var designation = document.getElementById("t3").value;
    var email = document.getElementById("t4").value;


    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (userId == '') {
        alert('Please enter your userId');
    } else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    } else if (name == '') {
        alert('Please enter your user name');
    } else if (designation == '') {
        alert('Please enter the user designation.');
    } else if (!letters.test(uname)) {
        alert('designation field required only alphabet characters');
    } else if (email == '') {
        alert('Please enter email');
    } else if (!filter.test(email)) {
        alert('Invalid email');
    }
}

function clearFunc() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
}