import { Component } from "react";

class CardDetailsComponent extends Component{
    render(props){
        console.log(this.props)
        return(
            <>
                <div style={{display:"flex",paddingTop:"10px",paddingBottom:"10px"}}>
                    <img src={this.props.src.imgSrc} alt="" width="250px" height="auto"></img>
                    <div style={{width:"200px",marginLeft:"20px"}}>
                     <h3>{this.props.src.title}</h3>
                     <p>{this.props.src.content}</p>
                     <p><span style={{fontWeight:"bolder"}}>{this.props.src.smallText1}</span>{this.props.src.smallText2}</p>
                    </div>
                </div>
                <hr></hr>
            </>
        )
    }
}
export default CardDetailsComponent