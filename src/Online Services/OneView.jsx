import "../css/OneView.css"

function OneView() {
    return (
        <>
            <div className="oneview-page">
                <div className="One">
                    <h3>ONE VIEW</h3>
                </div>
                <div className="view">
                    <p></p>
                    <ul type="Number">
                        <li>
                            विध्यार्थी अपने नाम या अपने स्कॉलर नंबर द्वारा अपनी प्रवेश स्थिति की जानकारी प्राप्त कर सकते है |</li>
                        <li> नाम द्वारा जानकारी प्राप्त करने के लिए विध्यार्थी Search Scholar No. By Name पर क्लिक कर अपना पूरा नाम टाइप करके सबमिट बटन दबाये |</li>
                        <li> विध्यार्थी नीचे प्राप्त सूची में अपना नाम चुने और स्कॉलर नंबर पर क्लिक कर सबमिट बटन दबाकर अपनी प्रवेश स्थिति की जानकारी प्राप्त कर सकते है |</li>
                        <li>अपने विषय से सम्बंधित विडियो व्याख्यान देखने के लिए vmouonline channel subscribe करें	</li>

                    </ul>
                </div>
                <div className="form">
                    <form>
                        <label>Enter Scholar No
                            <input type="text" />

                        </label>
                        <label>Date of Birth
                            <input type="date" />
                        </label>
                        <label>Language
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </label>
                        <label>
                            <input type="button" value="Submit" />
                            <button type="button" >Reset</button>  </label>
                        <p>Search Scholar No. By Name</p>
                        <p>Your IP:</p>
                    </form>

                </div>
            </div>






        </>



    )

}

export default OneView