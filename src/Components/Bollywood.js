import { Component } from "react";
import cardDetails from './../cardDetails.json';
import CardDetailsComponent from "./CardDetailsComponent";
import '../styles/bollywood.css'
class Bollywood extends Component{
    state = {
        path: cardDetails
    }
    render(){
        return(
            <>
            
              <div className="main-container">
                <div>
                <h2 class="text1">Bollywood</h2>
                    <div class="content">
                        {this.state.path.map((item)=>(
                        <CardDetailsComponent src={item}/>
                        ))}
                    </div>
                </div> 
                <div>
                <h2 className="text1">Top Posts</h2>
                 <div class="top-post" style={{marginLeft:"20px"}}>
                    <img src="./images/cloudPost.PNG" alt="" width="300px" height="250px">
                    </img>
                    <div style={{width:"100%",display:"flex"}}>
                    <div>
                      <h3>Catch waves with an adventure guide</h3>
                      <p className="travel-date"><span style={{fontWeight:"bolder"}}>Travel</span>/ August 21 2017</p>
                    </div>
                    <div class="number">
                       1
                     </div>
                  </div>
                  <hr></hr>
                  <div style={{width:"100%",display:"flex"}}>
                    <div>
                      <img src="./images/catch-wave.jpg" alt="" width="100px" height="80px"></img>
                    </div>
                    <div style={{marginTop:"-20px",marginLeft:"10px",height:"80px"}}>
                      <h3>Catch waves with adventure guide</h3>
                      <p className="travel-date"><span style={{fontWeight:"bolder"}}>Travel</span>/ August 21 2017</p>
                     </div>
                     <div class="number">
                       2
                     </div>
                  </div>
                  <hr></hr>
                  <div style={{width:"100%",display:"flex"}}>
                    <div>
                      <img src="./images/catch-wave.jpg" alt="" width="100px" height="80px"></img>
                    </div>
                    <div style={{marginTop:"-20px",marginLeft:"10px"}}>
                      <h3>Catch waves with adventure guide</h3>
                      <p className="travel-date"><span style={{fontWeight:"bolder"}}>Travel</span>/ August 21 2017</p>
                     </div>
                     <div class="number">
                       3
                     </div>
                  </div>
                  <hr></hr>
                  <div style={{width:"100%",display:"flex"}}>
                    <div>
                      <img src="./images/catch-wave.jpg"  alt="" width="100px" height="80px"></img>
                    </div>
                    <div style={{marginTop:"-20px",marginLeft:"10px"}}>
                      <h3>Catch waves with adventure guide</h3>
                      <p className="travel-date"><span style={{fontWeight:"bolder"}}>Travel</span>/ August 21 2017</p>
                    </div>
                    <div class="number">
                       4
                     </div>
                    </div>
                   <div class="image-grid">
                        <p class="adds">Advertisement</p>
                   </div>
                </div>
              </div>
            </div>
               
        </>
        )
    }
}
export default Bollywood