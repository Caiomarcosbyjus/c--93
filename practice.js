
//ADICIONE SEUS LINKS FIREBASE


// Your web app's Firebase configuration
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


function addUser(){

    userName= document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adding user"
    })

}