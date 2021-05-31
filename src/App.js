import {Route} from 'react-router-dom'
import Header from './Components/HeaderComponent';
import Footer from './Components/BlogFooter';
import LatestStories from './Components/LatestStories';
import ArticleMainContent from './Components/ArticleMainContent';
import header from './Components/header';
import ArticleComponent from './Components/ArticleComponent';
import Recommendation from './Components/RecommendationComponent';
import Card from './Components/CardComponent';
import './App.css'
const App = () => {
  return(
    <>
        <div style={{marginRight:"10%",marginLeft:"10%"}}>
        <Route path="/" component={Header} exact />
        <Route path="/" component={Card} exact /> 
        <Route path="/" component={ArticleComponent} exact />        
        <Route path="/" component={LatestStories} exact />
        <Route path="/" component={header} exact />
        <Route path="/" component={ArticleMainContent} exact />
        <Route path="/" component={Recommendation} exact />
        <Route path="/footer" component={Footer} exact />
        
        </div>
    </>
  );
};
export default App;