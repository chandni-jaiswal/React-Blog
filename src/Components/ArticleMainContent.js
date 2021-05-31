import ArticleContent from './ArticleContent';
function ArticleMainContent(){
    return(
        <>  
            <div style={{width:"30%",position:"fixed",top:"100px",left:"150px"}}>
                <img src="./images/stickyImage.PNG"></img>
            </div>
            <div style={{width:"100%",marginLeft:"300px"}}>
                <div style={{width:"40%"}}>
                    <ArticleContent />
                </div>
                <div style={{width:"30%"}}>
                </div>
            </div>  
        </>
    )
}
export default ArticleMainContent