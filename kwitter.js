
function addUser() {

  userName = document.getElementById("userName").value;//pega o nome no html

  localStorage.setItem("userName", userName);//armazena
  
    window.location = "kwitterRoom.html";//muda de página
}

