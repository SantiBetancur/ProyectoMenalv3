import React from 'react'
import { Buttons } from './Buttons'
import { Link } from 'react-router-dom'

export const Testdepre = () => {

    function formhandleTest(event){
        event.preventDefault();
        const data = new FormData(event.target);
        localStorage.setItem("optp0_test3",data.get("optionp0"));
        localStorage.setItem("optp1_test3",data.get("optionp1"));
        localStorage.setItem("optp2_test3",data.get("optionp2"));
        localStorage.setItem("optp3_test3",data.get("optionp3"));
        localStorage.setItem("optp4_test3",data.get("optionp4"));
        localStorage.setItem("optp5_test3",data.get("optionp5"));
        localStorage.setItem("optp6_test3",data.get("optionp6"));
        localStorage.setItem("optp7_test3",data.get("optionp7"));
        localStorage.setItem("optp8_test3",data.get("optionp8"));
    
    }

    const redirect = () =>{
        window.location.href='/ResultadosTest03/'
    }
    
    
        return (
            <div>
            <section className='min-header-2'>
            <img src={require(`../img/logo.png`)}/>
            <p className='p'>TEST DE DEPRESIÓN</p>
            <Buttons color='button-1' text='INICIO' route = '/'/>
            </section>

        <form onSubmit={formhandleTest} className="container">

                <section className='section' id="p0">
                    <h3>¿Te has sentido cansado(a) o con poca energía?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p0.1" name="optionp0"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p0.2" name="optionp0"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p0.3" name="optionp0"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p0.4" name="optionp0"/> Casi todos los dias
                        </label>
                </section>
{/* los saltos de linea son la division estre cada pregunta  */}

                <section className='section' id="p1">
                    <h3>¿Has tenido dificultad para concentrarte en ciertas actividades, tales como leer el periódico o ver la televisión?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p1.1" name="optionp1"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p1.2" name="optionp1"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p1.3" name="optionp1"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p1.4" name="optionp1"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p2">
                    <h3>¿Te has sentido decaído(a), deprimido(a) o sin esperanzas?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p2.1" name="optionp2"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p2.2" name="optionp2"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p2.3" name="optionp2"/> Mas de la mitad de los dde los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p2.4" name="optionp2"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p3">
                    <h3>¿Has experimentado poco interés o placer en hacer cosas?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p3.1" name="optionp3"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p3.2" name="optionp3"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p3.3" name="optionp3"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p3.4" name="optionp3"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p4">
                    <h3>¿Has tenido dificultad para quedarte, permanecer dormido(a), o has dormido demasiado?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p4.1" name="optionp4"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p4.2" name="optionp4"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p4.3" name="optionp4"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p4.4" name="optionp4"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p5">
                    <h3>¿Has estado sin apetito o has comido en exceso?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p5.1" name="optionp5"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p5.2" name="optionp5"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p5.3" name="optionp5"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p5.4" name="optionp5"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p6">
                    <h3>¿Te has sentido mal contigo mismo(a), piensas que eres un fracaso, que has quedado mal contigo mismo(a) o con tu familia?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p6.1" name="optionp6"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p6.2" name="optionp6"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p6.3" name="optionp6"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p6.4" name="optionp6"/> Casi todos los dias 
                        </label>
                </section>

                <section className='section' id="p7">
                    <h3>¿Te has movido o hablado tan lento que otras personas podrían haberlo notado o, por el contrario, has estado tan inquieto(a) o agitado(a) que has estado moviéndote mucho más de lo normal?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p7.1" name="optionp7"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p7.2" name="optionp7"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p7.3" name="optionp7"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p7.4" name="optionp7"/> Casi todos los dias
                        </label>
                </section>

                <section className='section' id="p8">
                    <h3>Pensamientos de que estarías mejor muerto(a) o de lastimarte de alguna manera, ¿han pasado por tu mente?</h3>
                        <label>
                            <input type="radio" value="Ningundia" id="p8.1" name="optionp8"/> Ningun dia
                        </label>
                        <label>
                            <input type="radio" value="Variosdias" id="p8.2" name="optionp8"/> Varios dias
                        </label>
                        <label>
                            <input type="radio" value="Masdelamitaddelosdias" id="p8.3" name="optionp8"/> Mas de la mitad de los dias
                        </label>
                        <label>
                            <input type="radio" value="Casitodoslosdias" id="p8.4" name="optionp8"/> Casi todos los dias
                        </label>
                </section>
    
                <button type='submit' className='button' onClick={redirect}>Enviar</button>
    
        </form>
</div>    
  
  )
}

