const firebaseConfig = {
    apiKey: "AIzaSyBghkbqSL1svx7FVzD081oUFuH5CpXqqxw",
    authDomain: "c-94-5c916.firebaseapp.com",
    databaseURL:"https://c-94-5c916-default-rtdb.firebaseio.com/",
    projectId: "c-94-5c916",
    storageBucket: "c-94-5c916.appspot.com",
    messagingSenderId: "757093827727",
    appId: "1:757093827727:web:4dd26959afa86fa9561cfa"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "bem vindo (a)" + userName + "!";

function addRoom() {

roomName = document.getElementById ("roomName").value;
firebase.database().ref("/").child(roomName).update({
purpose : "adicionar nome de sala "    
});

localStorage.setItem("roomName",roomName);

window.location = "KwitterPage.html";

}

function getdata(){firebase.database().ref("/").on('value', function(snapshot) {

document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childsnapshot){
childkey = childsnapshot.key;
roomNames = childkey
console.log("nome da sala -" + roomNames );
row = "<div class='room' id="+ roomNames+"onclick='redirectToRoomName(this.id)'># "+ roomNames+"</div><hr>";
document.getElementById("output").innerHTML= row;    


});
});
}

getdata();



function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("roomName",name);
window.location = "kwitterPage.html";
}

function logout(){
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location= "index.html";
}

function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(roomName).push({
name:userName,
message :msg,
like:0
});
document.getElementById("msg").value="";


}





