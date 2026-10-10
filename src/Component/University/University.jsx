import AboutUniversity from "./AboutUniversity.jsx"
import Departments from "./Departments.jsx"
import Governance from "./Governance.jsx"
function University()
{
    return(
        <>
        <div className="Uni">
          <div className="Hover1">
<AboutUniversity/>
<Departments/>
<Governance/>
          </div>
          </div>
        </>
    )
}
export default University