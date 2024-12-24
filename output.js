const formData = JSON.parse(localStorage.getItem("formData")) || [];
const profileImageBase64 = localStorage.getItem("profileImage");

        let output="";

        formData.forEach(formData => {
            output = output+`
            
                <p><strong>Name:</strong> ${formData.Name}</p>
                <p><strong>Email:</strong> ${formData.Email}</p>
                <p><strong>Contact:</strong> ${formData.Contact}</p>
                <p><strong>Address:</strong> ${formData.Address}</p>
                <p><strong>Pincode:</strong> ${formData.Pin}</p>
                <p><strong>Objective:</strong> ${formData.Objective}</p>
                <p><strong>Organization Name:</strong> ${formData.organization}</p>
                <p><strong>Year of Experience:</strong> ${formData.yoe}</p>
                <p><strong>Skills:</strong> ${formData.Skills}</p>
                <p><strong>College Name:</strong> ${formData.College}</p>
                <p><strong>Course:</strong> ${formData.Course}</p>
                <p><strong>College CGPA:</strong> ${formData.Collegegpa}</p>
                <p><strong>School 12th:</strong> ${formData.School12th}</p>
                <p><strong>12th CGPA:</strong> ${formData.Cgpa12}</p>
                <p><strong>School 10th:</strong> ${formData.School10th}</p>
                <p><strong>10th CGPA:</strong> ${formData.Cgpa10}</p>
                <p><strong>Certificate Name:</strong> ${formData.Certificate}</p>
                <p><strong>Institute Name:</strong> ${formData.institute}</p>
                <p>------------------------------------------------------------</p>

            `;
            // document.getElementById("userData").innerHTML = output;
        });
                        
        document.getElementById("userData").innerHTML = output;
           

    if (profileImageBase64) {
    
    document.getElementById("profileImageDisplay").src = profileImageBase64;

   } else {
    document.getElementById("profileImageDisplay").alt = "No image uploaded.";
  }