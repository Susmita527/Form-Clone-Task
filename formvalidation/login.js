

function Submitdata(event){
    event.preventDefault();

    const email=document.getElementById("emailL").value;
    const password=document.getElementById("passwordL").value;


    const data=JSON.parse(localStorage.getItem('formData')) || [];
    let user="";

    for(let i=0; i<data.length;i++){
     if(data[i].Email === email && data[i].Password === password){
       user=data[i];
       console.log(data[i]);
        break;
        
     }
    }
    


    if(user){
        console.log("data are inside the console");
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("welcome to the resume");
        window.location.href = "result.html";
    }
    else{
        alert("incorrect email and password");
    }
}