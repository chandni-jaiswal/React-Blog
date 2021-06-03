import '../styles/headerComponent.css'
import CardComponent from './CardComponent';
import ArticleComponent from './ArticleComponent';
import LatestStories from './LatestStories';
import MainHeaderComponent from './MainHeaderComponent';

const HeaderComponent = () => {
    return(
      <>
      <MainHeaderComponent />
        <div className="grid-container">
            <div className="grid-item1" style={{position:"relative"}}> 
                <img src="./images/mountain1.jpg" alt=""  width="100%" height="100%" />
                <div class="centered">
                    <p>Title of vertical gallery</p>
                    <p className="travel-date">Travel/ August 21 2017</p>
                </div>
            </div>
            <div className="grid-item2" style={{position:"relative"}}>
                <img src="./images/mountain2.jpg" alt="" width="100%" height="100%"/>
                <div class="centered1">
                    <p>The sound cloud <br></br>you loved is doomed</p>
                    <p className="travel-date">Travel/ August 21 2017</p>
                </div>
            </div>
            <div className="grid-item3" style={{position:"relative"}}>
                <img src="./images/mountain2.jpg" alt="" width="100%" height="100%"/>
                <div class="centered1">
                    <p>The sound cloud<br /> you loved is doomed</p>
                    <p className="travel-date">Travel/ August 21 2017</p>
                </div>
            </div> 
        </div>
        <CardComponent />
        <ArticleComponent />
        <LatestStories />
      </>
    );
  };
  export default HeaderComponent;