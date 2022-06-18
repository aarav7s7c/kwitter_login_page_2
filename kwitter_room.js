
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names) ;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


var firebaseConfig = {
      apiKey: "AIzaSyBMgePVzwAeZal39f-NbxrXrWcHuC0Q3nU",
      authDomain: "kwitterpro-89ee9.firebaseapp.com",
      projectId: "kwitterpro-89ee9",
      storageBucket: "kwitterpro-89ee9.appspot.com",
      messagingSenderId: "312886892964",
      appId: "1:312886892964:web:06b0010a82ce718ca10931",
      measurementId: "G-421JHGNJBP"
    };

function add_room()
{

      room_name = document.getElementById("room_name").value ;

      

      localStorage.setItem("room_name", room_name);

      window.location = "kwitterpage.html";

}

function redirectToRoomName(name)
{
console.log(name) ;
localStorage.setItem("room_name", name) ;
window.location = "kwitterpage.html" ;
}

function logout() 
{ 
localStorage.removeItem("User name -"); 
localStorage.removeItem("room_name"); 
window.location.replace("index.html"); 
}