import ArticleContent from './ArticleContent';
import Recommendation from './RecommendationComponent';
import '../styles/articleMainContent.css'
function ArticleMainContent(){
    return(
        <>  
            <div class="social-img">
                <div><img src="./images/hands.png" alt=""></img>&nbsp;&nbsp;&nbsp;<span>9.3k</span></div>
                <div><img src="./images/share.png" alt=""></img>&nbsp;&nbsp;&nbsp;<span>Share this article</span></div>
            </div>
            <div class="Top-heading">
                <div class="heading2">
                    <ArticleContent />
                </div>
                <div class="empty-space">
                </div>
            </div>  
            <Recommendation />
        </>
    )
}
export default ArticleMainContent