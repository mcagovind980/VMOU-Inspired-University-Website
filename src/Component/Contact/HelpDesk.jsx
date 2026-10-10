import Help from "./HelpDesk.js"
function Department() {

    return (
        <>
            <div className="School">
                <h1>~ VMOU Helpline (10:00 AM to 05:00 PM Working Days Only - Second Saturday Off)</h1>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Address Place</th>
                                <th>Contact</th>
                                <th>Email Id</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Help.map((data) =>
                                <tr key={data.EmployeeCode}>
                                    <td>{data.City}</td>
                                    <td>{data.AddressPlace}</td>
                                    <td>{data.Contact}</td>
                                    <td>{data.EmailId}</td>


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