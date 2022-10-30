import { Grid } from './components/Grid';
import './App.css';
import { Buttons } from './components/Buttons';
import { Featured } from './components/Featured';
import { Headers } from './components/Headers';
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    render() {
        return (
        <div className="App">
        <section className='min-header'>
        <img src={require(`./img/logo.png`)}/>
        <Buttons color='button-1' text='INICIO' route = '/'/>
        <Buttons color='button-1' text='REGISTRARSE' route = '/Register/'/>
        <Buttons color='button-2' text='RESULTADOS' route = '/Resultados/'/>
        <Buttons color='button-2' text='MI PERFIL' route = '/Login/'/>
     </section>
   
   
    
    <Headers type='header-1'>
    TEST DE VALORACIÓN VALIDADOS POR LA OMS  
    <Grid
    img01 = {require(`./img/enf1.jpg`)}
    img02 = {require(`./img/enf2.jpg`)}
    img03 = {require(`./img/enf3.jpg`)}
    img04 = {require(`./img/enf2.jpg`)}
    link1 = '/Test01/'
    link2 = '/Test02/'
    link3 = '/Test03/'
    testName1 = 'TEST DE ANSIEDAD'
    testName2 = 'TEST DE ESTRES'
    testName3 = 'TEST DE DEPRESIÓN'
    />
    </Headers>
    
    <Headers type='header-2'>CONOCE LOS MÉTODOS ALTERNATIVOS QUE TIENE EAFIT
    <Featured>
    <div className='slider'>
            <ul>
                <li>
                    <img src={require(`./img/sm1.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm2.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm3.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm4.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/conestudiantes.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/bl29.png`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/enf3.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/psicologia2.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/masestudiantes.jpg`)} alt=''/>
                </li>
            </ul>
        </div>
    </Featured>
    </Headers>
    <Headers type='header-1'>
        
            <Grid
            img01 = {require(`./img/psicologia2.jpg`)}
            img02 = {require(`./img/sm1.jpg`)}
            img03 = {require(`./img/bl29.png`)}
            link1 = '/'
            link2 = '/'
            link3 = ''
            testName1 = 'PROGRAMAR CITA CON ESPECIALISTA'
            testName2 = 'VISITAR LA PÁGINA DE AUTOAYUDA DE EAFIT'
            testName3 = '¿DONDE ENCONTRAR AYUDA?'
            />
            
    </Headers>
    <Headers type = 'footer'>
        <img src={require(`./img/Log-1-Ardilla.png`)}/>
        <p>Líneas de atención de EAFIT: 0000000</p>
        <p> Gracias por Visitar MeNal.</p>
    </Headers>
    
    </div>
        )
    }
    
}
export default App;

