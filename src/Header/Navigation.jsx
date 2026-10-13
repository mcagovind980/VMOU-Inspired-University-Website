import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import Announcement from "../Data/Announcement.js";
import pages from "../Data/Navigation.js";

function Navigation() {
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState("");
    const navigate = useNavigate();

    const allItems = [...pages,...Announcement.map((item) => ({
            title: item.title,
            path: item.Link,
        })),
    ];

    const results = search.trim()
               ? allItems
              .filter((item) =>
                  item.title
                      ?.toLowerCase()
                      .includes(search.trim().toLowerCase())
              )
              .filter(
                  (item, index, arr) =>
                      arr.findIndex(
                          (x) =>
                              x.title === item.title &&
                              x.path === item.path
                      ) === index
              )
              .slice(0, 10)
        : [];

    function toggleMenu(name) {
        setOpenMenu((current) => (current === name ? "" : name));
    }

    function handleMenuClick(event, name) {
        // Desktop: follow the link normally.
        // Tablet/mobile: first tap opens the dropdown.
        if (window.matchMedia("(max-width: 992px)").matches) {
            event.preventDefault();
            toggleMenu(name);
        }
    }

    function closeMenu() {
        setOpenMenu("");
    }

    function openResult(path) {
        if (path) {
            navigate(path);
            setSearch("");
            closeMenu();
        }
    }

    return (
        <div className="container1">
            <nav className="navigation" aria-label="Main navigation">
                <Link to="/" onClick={closeMenu}>
                    HOME
                </Link>

                {/* UNIVERSITY */}
                <div
                    className={`dropdown ${
                        openMenu === "university" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/AboutUniversity"
                        aria-expanded={openMenu === "university"}
                        onClick={(e) =>
                            handleMenuClick(e, "university")
                        }
                    >
                        UNIVERSITY
                    </Link>

                    <div className="menu">
                        <Link to="/AboutUniversity" onClick={closeMenu}>
                            About University
                        </Link>
                        <Link to="/Departments" onClick={closeMenu}>
                            Departments
                        </Link>
                        <Link to="/Governance" onClick={closeMenu}>
                            Governance
                        </Link>
                    </div>
                </div>

                {/* STUDENT E-CORNER */}
                <div
                    className={`dropdown ${
                        openMenu === "student" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/AdmissionCorner"
                        aria-expanded={openMenu === "student"}
                        onClick={(e) => handleMenuClick(e, "student")}
                    >
                        STUDENT E-CORNER
                    </Link>

                    <div className="menu">
                        <Link to="/AdmissionAnnouncement" onClick={closeMenu}>
                            Admission Announcement
                        </Link>
                        <Link to="/ServicesCard" onClick={closeMenu}>
                            Services Card
                        </Link>
                        <Link to="/OneView" onClick={closeMenu}>
                            OneView
                        </Link>
                        <Link to="/AdmissionCorner" onClick={closeMenu}>
                            Admission Corner
                        </Link>
                        <Link to="/BooksSlm" onClick={closeMenu}>
                            Books SLM
                        </Link>
                        <Link to="/VideoLectures" onClick={closeMenu}>
                            Video Lectures
                        </Link>
                    </div>
                </div>

                {/* SCHOOL */}
                <div
                    className={`dropdown ${
                        openMenu === "school" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/SchoolOfCommerce"
                        aria-expanded={openMenu === "school"}
                        onClick={(e) => handleMenuClick(e, "school")}
                    >
                        SCHOOL
                    </Link>

                    <div className="menu">
                        <Link to="/SchoolOfCommerce" onClick={closeMenu}>
                            School of Commerce
                        </Link>
                        <Link to="/SchoolOfEducation" onClick={closeMenu}>
                            School of Education
                        </Link>
                        <Link to="/SchoolOfScience" onClick={closeMenu}>
                            School of Science
                        </Link>
                    </div>
                </div>

                {/* REGIONAL CENTERS */}
                <div
                    className={`dropdown ${
                        openMenu === "regional" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/Ajmer"
                        aria-expanded={openMenu === "regional"}
                        onClick={(e) => handleMenuClick(e, "regional")}
                    >
                        REGIONAL CENTERS
                    </Link>

                    <div className="menu">
                        <Link to="/Ajmer" onClick={closeMenu}>Ajmer</Link>
                        <Link to="/Bikaner" onClick={closeMenu}>Bikaner</Link>
                        <Link to="/Kota" onClick={closeMenu}>Kota</Link>
                        <Link to="/Udaipur" onClick={closeMenu}>Udaipur</Link>
                    </div>
                </div>

                {/* PROGRAMMES */}
                <div
                    className={`dropdown ${
                        openMenu === "programmes" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/EducationProgramme"
                        aria-expanded={openMenu === "programmes"}
                        onClick={(e) => handleMenuClick(e, "programmes")}
                    >
                        PROGRAMMES
                    </Link>

                    <div className="menu">
                        <Link to="/EducationProgramme" onClick={closeMenu}>
                            Education Programme
                        </Link>
                        <Link to="/BachelerDegree" onClick={closeMenu}>
                            Bachelor Degree
                        </Link>
                        <Link to="/Deploma" onClick={closeMenu}>
                            Diploma
                        </Link>
                        <Link to="/MasterDegree" onClick={closeMenu}>
                            Master Degree
                        </Link>
                    </div>
                </div>

                {/* NOTICES */}
                <div
                    className={`dropdown ${
                        openMenu === "notices" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/Admission"
                        aria-expanded={openMenu === "notices"}
                        onClick={(e) => handleMenuClick(e, "notices")}
                    >
                        NOTICES
                    </Link>

                    <div className="menu">
                        <Link to="/Admission" onClick={closeMenu}>
                            Admission
                        </Link>
                        <Link to="/Exam" onClick={closeMenu}>Exam</Link>
                        <Link to="/Result" onClick={closeMenu}>Result</Link>
                    </div>
                </div>

                {/* CONTACT */}
                <div
                    className={`dropdown ${
                        openMenu === "contact" ? "open" : ""
                    }`}
                >
                    <Link
                        to="/HelpDesk"
                        aria-expanded={openMenu === "contact"}
                        onClick={(e) => handleMenuClick(e, "contact")}
                    >
                        CONTACT
                    </Link>

                    <div className="menu">
                        <Link to="/Departments" onClick={closeMenu}>
                            Department
                        </Link>
                        <Link to="/HelpDesk" onClick={closeMenu}>
                            Help Desk
                        </Link>
                    </div>
                </div>

                {/* FAQS */}
                <div className="dropdown">
                    <Link to="/Faqs" onClick={closeMenu}>
                        FAQS
                    </Link>
                </div>

                {/* SEARCH */}
                <div className="nav-search">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (results.length > 0) {
                                openResult(results[0].path);
                            }
                        }}
                    >
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
                 



              

                     

            </nav>
        </div>
    );
}

export default Navigation;