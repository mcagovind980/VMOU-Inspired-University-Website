import Exam from "./Exam.js"
function Department() {

    return (
        <>
            <div className="School">
                <h1>~ SCHOOL OF COMMERCE & MANAGEMENT ~</h1>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>

                                    Employee Code
                                </th>
                                <th>
                                    Exam | Important Notices</th>
                                <th>RC</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Exam.map((data) =>
                                <tr key={data.EmployeeCode}>
                                    <td><a href={data.Link}>{data.ExamImportant}</a></td>
                                    <td>{data.RC}</td>


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