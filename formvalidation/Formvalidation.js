
function validation(event){
    event.preventDefault();
    console.log("function running");


const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const contact=document.getElementById("contact").value;
const address=document.getElementById("address").value;
const pin=document.getElementById("pin").value;
const objective=document.getElementById("objective").value;
const orgname=document.getElementById("orgname").value;
const yoe=document.getElementById("yoe").value;
const skills=document.getElementById("skills").value;
const collegeName=document.getElementById("collegeName").value;
const course=document.getElementById("course").value;
const collegeCgpa=document.getElementById("collegeCgpa").value;
const school12th=document.getElementById("school12th").value;
const cgpa12th=document.getElementById("cgpa12th").value;
const school10th=document.getElementById("school10th").value;
const cgpa10th=document.getElementById("cgpa10th").value;
const certname=document.getElementById("certname").value;
const inst=document.getElementById("inst").value;
const password=document.getElementById("password").value;
const cpassword=document.getElementById("cpassword").value;

const profileImage = document.getElementById("profileImage").files[0];




let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name cannot be blank";
        
        isValid = false;
    } else if (name.length >=20) {
        document.getElementById("nameError").innerText = "Name cannot be more than 20 characters";
       
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

        //email-validation
        const emailpattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            document.getElementById("emailError").innerText = "Email cannot be blank";
            isValid = false;
        } else if (!email.match(emailpattern)) {
            document.getElementById("emailError").innerText = "Invalid email format";
            isValid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        //contact validation
        if (contact === "") {
            document.getElementById("contactError").innerText = "Contact cannot be blank";
            isValid = false;
        } else if (contact.length<10|| contact.length>10) {
            document.getElementById("contactError").innerText = "Invalid contact no.";
            isValid = false;
        } else {
            document.getElementById("contactError").innerText = "";
        }

        //address validation
    if (address === "") {
        document.getElementById("addError").innerText = "address cannot be blank";
        
        isValid = false;
    } else if (address.length >=20) {
        document.getElementById("addError").innerText = "address cannot be more than 20 characters";
       
        isValid = false;
    } else {
        document.getElementById("addError").innerText = "";
    }

    //pin validation
   
    if (pin === "") {
        document.getElementById("pinError").innerText = "Pinnumber cannot be blank";
        isValid = false;
    } else if (pin.length!==6) {
        document.getElementById("pinError").innerText = "Invalid pin no.";
        isValid = false;
    } else {
        document.getElementById("pinError").innerText = "";
    }

    //Objective validation
    if (objective === "") {
        document.getElementById("objError").innerText = "objective cannot be blank";
        
        isValid = false;
    } else if (objective.length >=500) {
        document.getElementById("objError").innerText = "objective cannot be more than 500 characters";
       
        isValid = false;
    } else {
        document.getElementById("objError").innerText = "";
    }

    //organisation validation
   
    if (orgname === "") {
        document.getElementById("orgError").innerText = "Organization cannot be blank";
        
        isValid = false;
    } else if (orgname.length >=20) {
        document.getElementById("orgError").innerText = "organization name cannot be more than 20 characters";
       
        isValid = false;
    } else {
        document.getElementById("orgError").innerText = "";
    }

    //experience validation 
    if (yoe === "") {
        document.getElementById("yoeError").innerText = "experience cannot be blank";
        
        isValid = false;
    } else if (parseInt(yoe) >= 10) {
        document.getElementById("yoeError").innerText = " experience should be less than 10years";
       
        isValid = false;
    } else {
        document.getElementById("yoeError").innerText = "";
    }

    //skills validation 
    if (skills === "") {
        document.getElementById("skillError").innerText = "skills cannot be blank";
        
        isValid = false;
    } else if (skills.length >=100) {
        document.getElementById("skillError").innerText = "skills cannot be more than 100 characters";
       
        isValid = false;
    } else {
        document.getElementById("skillError").innerText = "";
    }

    //college validation

    if (collegeName === "") {
        document.getElementById("clgError").innerText = "CollegeName cannot be blank";
        
        isValid = false;
    } else if (collegeName.length >=20) {
        document.getElementById("clgError").innerText = "CollegeName cannot be more than 20 characters";
       
        isValid = false;
    } else {
        document.getElementById("clgError").innerText = "";
    }

    //courses validation 
    const Courses = ["B.Com", "B.Tech", "BCA", "B.Sc"];
    if (course === "") {
        document.getElementById("courseError").innerText = "Course name cannot be blank";
        isValid = false;
    } else if (!Courses.includes(course)) {
        document.getElementById("courseError").innerText = `Course name must be one of the following: ${Courses}`;
        isValid = false;
    } else {
        document.getElementById("courseError").innerText = ""; 
    }

    //cgpa validation 
    const cgpaPattern = /^([1-9](\.\d+)?|10(\.0+)?)$/;

        if (collegeCgpa === "") {
    document.getElementById("clgcgpaError").innerText = "CGPA cannot be blank";
    isValid = false;
    } else if (!cgpaPattern.test(collegeCgpa)) {
    document.getElementById("clgcgpaError").innerText = "CGPA must be a decimal number between 1 and 10";
    isValid = false;
} else {
    document.getElementById("clgcgpaError").innerText = ""; 
}
        //12th validation
        if (school12th === "") {
            document.getElementById("12thError").innerText = "School name cannot be blank";
            isValid = false;
        } 
        else {
            document.getElementById("12thError").innerText = ""; 
        }

        //12th cgpa
        const cgpa12 = /^([1-9](\.\d+)?|10(\.0+)?)$/;

        if (cgpa12th === "") {
    document.getElementById("cgpa12Error").innerText = "CGPA cannot be blank";
    isValid = false;
    } else if (!cgpa12.test(cgpa12th)) {
    document.getElementById("cgpa12Error").innerText = "CGPA must be a decimal number between 1 and 10";
    isValid = false;
} else {
    document.getElementById("cgpa12Error").innerText = "";
}

//10th validation
if (school10th === "") {
    document.getElementById("10thError").innerText = "10th School name cannot be blank";
    isValid = false;
} 
else {
    document.getElementById("10thError").innerText = ""; 
}

//10th cgpa
const cgpa10 = /^([1-9](\.\d+)?|10(\.0+)?)$/;

if (cgpa10th === "") {
document.getElementById("cgp10thError").innerText = "CGPA cannot be blank";
isValid = false;
} else if (!cgpa10.test(cgpa10th)) {
document.getElementById("cgp10thError").innerText = "CGPA must be a decimal number between 1 and 10";
isValid = false;
} else {
document.getElementById("cgp10thError").innerText = "";
}

//certification 
if (certname === "") {
    document.getElementById("certError").innerText = "certificate name cannot be blank";
    isValid = false;
} 
else {
    document.getElementById("certError").innerText = ""; 
}

//certificate inst
if (inst === "") {
    document.getElementById("instError").innerText = " inst name cannot be blank";
    isValid = false;
} 
else {
    document.getElementById("instError").innerText = ""; 
}

//password validation 
if (password === "") {
    document.getElementById("passError").innerText = " password cannot be blank";
    isValid = false;
} 
else {
    document.getElementById("passError").innerText = ""; 
}

//confirm password validation
if(cpassword===""){
    document.getElementById("passErrorc").innerText = " password cannot be blank";
    isValid = false;
}
else if(password!=cpassword) {
    document.getElementById("passErrorc").innerText = "password are not matched"; 
    isValid = false;
} else{
    document.getElementById("passErrorc").innerText = "";
}

if (profileImage) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const profileImageBase64 = e.target.result; 
        localStorage.setItem("profileImage", profileImageBase64); 
        console.log(profileImageBase64);
    };
    reader.readAsDataURL(profileImage); 
} else {
    document.getElementById("imageError").innerText = "Please upload an image.";
    isValid = false;
}
 


//saving data on localstorage



if (isValid) {
    const formData={
        Name:name,
        Email:email,
        Contact:contact,
        Address:address,
        Pin:pin,
        Objective:objective,
        organization:orgname,
        yoe:yoe,
        Skills:skills,
        College: collegeName,
        Course:course,
        Collegegpa:collegeCgpa,
        School12th:school12th,
        Cgpa12:cgpa12th,
        School10th:school10th,
        Cgpa10:cgpa10th,
        Certificate:certname,
        institute:inst,
        Password:password,
};
    
    saveFormData(formData);
    console.log(name,"tytthth");

    

    window.location.href = "Login.html";
    alert("Data is valid and saved!");
    
}
else {
    alert("Please fill all required fields correctly.");
}
}

function saveFormData(formData){
    const storedFormData = JSON.parse(localStorage.getItem('formData'));

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}