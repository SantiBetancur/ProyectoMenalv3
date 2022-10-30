import React, { StrictMode } from 'react'
import { Buttons } from './Buttons'



export function Register(){
  
    return(
      <StrictMode>
       
      <div> 
      <section className='min-header-2'>
         <img src={require(`../img/logo.png`)}/>
         <p className='p'>¡Regístrate hoy grátis!</p>
         <Buttons color='button-1' text='INICIO' route = '/'/>
         
      </section>
     <div id="register" className="login-box">
       
     <h1>REGISTRO</h1>
     <form>
       
       <label htmlFor="username" className='class'>Crea un nombre de usuario</label>
       <input type="text" id="re"placeholder="Ejemplo: Miguel Salinas"/>
       <label htmlFor="password">Ingresa tu ID</label>
       <input type="password" id="rp" placeholder="Crea un ID (número de 8 caracteres)"/>
       <input type="password" id="rrp" placerholder="Confirma tu ID" />
       <input type="submit" value="Crear cuenta" onClick=''/>
      
       <a href="/Login/">¿Ya tienes cuenta? Ingresa aquí.</a>
     </form>
   </div>
  </div> 
  </StrictMode> 
  
    )
    
    
}
