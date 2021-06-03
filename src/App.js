import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent';
import MainHeaderComponent from './Components/MainHeaderComponent';
import Bollywood from './Components/Bollywood';
import './App.css'
import Header from './Components/header';
const App = () => {
  return(
    <>
    <BrowserRouter>
        <Switch>
          <div class="App-Container"> 
            <Route path="/" component={HeaderComponent} exact />
            <Route path="/home" component={HeaderComponent} exact />
            <Route path="/technology" component={Header} exact />
            <Route path="/hollywood" component={HeaderComponent} exact />
            <Route path="/fitness" component={HeaderComponent} exact />
            <Route path="/food" component={HeaderComponent} exact />
            <Route path="/bollywood" component={MainHeaderComponent} exact />
            <Route path="/bollywood" component={Bollywood} exact />
          </div> 
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;