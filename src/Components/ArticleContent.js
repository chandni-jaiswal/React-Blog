const ArticleContent = () => {
    return(
      <>
        <div className="">
          <h3>5 Ways to animate a React app.</h3>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
                <img src="./images/author-image.PNG" alt=""></img>
                <div style={{}}>
                  <p style={{fontWeight:"bold",marginBottom:"5%"}}>Dmitry Nazhenko</p>
                  <p className="travel-date">Aug 10-4 min read</p>
                </div>
            </div>
            <div style={{marginTop:"10px"}}>
            <img src="./images/social-image.PNG" width="100px" alt=""></img>
            </div>
          </div>
          <div>
            <img src="./images/react-blogimage.PNG" alt=""></img>
            <p>Animation in ReactJs app is a popular topic and there are many ways to create different types 
              of animations.Many developers create animation exclusively using css and adding classes to HTML
               tags. This is a great way and you should use it. If you want to create complex animations you 
               can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are 
               also a lot of libraries, components for creating animation in React.</p>
            <p>Let’s talk about them</p>
            <img src="./images/code-image.PNG" alt=""></img>
          </div>
          <div style={{display:"flex"}}>
            <button>React</button>
            <button style={{marginLeft:"10px"}}>Javascript</button>
            <button style={{marginLeft:"10px"}}>Animation</button>
          </div>
          <img src="./images/clap-image.PNG" alt=""></img>
          <div style={{display:"flex"}}>
                    <img src="./images/author-image.PNG" alt=""></img>
                    <div style={{paddingLeft:"2%"}}>
                        <p style={{fontWeight:"bold",marginBottom:"-37x"}}>Dmitry Nazhenko</p>
                        <p className="travel-date">Aug 10-4 min read</p>
                    </div>
                </div>
        </div>
      </>
    );
  };
  export default  ArticleContent 