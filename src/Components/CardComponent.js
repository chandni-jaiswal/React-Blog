import '../styles/card.css'
const Card = () => {
    return(
      <>
        <div style={{marginTop:"5%"}}>
            <div>
                <h2 className="text">The Latest</h2>
            </div>
        </div>
        <div className="card-container" style={{display:"flex"}}>
            <div style={{}}>
                <div>
                    <img src="./images/TheLatest.PNG" alt="">
                    </img>
                </div>
                <div>
                    <h3>Joshua Tree Overnight Adventure</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
            <div>
                <div>
                    <img src="./images/TheLatest.PNG" alt="">
                    </img>
                </div>
                <div>
                    <h3>Joshua Tree Overnight Adventure</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
            <div>
                <div>
                    <img src="./images/TheLatest.PNG" alt="">
                    </img>
                </div>
                <div>
                    <h3>Joshua Tree Overnight Adventure</h3> 
                    <p>Gujrat is underrated and it's a quite mystry to us why it is not known as a tourist destination.
                        It is a plathora of temples and places.</p>  
                    <p className="travel-date">Travel/ August 21 2017</p>  
                </div>
            </div>
        </div>
      </>
    );
  };
  export default Card 