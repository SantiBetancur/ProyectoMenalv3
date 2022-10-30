        export var userArrays=[];
        export var PasswordChanges=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

  

        export function register(){
            

            var user = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (user == ""){
                alert("user required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(userArrays.indexOf(user) == -1){
                userArrays.push(user);
                PasswordChanges.push(password);

                alert(user + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(user + " is already register.");
                return ;
            }
        }
        export function login(){
            
            var user = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = userArrays.indexOf(user);

            if(userArrays.indexOf(user) == -1){
                if (user == ""){
                    alert("user required.");
                    return ;
                }
                alert("user does not exist.");
                return ;
            }
            else if(PasswordChanges[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(user + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
