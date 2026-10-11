import admi from "./AdmissionAnnouncement.js"
import "../../css/AdmissionAnnouncement.css"
function Ann()
{
return(
    <>
    <div className="Ann">
        <div className="Admi">
            <thead>
                <tr>
                    <th>
                    Admission | Important Notices
                </th>
                </tr>

            </thead>
            <tbody>
                {admi.map((data)=>
                <tr key={data.id}>
<td><a href={data.Link}>{data.title}</a></td>

                </tr>
                
                )}

            </tbody>
        </div>
    </div>

    </>
)

}
export default Ann