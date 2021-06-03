import '../styles/cardContent.css'
const CardContent = () => {
    return(
      <>
        <div className="card-container">
            <div class="card-grid">
                <p>Also tagged Reactjs</p>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%"}}>
                    <h3 style={{fontSize:"1.5em"}}>Joshua Tree Overnight Adventure</h3>
                </div>
                <div style={{display:"flex"}}>
                    <img src="./images/author-image.PNG" alt=""></img>
                    <div style={{paddingLeft:"7%"}}>
                        <p style={{fontWeight:"bold",marginBottom:"-37x"}}>Dmitry Nazhenko</p>
                        <p className="travel-date">Aug 10-4 min read</p>
                    </div>
                </div>
            </div>
            <div class="card-grid">
            <p>Related reads</p>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%"}}>
                    <h3 style={{fontSize:"1.5em"}}>Joshua Tree Overnight Adventure</h3> 
                </div>
                <div style={{display:"flex"}}>
                    <img src="./images/author-image.PNG" alt=""></img>
                    <div style={{paddingLeft:"7%"}}>
                        <p style={{fontWeight:"bold",marginBottom:"-37x"}}>Dmitry Nazhenko</p>
                        <p className="travel-date">Aug 10-4 min read</p>
                    </div>
                </div>
            </div>
            <div class="card-grid">
                <p>Related reads</p>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%"}}>
                    <h3 style={{fontSize:"1.5em"}}>Joshua Tree Overnight Adventure</h3> 
                </div>
                <div style={{display:"flex"}}>
                    <img src="./images/author-image.PNG" alt=""></img>
                    <div style={{paddingLeft:"7%"}}>
                        <p style={{fontWeight:"bold"}}>Dmitry Nazhenko</p>
                        <p className="travel-date">Aug 10-4 min read</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
  export default  CardContent 