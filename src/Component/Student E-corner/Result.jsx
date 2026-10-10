import Result from "./Result.js"
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
      <th>PROGRAMME</th>
      <th>PROGRAMME CODE</th>
      <th>DATE OF DECLARATION</th>
      <th>EXAM SESSION</th>
      </tr>
        </thead>
<tbody>
    {Result.map((data)=>
<tr key={data.NO}>
<td >{data.NO}</td>
<td>{data.PROGRAMME}</td>
<td>{data.PROGRAMMECODE}</td>
<td>{data.DATEOFDECLARATION}</td>
<td>{data.EXAMSESSION}</td>

    </tr>
)}
</tbody>
        </table>
        
        </>
    )
}

export default Department