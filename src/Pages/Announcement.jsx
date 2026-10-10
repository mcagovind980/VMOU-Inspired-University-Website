import "../css/Announce.css"
import Announcement from "../Data/Announcement.js"
function Announce() {

    return (
        <>

            <div className="Anncounce">
                <h1>~IMPORTANANT ANNOUNCEMENT~</h1><br />

                <div className="item1">
                    {Announcement.map((item) =>
                        <div className="card" key={item.id}>
                            <a href={item.Link}>{item.title}</a>
                            <hr id="h"></hr>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}
export default Announce