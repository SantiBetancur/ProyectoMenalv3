import React from 'react'
import { Buttons } from './Buttons'
import { login } from './login';
import { useState } from 'react';

export function Login(){
  const [option, setOption] = useState("");
  console.log(option)
    return(
      <div>
      <section className='min-header-2'>
         <img src={require(`../img/logo.png`)}/>
         <p className='p'>   Ingresa a tu cuenta</p>
         <Buttons color='button-1' text='INICIO' route = '/'/>
      </section> 
     <div className="login-box" id="login">
     <h1>MI PERFIL</h1>
     <form>
       
       <label htmlFor="username" className='class'>Nombre</label>
       <input type="text" id="se" onChange={(e)=>setOption(e.target.value)} placeholder="Ingresa tu nombre de usuario"/>
       
       <label htmlFor="password">ID</label>
       <input type="password" id="sp" onChange={(e)=>setOption(e.target.value)} placeholder="Ingresa tu ID"/>
       <input type="submit"  onChange={(e)=>setOption(e.target.value)} value="Ingresar" />
     
       <a href="/Register/">¿No tienes cuenta? Crea una!</a>
     </form>
   </div>
  </div> 

    )
  }


 
  


