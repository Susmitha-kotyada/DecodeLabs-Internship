const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        if (data.success) {
            localStorage.setItem("adminToken", data.token);
            localStorage.setItem("adminUsername", data.username);
            alert("Login Successful");
            window.location.href = "messages.html";
        }
        else {
            alert(data.message);
        }
    }

    catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
});