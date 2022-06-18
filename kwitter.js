function add_user() {

    username = document.getElementById("user_name").value;


    localStorage.setItem("User name -", username);


    window.location = "kwitterroom.html"
}