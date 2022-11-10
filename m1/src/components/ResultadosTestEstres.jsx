import React from 'react'
import { Buttons } from './Buttons'


export const ResultadosTestEstres = () => {


    var p0_test2 = localStorage.getItem("optp0_test2")
    var p1_test2 = localStorage.getItem("optp1_test2")
    var p2_test2 = localStorage.getItem("optp2_test2")
    var p3_test2 = localStorage.getItem("optp3_test2")
    var p4_test2 = localStorage.getItem("optp4_test2")
    var p5_test2 = localStorage.getItem("optp5_test2")
    var p6_test2 = localStorage.getItem("optp6_test2")
    var p7_test2 = localStorage.getItem("optp7_test2")
    var p8_test2 = localStorage.getItem("optp8_test2")
    var p9_test2 = localStorage.getItem("optp9_test2")
    var recomendacion="";
    var contador2 = 0;

    const contador = () =>{
        switch(p0_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;
            case "Muyamenudo":
                contador2 +=5;         
        }
        switch(p1_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;    
            case "Muyamenudo":
                    contador2 +=5;          
        }
        switch(p2_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;          
            case "Muyamenudo":
                contador2 +=5;    
        }
        switch(p3_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;     
            case "Muyamenudo":
                contador2 +=5;         
        }
        switch(p4_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;          
            case "Muyamenudo":
                contador2 +=5;    
        }
        switch(p5_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;
            case "Muyamenudo":
                contador2 +=5;             
        }
        switch(p6_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4; 
            case "Muyamenudo":
                contador2 +=5;             
        }
        switch(p7_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4; 
            case "Muyamenudo":
                contador2 +=5;             
        }
        switch(p8_test2){
            case "Nunca":
                contador2 +=1;
                break
            case "Casinunca" :
                contador2 +=2;
                break
            case "Devezencuando":
                contador2 +=3;
                break
            case "Amenudo":
                contador2 +=4;          
            case "Muyamenudo":
                contador2 +=5;    
        }

        if(contador2>0 && contador2<=10){
            recomendacion="Tu puntaje está dentro de los limites normales. Aunque consideramos que estás bien, no pases por alto los habitos saludables que recomiendan especialistas en salud mental para que nunca decaigas. Visita Alcemos la mano y conoce todos estos habitos: ";
    
        }else if(contador2>9 && contador2<=25){
            recomendacion="Tu puntaje es aceptable. Te recomendamos visitar la página que brinda la universidad para que te informes acerca de cualquier problemática o situación que te llegue a afectar a nivel emocional. Y no dudes en pedir una cita de valoración:  ";
    
        }else if(contador2>25){
    
            recomendacion="Tu puntaje es alarmante, te recomendamos que te contactes con un especialista e inicies un proceso de psicológico. La universidad ofrece esto de manera gratuita. Sólo debes entrar al siguiente link y seguir los pasos: ";
        }
    
       
    }
    contador()

  return (
    <div>
        <section className='min-header-2'>
            <img src={require(`../img/logo.png`)}/>
            <p className='p'>Estos son tus resultados</p>
            <Buttons color='button-1' text='INICIO' route = '/'/>
        </section>
        <section className='sec-result'>
            <p className='text1'>
                PUNTAJE OBTENIDO
                <br/>
                <span>{contador2}</span>
            </p>
            <p className='text2'>
                {localStorage.getItem('name')}, estas son tus recomendaciones:
                <br/>
                <div className='recomend'>
                    {recomendacion} <a href='https://www.eafit.edu.co/bienestar-universitario/servicio-medico-seguridad-salud-en-el-trabajo/saludmental/Paginas/necesitas-ayuda.aspx'>Página de Ayuda EAFIT</a>
                </div>
            </p>



        </section>
    </div>
  )
}
