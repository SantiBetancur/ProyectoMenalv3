import React from 'react'
import { Buttons } from './Buttons'


export const ResultadosTestAns = () => {
    
    // Variables lectura de localStorage
    
    var p0_test1 = localStorage.getItem("optp0_test1")
    var p1_test1 = localStorage.getItem("optp1_test1")
    var p2_test1 = localStorage.getItem("optp2_test1")
    var p3_test1 = localStorage.getItem("optp3_test1")
    var p4_test1 = localStorage.getItem("optp4_test1")
    var p5_test1 = localStorage.getItem("optp5_test1")
    var p6_test1 = localStorage.getItem("optp6_test1")
    var p7_test1 = localStorage.getItem("optp7_test1")
    var p8_test1 = localStorage.getItem("optp8_test1")
    var p9_test1 = localStorage.getItem("optp9_test1")
    var contador1 = 0;
    var recomendacion = ""

    const contador = () =>{
        switch(p0_test1){
            case "Ningundia":
                contador1 +=1;
                break
            case "Variosdias" :
                contador1 +=2;
                break
            case "Masdelamitaddelosdias":
                contador1 +=3;
                break
            case "Casitodoslosdias":
                contador1 +=4;
                break          
        }

        switch(p1_test1){
            case "Ningundia":
                contador1 +=1;
                break
            case "Variosdias" :
                contador1 +=2;
                break
            case "Masdelamitaddelosdias":
                contador1 +=3;
                break
            case "Casitodoslosdias":
                contador1 +=4;
                break          
        }

        switch(p2_test1){
            case "Ningundia":
                contador1 +=1;
                break
            case "Variosdias" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }

        switch(p3_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }

        switch(p4_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }

        switch(p5_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }

        switch(p6_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }

        switch(p7_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }
        
        switch(p8_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }
        
        switch(p9_test1){
            case "Nunca":
                contador1 +=1;
                break
            case "Casinunca" :
                contador1 +=2;
                break
            case "Devezencuando":
                contador1 +=3;
                break
            case "Amenudo":
                contador1 +=4;
                break
            case "Muyamenudo":
                contador1 +=5;
                break     
        }


    if(contador1>0 && contador1<=10){
        recomendacion="Tu puntaje está dentro de los limites normales. Aunque consideramos que estás bien, no pases por alto los habitos saludables que recomiendan especialistas en salud mental para que nunca decaigas. Visita Alcemos la mano y conoce todos estos habitos: ";

    }else if(contador1>9 && contador1<=25){
        recomendacion="Tu puntaje es aceptable. Te recomendamos visitar la página que brinda la universidad para que te informes acerca de cualquier problemática o situación que te llegue a afectar a nivel emocional. Y no dudes en pedir una cita de valoración:  ";

    }else if(contador1>25){

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
                <span>{contador1}</span>
            </p>
            <p className='text2'>
                {localStorage.getItem('name')}, estas son tus recomendaciones:
                <br/>
                <div className='recomend'>
                    {recomendacion}<a href='https://www.eafit.edu.co/bienestar-universitario/servicio-medico-seguridad-salud-en-el-trabajo/saludmental/Paginas/necesitas-ayuda.aspx'>Página de Ayuda EAFIT</a>
                </div>
            </p>



        </section>
    </div>
  )
}
