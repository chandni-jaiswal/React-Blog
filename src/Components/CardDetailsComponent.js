import { Component } from "react";
import '../styles/bollywood.css'

class CardDetailsComponent extends Component {
    render(props) {
        console.log(this.props)
        return (
            <>
                <div style={{ display: "flex",justifyContent:"space-between", paddingTop: "10px", paddingBottom: "10px" }}>
                    <div>
                        <p>{this.props.src.cardDetails.map((item) => (
                            <>
                                <div style={{ display: "flex",width:"1000px"}}>
                                 <img src={item.imgSrc} alt="" width="250px" height="auto"></img>
                                    <div style={{ width: "300px", marginLeft: "20px" }}>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <p><span style={{ fontWeight: "bolder" }}>{item.smallText1}</span>{item.smallText2}</p>
                                    </div>
                                </div>
                                <hr></hr>
                            </>))}
                        </p> 
                    </div>
                    <div>
                            <>
                                <div>
                                    <img src={this.props.src.topPost1[0].imgSrc1} alt="" width="370px" height="260px"></img>
                                    <div style={{ width: "350px", marginLeft: "20px" }}>
                                        <div style={{ display: "flex", marginBottom:"-20px" }}>
                                            <h3>{this.props.src.topPost1[0].title1}
                                            <span style={{ fontWeight: "bolder", fontSize:"40px"}}>{this.props.src.topPost1[0].number1}</span></h3>
                                        </div>
                                        <p><span style={{ fontWeight: "bolder" }}>{this.props.src.topPost1[0].smallText11}</span>{this.props.src.topPost1[0].smallText21}</p>
                                    </div>
                                    <hr></hr>
                                </div>
                            </>
                        <p>{this.props.src.topPost.map((item) => (
                            <>
                                <div style={{ display: "flex"}}>
                                    <img src={item.imgSrc1} alt="" width="150px" height="130px"></img>
                                    <div style={{ width: "200px", marginLeft: "20px" }}>
                                        <div style={{ display: "flex" ,marginBottom:"-40px"}}>
                                            <h3>{item.title1}</h3>
                                            <p style={{ fontWeight: "bolder", fontSize:"40px"}}>{item.number1}</p>
                                        </div>
                                        <p><span style={{ fontWeight: "bolder" }}>{item.smallText11}</span>{item.smallText21}</p>
                                    </div>
                                  
                                </div>
                            </>))}
                        </p>
                        <div className="advertisement">
                        <img src={this.props.src.advertisement[0].imgSrc2} alt="" width="380px" height="740px"></img>
                                    
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default CardDetailsComponent