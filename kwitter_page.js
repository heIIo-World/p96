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
//YOUR FIREBASE LINKS

window.onload = function WindowLoad(event) {
    username = localStorage.getItem("username");
    console.log(username);
    document.getElementById("pageusernamelabel").innerHTML = "username - " + username;
   
    pageRoomName = localStorage.getItem("enterroomname");
    document.getElementById("kwitterPageTitle").innerHTML = "- " + pageRoomName +" - kwitter rooms -";
    
    document.getElementById("pageHeader").innerHTML = pageRoomName;
    
    room_name = pageRoomName;
}

function logout() {
  window.location = "index.html";
}

function send() {
message = document.getElementById("pageTypeMessage").value;
firebase.database().ref(room_name).push({
        name:username,
        message:message,
        like:0
});
document.getElementById("pageTypeMessage").value="";
}