import { Component } from "react";
import CardDetailsComponent from "./CardDetailsComponent";
import '../styles/bollywood.css'
import axios from 'axios';

class Bollywood extends Component {

  state = {
    path: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/bollywood')
      .then((response) => {
        console.log(response.data[0].cardDetails.map((item)=>(item)));
        console.log(response.data[0].topPost.map((item)=>(item)));
        this.setState({
          path: response.data
        })
      })
      .catch((err) => {
        console.log(err);
        console.log("having error")
      });
  }
  render() {
    return (
      <>
          <div>
            <>
              {this.state.path.map((item) => (
                <CardDetailsComponent src={item} />
              ))}
            </>
          </div>
      </>
    )
  }
}
export default Bollywood