import Depart from "./Department.js"
function Department()
{

    return(
        <>
        <table>
        <thead>
            <tr>
            <th>

SL.NO.
            </th>
      <th>DEPARTMENT/CENTRE/CELL/UNIT</th>
      <th>STAFF</th>
      </tr>
        </thead>
<tbody>
    {Depart.map((data)=>
<tr key={data.NO}>
<td >{data.NO}</td>
<td>{data.Department}</td>
<td><a href={data.Staff}>View Detail</a></td>

    </tr>
)}
</tbody>
        </table>
        
        </>
    )
}

export default Department