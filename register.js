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