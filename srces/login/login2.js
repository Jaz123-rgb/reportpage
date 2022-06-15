function login(){
  var name_user, password;
  // Get the value of the input field with id="numb"
   name_user = document.getElementById("name_form").value; 
   password = document.getElementById("pass_form").value;
  // If x is Not a Number or less than one or greater than 10

  if (name_user == "Roberto" && password == 2431) {
    window.location ="srces/reportes_page/indexrep.html";
  } else {
    window.location ="src/main-page/index.html";
  }
}



/* 




! Alejandro (Administrador)
! 2435

? Roberto   (Usuario especial)
? 2431 
 
 */