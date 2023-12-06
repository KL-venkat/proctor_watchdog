import React, { useState } from "react";

function CandidateInfo() {
    const[upload, setUpload] = useState('')
    return(
        <div>
        <h1 className="upload">Upload Resume</h1>
        <p>Student details form</p>
        </div>
    )
}
export default CandidateInfo;