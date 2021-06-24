// import { Component } from "react";
// import '../styles/bollywood.css';
// import CardDetailsComponent from "./CardDetailsComponent";
// import axios from 'axios';

// class TopPost extends Component {
//   state = {
//     path1: []
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3001/topPost')
//       .then((response) => {
//         console.log(response.data);
//         this.setState({
//           path1: response.data
//         })
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log("having error")
//       });
//   }
//   render() {
//     return (
//       <>

//         <div className="main-container">
//           <div>
//             <h2 class="text1">Top Post</h2>
//             <div class="content">
//               {this.state.path1.map((item) => (
//                 <CardDetailsComponent src={item} />
//               ))}
//             </div>
//           </div>
//         </div>

//       </>
//     )
//   }
// }
// export default TopPost