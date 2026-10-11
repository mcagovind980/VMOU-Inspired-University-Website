import Fdata from "./Admission.js"
import "../../css/Admission.css"
function Footer() {
    return (

        <>
            <div className="Footer1">

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