function typePassword(){
    do {
     password = prompt("Please enter your password with more than 4 characters:");
    }   while (password.length < 5);

    window.alert("Password entered: " + password);
}

function signIn() {
    const username = document.getElementById("UserName").value;
    const password = document.getElementById("PassWord").value;
    if (password.length < 5) {
        document.getElementById("feedback").innerHTML = "<p class='text-danger'>Password must be more than 4 characters.</p>";
        return;
    }
    if (username === "JKMM" && password === "titantvman") {
        document.getElementById("feedback").innerHTML = "<p class='text-success'>Login successful!</p>";
    } else {
        document.getElementById("feedback").innerHTML = "<p class='text-danger'>Invalid credentials.</p>";
    }
}