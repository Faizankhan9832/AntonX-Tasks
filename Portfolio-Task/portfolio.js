let themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
   function toggleTheme() {
   document.body.classList.toggle("dark-mode");
   console.log("Theme toggled");
   }
   toggleTheme();
})

let form = document.getElementById("contactForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(event){
        name = name.value;
        email = email.value;
        message = message.value;
     
        function checkform(){
            if(name == "" || email == "" || message == ""){
                alert("Please fill in all fields");
                event.preventDefault();
            }
            else{
                    console.log("Form submitted" +form);
                    console.log("Name: " + name);
                    console.log("Email: " + email);
                    console.log("Message: " + message);
                }
        }
        checkform();

})