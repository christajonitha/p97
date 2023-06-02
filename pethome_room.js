const firebaseConfig = {
  apiKey: "AIzaSyApverKRAPW0u_JfsGQiiXI2bHohbSfeqM",
  authDomain: "kwitter-6a083.firebaseapp.com",
  databaseURL: "https://kwitter-6a083-default-rtdb.firebaseio.com",
  projectId: "kwitter-6a083",
  storageBucket: "kwitter-6a083.appspot.com",
  messagingSenderId: "128208927441",
  appId: "1:128208927441:web:9bfea9b5bf8f548cc023f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "pethome_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
    console.log("Room Name -" + Room_names) ;
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name" , name);
 window.location = "pethome_page.html"; 
}
function logout(name)
{
 localStorage.removeItem("user_name");
 localStorage.setItem("room_name" , name)
    window.location = "pethome_page.html"

}

