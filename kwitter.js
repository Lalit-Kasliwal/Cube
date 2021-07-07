/*function addUser() {

  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}*/

var attempt = 3;

function validate() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "cube.education.com" && password == "cube123$") {
    alert("Login successfully");
    window.location = "kwitter_room.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

function valo() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("forgotpassword,username.html");
}