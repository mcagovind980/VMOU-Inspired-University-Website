import { useState } from "react";
import "../css/Announce.css";
import Announcement from "../Data/Announcement.js";

function Announce() {
    const [search, setSearch] = useState("");

    const filteredAnnouncements = Announcement.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="Anncounce">
                <h1>~IMPORTANT ANNOUNCEMENT~</h1>

                <input
                    type="search"
                    className="announcement-search"
                    placeholder="Search announcements..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="item1">
                    {filteredAnnouncements.length > 0 ? (
                        filteredAnnouncements.map((item) => (
                            <div className="card" key={item.id}>
                                <a href={item.Link}>{item.title}</a>
                                <hr id="h" />
                            </div>
                        ))
                    ) : (
                        <p className="no-result">
                            No announcements found.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Announce;