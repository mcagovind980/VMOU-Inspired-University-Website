



import { Link } from "react-router-dom"
import "./Navigation.css"
function Navigation() {
    return (
        <>
            <div className="container1">
                <div className="navigation">
                    <Link to="/">HOME</Link>
                    <div className="dropdown">

                        <Link to="/University">UNIVERSITY</Link>
                        <div className="menu">

                            <Link to="/AboutUniversity" >About University</Link>
                            <Link to="/Departments">Departments</Link>
                            <Link to="/Governance">Governance</Link>


                        </div>
                    </div>
                    <div className="dropdown">

                        <Link to="/Student">STUDENT E-CORNER</Link>
                        <div className="menu">

                            <Link to="/AdmissionAnnouncement" >Admission Announcement</Link>
                            <Link to="/AdmissionCorner">Admission Corner</Link>
                            <Link to="/BooksSlm">BooksSlm</Link>
                        </div>
                    </div>

                    <div className="dropdown">

                        <Link to="/School" >SCHOOL</Link>
                        <div className="menu">
                            <Link to="./SchoolOfCommerce">SchoolOf Commerce</Link>
                            <Link to="./SchoolOfEducation">SchoolOf Education</Link>
                            <Link to="./SchoolOfCommerce">SchoolOf Commerce</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/Regional" >REGIONAL CENTERS</Link>
                        <div className="menu">

                            <Link to="/Ajmer" >Ajmer</Link>
                            <Link to="/Bikaner" >Bikaner</Link>
                            <Link to="/Kota" >Kota</Link>
                            <Link to="/Udaipur" >Udaipur</Link>

                        </div>
                    </div>
                    <div className="dropdown">

                        <Link to="/Programes" >PROGRAMES</Link>
                        <div className="menu">
                            <Link to="/BachelerDegree ">Bacheler Degree</Link>
                            <Link to="/Deploma ">Deploma</Link>
                            <Link to="/EducationProgramme">Education Programme</Link>
                            <Link to="/MasterDegree">Master Degree</Link>

                        </div>
                    </div>

                    <div className="dropdown">

                        <Link to="/Notices" >NOTICES</Link>
                        <div className="menu">
                            <Link to="/Admission" >Admission</Link>
                            <Link to="/Exam" >Exam</Link>

                        </div>
                    </div>




                    <div className="dropdown">

                        <Link to="/Contact" >CONTACT</Link>
                        <div className="menu">
                            <Link to="/Departments" >Department</Link>
                            <Link to="/HelpDesk" >HelpDesk</Link>

                        </div>
                    </div>




                    <div className="dropdown">

                        <Link to="/Faqs" >FAQS</Link>
                        <div className="menu">

                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
export default Navigation