import School from "./SchoolOfScience.js"
function Department() {

    return (
        <>
            <div className="School">
                <h1>~ SCHOOL OF SCIENCE & MANAGEMENT ~</h1>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>

                                    Employee Code
                                </th>
                                <th>NAME</th>
                                <th>Designation</th>
                                <th>	Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {School.map((data) =>
                                <tr key={data.EmployeeCode}>
                                    <td >{data.EmployeeCode}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Designation}</td>
                                    <td>{data.Mobile}</td>


                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Department