import { re } from 'mathjs';
import React,{useState} from 'react'
import { Buttons } from './Buttons'




export function Login(){

  const [accseso,setAcceso]=useState("f");


  var input_user;
  var input_pass;
  var user_DB;
  var pass_DB;
  var access = null;


  var access_db = localStorage.getItem("access");
    console.log("Login acces_db : "+access_db+" data: "+input_pass);

  const formhandleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    console.log(data)
    //Input del Loggin
    input_user = data.get("username");
    input_pass = data.get("password");
    localStorage.setItem('name', input_user)
      
    //Leyendo LocalStorage
    user_DB = localStorage.getItem("input_register_user");
    pass_DB = localStorage.getItem("input_register_pass");
    if(input_pass === pass_DB && input_user === user_DB){
        access = "t";
    }else{
      access = "f";
    }
    localStorage.setItem("access", access);
    setAcceso(access_db);
  
  } 



    const redirect = () =>{
     
      console.log("hook Access: "+accseso)
      if (access_db == "t") {
      window.location.href = '/'; 
      }
    
     
}
    return(
      <div>
      <section className='min-header-2'>
         <img src={require(`../img/logo.png`)}/>
         <p className='p'>   Ingresa a tu cuenta</p>
         <Buttons color='button-1' text='INICIO' route = '/'/>
      </section> 
     <div className="login-box" id="login">
     <form onSubmit={formhandleLogin}>
       
       <label htmlFor="username" className='class'>Nombre</label>
       <input type="text" id="se" name='username'  placeholder="Ingresa tu nombre de usuario"/>
       
       <label htmlFor="password">ID</label>
       <input type="password" id="sp" name = 'password' placeholder="Ingresa tu ID"/>
       
          <input type="submit"  value="Ingresar" onClick={window.onload= () =>{redirect()}}/>
       
     
     
       <a href="/Register/">¿No tienes cuenta? Crea una!</a>
     </form>
   </div>
  </div> 

    )
  }


 
  


