import '../styles/card.css'
const Card = () => {
    return(
      <>
       <div>
       <div style={{marginTop:"5%"}}>
            <div>
                <h2 className="text">The Latest</h2>
            </div>
        </div>
        <div className="card-container" style={{display:"flex"}}>
        <div style={{width:"30%"}}>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%", justifyContent:"center",marginLeft:"10%"}}>
                    <h3 style={{fontSize:"27px"}}>Joshua Tree Overnight Adventure</h3> 
                    <p style={{textAlign:"justify"}}>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
            <div style={{width:"30%"}}>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%", justifyContent:"center",marginLeft:"10%"}}>
                    <h3 style={{fontSize:"27px"}}>Joshua Tree Overnight Adventure</h3> 
                    <p style={{textAlign:"justify"}}>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
            <div style={{width:"30%"}}>
                <div>
                    <img src="./images/TheLatest.PNG" alt="" width="300" height="200">
                    </img>
                </div>
                <div style={{width:"80%", justifyContent:"center",marginLeft:"10%"}}>
                    <h3 style={{fontSize:"27px"}}>Joshua Tree Overnight Adventure</h3> 
                    <p style={{textAlign:"justify"}}>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
            
        </div>
       </div>
      </>
    );
  };
  export default Card 