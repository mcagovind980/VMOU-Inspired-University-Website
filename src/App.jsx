import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Navigation from "./Header/Navigation.jsx";
import Pagination from "./Pages/Pagination.jsx";
import Announcement from "./Pages/Announcement.jsx";
import OtherLinks from "./Pages/OtherLinks.jsx";
import Home from "./Pages/Home.jsx";
import Departments from "../src/Component/University/Departments.jsx";
import AboutUniversity from "../src/Component/University/AboutUniversity.jsx";
import AdmissionAnnouncement from "../src/Component/Student E-corner/AdmissionAnnouncement.jsx";
import SchoolOfEducation from "../src/Component/School/SchoolOfEducation.jsx";
import SchoolOfCommerce from "../src/Component/School/SchoolOfCommerce.jsx";
import SchoolOfScience from "../src/Component/School/SchoolOfScience.jsx";
import Ajmer from "./Component/Regional Center/Ajmer.jsx";
import Bikaner from "./Component/Regional Center/Bikaner.jsx";
import Kota from "./Component/Regional Center/Kota.jsx";
import Udaipur from "./Component/Regional Center/Udaipur.jsx";

import BachelerDegree from "../src/Component/Programes/BachelerDegree.jsx";
import EducationProgramme from "../src/Component/Programes/EducationProgramme.jsx";
import MasterDegree from "../src/Component/Programes/MasterDegree.jsx";
import Deploma from "../src/Component/Programes/Deploma.jsx";

import Exam from "../src/Component/Notices/Exam.jsx";
import Admission from "../src/Component/Notices/Admission.jsx";

import HelpDesk from "../src/Component/Contact/HelpDesk.jsx";

import Footer from "./Footer/Footer.jsx"
import OneView from "./Online Services/OneView.jsx"

import BooksSlm from "./Component/Student E-corner/BooksSlm.jsx"
import AdmissionCorner from "./Footer/AdmissionCorner.jsx"
import Result from "./Component/Student E-corner/Result.jsx";

import VideoLectures from "./Online Services/VideoLectures.jsx";
import ServicesCard from "./Online Services/ServicesCard.jsx";
import Online from "./Online Services/Online.jsx";
import Servicecardslid from "./Online Services/Servicecardslid.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";


function Vmou() {

  return (
    <>
      <div className="app-layout">

        <main className="main-content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Header" element={<Header />} />

            <Route path="/Pagination" element={<Pagination />} />
            <Route path="/Announcement" element={<Announcement />} />
            <Route path="/OtherLinks" element={<OtherLinks />} />

            <Route path="/Departments" element={<Departments />} />
            <Route path="/AboutUniversity" element={<AboutUniversity />} />

            <Route path="/AdmissionAnnouncement" element={<AdmissionAnnouncement />} />

            <Route path="/SchoolOfEducation" element={<SchoolOfEducation />} />
            <Route path="/SchoolOfCommerce" element={<SchoolOfCommerce />} />
            <Route path="/SchoolOfScience" element={<SchoolOfScience />} />


            <Route path="/Ajmer" element={<Ajmer />} />
            <Route path="/Bikaner" element={<Bikaner />} />
            <Route path="/Kota" element={<Kota />} />
            <Route path="/Udaipur" element={<Udaipur />} />

            <Route path="/BachelerDegree" element={<BachelerDegree />} />
            <Route path="/EducationProgramme" element={<EducationProgramme />} />
            <Route path="/MasterDegree" element={<MasterDegree />} />
            <Route path="/Deploma" element={<Deploma />} />

            <Route path="/Exam" element={<Exam />} />
            <Route path="/Admission" element={<Admission />} />

            <Route path="/HelpDesk" element={<HelpDesk />} />
            
            <Route path="/OneView" element={<OneView />} />

            <Route path="/BooksSlm" element={<BooksSlm/>} />
            <Route path="/AdmissionCorner" element={<AdmissionCorner/>} />
            <Route path="/AdmissionCorner" element={<AdmissionCorner/>} />

            <Route path="/Result" element={<Result/>} />

            <Route path="/VideoLectures" element={<VideoLectures/>} />

            <Route path="/ServicesCard" element={<ServicesCard/>} />
            <Route path="/Online" element={<Online/>} />


            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Navigation" element={<Navigation/>} />
            <Route path="/Servicecardslid" element={<Servicecardslid/>} />



          </Routes>
        </main>


      </div>

    </>

  )
}
export default Vmou