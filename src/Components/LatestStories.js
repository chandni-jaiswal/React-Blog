import '../styles/stories.css'
const LatestStories = () => {
    return(
      <>
      <div className="storycontainer">
        <div>
            <h2 className="text">Latest Stories</h2>
        </div>
        <hr style={{marginBottom:"2%"}}></hr>
        <div className="card-container">
            <div className="card1">
                    <h3 style={{fontSize:"1.5em"}}>Catch waves with an adventure guide</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date"><span style={{fontWeight:"bold"}}>TECH </span>/ Today AT 11:54</p>
            </div>
            <div className="border"></div>
            <div className="card2">
                    <h3 style={{fontSize:"1.5em"}}>Catch waves with an adventure guide</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date"><span style={{fontWeight:"bold"}}>TECH </span>/ Today AT 11:54</p>
            </div>
            <div className="border"></div>
            <div className="card3">
                    <h3 style={{fontSize:"1.5em"}}>Catch waves with an adventure guide</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date"><span style={{fontWeight:"bold"}}>TECH </span>/ Today AT 11:54</p>
            </div>
        </div> 
        </div>
      </>
    );
  };
  export default  LatestStories 