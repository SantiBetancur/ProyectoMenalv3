import React from 'react'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Login} from './components/Login'
import {Register}  from './components/Register'
import {TestAns} from './components/TestAns'
import {TestStress} from './components/TestStress'
import {Testdepre}  from './components/Testdepre'
import { NotLog } from './components/NotLog'
import { ResultadosTestDepre } from './components/ResultadosTestDepre'
import { ResultadosTestAns } from './components/ResultadosTestAns'
import { ResultadosTestEstres } from './components/ResultadosTestEstres'
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  render(){
    return(
      <BrowserRouter>
    <Switch>
      
      <Route exact path = "/Test01/" component={TestAns}/>
      <Route exact path = "/Test02/" component={TestStress}/>
      <Route exact path = "/Test03/" component={Testdepre}/>
      <Route exact path = "/Login/" component={Login}/>
      <Route exact path = "/Register/" component={Register}/>
      <Route exact path= "/NotFound/" component={NotLog}/>
      <Route exact path= "/Login/NotFound/" component={NotLog}/>
      <Route exact path= "/ResultadosTest03/" component={ResultadosTestDepre}/>
      <Route exact path= "/ResultadosTest02/" component={ResultadosTestEstres}/>
      <Route exact path= "/ResultadosTest01/" component={ResultadosTestAns}/>
      <Route exact path = "/" component={App} />
      
    </Switch>
     
    </BrowserRouter>
    )
  }
}

export default Main
