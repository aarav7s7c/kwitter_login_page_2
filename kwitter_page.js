function logout()
{
      localStorage.removeItem("User name -") ;
      localStorage.removeItem("room_name") ;
      window.location.replace = ("index.html");
}

function sent()
{
    msg = document.getElementById("massage").value ;
    firebaseConfig.database.ref(room_name).push({
        name: username,
        massage: msg,
        like:0
    });

}