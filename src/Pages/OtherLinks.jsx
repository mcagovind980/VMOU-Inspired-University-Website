import Other from "../Data/OtherLinks"
import "../css/OtherLinks.css"
function OhterLinks() {
    return (
        <>
            <div className="other">
                <h1>~OTHER LINKS~</h1>

                <div className="items">
                    {Other.map((item) =>
                        <div key={item.id} className="card">
                            <a href={item.Link} >{item.title}</a>

                        </div>

                    )}
                </div>
            </div>
        </>
    )
}
export default OhterLinks