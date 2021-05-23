import {Route} from 'react-router-dom'
import Header from './Components/HeaderComponent';
import Footer from './Components/BlogFooter';
import ArticleContent from './Components/ArticleContent';
import ArticleComponent from './Components/ArticleComponent';
import Recommendation from './Components/RecommendationComponent';
import Card from './Components/CardComponent';
const App = () => {
  return(
    <>
        <Route path="/content" component={ArticleContent} exact />
        <Route path="/" component={Header} exact />
        <Route path="/footer" component={Footer} exact />
        <Route path="/article" component={ArticleComponent} exact />
        <Route path="/recommendation" component={Recommendation} exact />
        <Card />
    </>
  );
};
export default App;