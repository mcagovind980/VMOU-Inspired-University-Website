import School from "./MasterDegree.js"
function Department() {

    return (
        <>
            <div className="School">
                <h1>~Master Degree Programme ~</h1>
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
                                    <td><a href={data.PROGRAMMELINK}>{data.PROGRAMMETITLE}</a></td>
                                    <td>{data.MINDURATION}</td>
                                    <td>{data.MAX}</td>
                                    <td>{data.TeacherContact}</td>


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