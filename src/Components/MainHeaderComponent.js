import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/mainHeaderComponent.css'
function MainHeaderComponent(){
    const [isMobile,setIsMobile] = useState(false);
    return(
        <>
           <div style={{textAlign:"center"}}><img src='./images/blog-image.PNG' alt="" /></div>
            <div className="header-grid">
                <div className={isMobile ? "nav-links-mobile" : "nav-links"}
                     onClick={()=>setIsMobile(false)}>
                    <NavLink to="/home" className="home">Home</NavLink>
                    <NavLink to="/bollywood" className="bollywood">BollyWood</NavLink>
                    <NavLink to="/technology" className="technology">Technology</NavLink>
                    <NavLink to="/hollywood" className="hollywood">HollyWood</NavLink>
                    <NavLink to="/fitness" className="fitness">Fitness</NavLink>
                    <NavLink to="/food" className="food">Food</NavLink>
                </div>
                <button className="mobile-menu-icon"
                onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>
            </div>
            <hr style={{color:"grey"}}></hr>
        </>
    )
}
export default MainHeaderComponent