function viewPassword() {
   var x = document.getElementById("password");
   var xx = document.getElementById("confirm-password");
    if (x.type === "password" || xx.type === "password") 
    {
        x.type = "text";
        xx.type = "text";
    }
    else {
        x.type = "password";
        xx.type = "password";
    }

}
