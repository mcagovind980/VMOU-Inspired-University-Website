// import Educational from "./EducationProgramme.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Educational.css"
function Education() {
    const [selected, setSelected] = useState("");
    const [result, setResult] = useState("");

    const navigate = useNavigate();

    function handleSubmit() {
        if (!selected) {
            setResult("Please select an education programme.");
            return;
        }

        navigate(selected);
    }

    function handleReset() {
        setSelected("");
        setResult("");
    }

    return (
        <div className="education">
            <h2>Education Programmes</h2>

            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="">Select Programme</option>
                <option value="/BachelerDegree">Bachelor Degree</option>
                <option value="master">Master Degree</option>
                <option value="diploma">Diploma</option>
                <option value="programme">Education Programme</option>
            </select>

            <button type="button" onClick={handleSubmit}>
                Go
            </button>

            <button type="button" onClick={handleReset}>
                Reset
            </button>

            {result && (
                <div className="education-result">
                    <h3>Selected Programme Details</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default Education;
