import '../styles/header.css'
const Header = () => {
    return(
      <>
        <div>
            <div style={{textAlign:"center"}}><img src='./images/blog-image.PNG' alt="" /></div>
            <div style={{justifyContent:"space-evenly",margin:"20px",display:"flex"}}>
                <div>Home</div>
                <div>BollyWood</div>
                <div>Technology</div>
                <div>HollyWood</div>
                <div>Fitness</div>
                <div>Food</div>
            </div>
            <hr style={{color:"grey"}}></hr>
        </div>
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
                <div class="centered">
                    <p>The sound cloud you loved is doomed</p>
                    <p className="travel-date">Travel/ August 21 2017</p>
                </div>
            </div>
            <div className="grid-item3" style={{position:"relative"}}>
                <img src="./images/mountain2.jpg" alt="" width="100%" height="100%"/>
                <div class="centered">
                    <p>The sound cloud you loved is doomed</p>
                    <p className="travel-date">Travel/ August 21 2017</p>
                </div>
            </div> 
        </div>
      </>
    );
  };
  export default Header;