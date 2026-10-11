import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import Announcement from "../Data/Announcement.js";
import pages from "../Data/Navigation.js"
function Navigation() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    const allItems = [
        ...pages,
        ...Announcement.map((item) => ({
            title: item.title,
            path: item.Link
        }))
    ];

    const results = search.trim()
        ? allItems.filter((item) =>
            item.title?.toLowerCase().includes(search.trim().toLowerCase())
        ).filter((item, index, arr) =>
            arr.findIndex((x) => x.title === item.title && x.path === item.path) === index
        ).slice(0, 10)
        : [];

    function openResult(path) {
        if (path) {
            navigate(path);
            setSearch("");
        }
    }

    return (
        <div className="container1">
            <div className="navigation">
                <Link to="/">HOME</Link>

                <div className="dropdown">
                    <Link to="/AboutUniversity">UNIVERSITY</Link>
                    <div className="menu">
                        <Link to="/AboutUniversity">About University</Link>
                        <Link to="/Departments">Departments</Link>
                        <Link to="/Governance">Governance</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/AdmissionCorner">STUDENT E-CORNER</Link>
                    <div className="menu">
                        <Link to="/AdmissionAnnouncement">Admission Announcement</Link>
                        <Link to="/ServicesCard">ServicesCard</Link>
                        <Link to="/OneView">OneView</Link>
                        <Link to="/AdmissionCorner">Admission Corner</Link>
                        <Link to="/BooksSlm">Books SLM</Link>
                        <Link to="/VideoLectures">Video Lectures</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/SchoolOfCommerce">SCHOOL</Link>
                    <div className="menu">
                        <Link to="/SchoolOfCommerce">School of Commerce</Link>
                        <Link to="/SchoolOfEducation">School of Education</Link>
                        <Link to="/SchoolOfScience">School of Science</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/Ajmer">REGIONAL CENTERS</Link>
                    <div className="menu">
                        <Link to="/Ajmer">Ajmer</Link>
                        <Link to="/Bikaner">Bikaner</Link>
                        <Link to="/Kota">Kota</Link>
                        <Link to="/Udaipur">Udaipur</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/EducationProgramme">PROGRAMMES</Link>
                    <div className="menu">
                        <Link to="/EducationProgramme">Education Programme</Link>
                        <Link to="/BachelerDegree">Bachelor Degree</Link>
                        <Link to="/Deploma">Diploma</Link>
                        <Link to="/MasterDegree">Master Degree</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/Admission">NOTICES</Link>
                    <div className="menu">
                        <Link to="/Admission">Admission</Link>
                        <Link to="/Exam">Exam</Link>
                        <Link to="/Result">Result</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/HelpDesk">CONTACT</Link>
                    <div className="menu">
                        <Link to="/Departments">Department</Link>
                        <Link to="/HelpDesk">Help Desk</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/Faqs">FAQS</Link>
                </div>

                <div className="nav-search">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (results.length > 0) openResult(results[0].path);
                    }}>
                        <input
                            type="search"
                            placeholder="Search website..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Search website"
                        />
                        {search && (
                            <button
                                type="button"
                                className="search-clear"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </form>

                    {search.trim() && (
                        <div className="search-results">
                            {results.length > 0 ? (
                                results.map((item, index) => (
                                    <button
                                        type="button"
                                        key={`${item.path}-${item.title}-${index}`}
                                        onClick={() => openResult(item.path)}
                                    >
                                         {item.title}
                                    </button>
                                ))
                            ) : (
                                <p>No matching results found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navigation;