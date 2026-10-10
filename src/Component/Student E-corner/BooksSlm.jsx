import Book from "./BooksSlm.js"
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
      <th>COURSE NAME</th>
      <th>PROGRAMME</th>
      <th>SLM</th>
      <th>SUBJECT</th>
      </tr>
        </thead>
<tbody>
    {Book.map((data)=>
<tr key={data.NO}>
<td >{data.NO}</td>
<td>{data.COURSE}</td>
<td>{data.PROGRAMME}</td>
<td><a href={data.SLMLink}>{data.SlMTitle}</a></td>
<td>{data.SUBJECT}</td>

    </tr>
)}
</tbody>
        </table>
        
        </>
    )
}

export default Department