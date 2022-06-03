const firebaseConfig = {
  apiKey: "AIzaSyDhvi_WciTGneTvO1TGJPNslYRD4vrXBA4",
  authDomain: "kwitterproject-947ed.firebaseapp.com",
  databaseURL: "https://kwitterproject-947ed-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-947ed",
  storageBucket: "kwitterproject-947ed.appspot.com",
  messagingSenderId: "733326501225",
  appId: "1:733326501225:web:1ad146542e0b4e15ff89f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() {
  window.location = "index.html"
}

window.onload = function() {
    
 username = localStorage.getItem("username");
    document.getElementById("usernamelabel").innerHTML = "username - " + username;
}







function addRoom() {
    var strRoomName = document.getElementById("txtRoomName").value;
   localStorage.setItem("enterroomname", strRoomName);
    console.log(strRoomName);
    firebase.database().ref("/").child(strRoomName).update({purpose:"adding room name"
    });
    
    window.location = "kwitter_page.html"
}

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

//Start code
row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><br>"
                                             
                                             
//End code
});});}
getData();

function redirectToRoomName() {
    var strRoomName = document.getElementById("txtRoomName").textContent;
    console.log(strRoomName);
   localStorage.setItem("enterroomname", enterroomname);
    console.log(enterroomname);

     window.location = "kwitter_page.html";
}

function logout() 
{
    window.location = "index.html";
}