import '../styles/header.css'
import ArticleMainContent from './ArticleMainContent'
const Header = () => {
    return(
      <>
        <div className="top-heading">
            <div><img src='./images/blog-image.PNG' alt="" /></div>
            <button>Get started</button>
        </div>
        <ArticleMainContent />
      </>
    );
  };
  export default  Header 