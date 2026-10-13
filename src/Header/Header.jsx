
import "./Header.css"
import {Link} from "react-router-dom"
function Header() {

    return (

        <>
            <div className="container">
  
       
                <div className="Header">
                    <h1>Vardhman Mahaveer Open University (VMOU)</h1>
                    <h2>वर्धमान महावीर खुला विश्वविद्यालय</h2>
                    <h3>State Open University,Govt. Of Rajasthan</h3>
                    <h2>Establish in 1987 Recognized by UGC,& DEB</h2>
                </div>
                     

            </div>
            <div className="Login">
     <Link  id ="l" to="/Login">Login</Link>
     <Link id ="l1" to="/Register">Register</Link>

            </div>
        </>
    )
}
export default Header