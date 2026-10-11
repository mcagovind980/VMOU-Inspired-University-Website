import Fdata from "./AdmissionCorner.js"
import "../css/AdmissionCorner.css"
function Footer() {
    return (

        <>
            <div className="Footer">
                <div className="Admission">
                    {Fdata.map((item) =>

                        <div className="data" key={item.id}>
                            <a href={item.Link}>{item.tital}</a>

                        </div>
                    )}

                </div>
            </div>

        </>

    )
}
export default Footer