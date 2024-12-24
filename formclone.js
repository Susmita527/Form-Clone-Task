 let formcount=1;

 document.getElementById('add-form').addEventListener('click',()=>{
    formcount++;

 const forms=document.getElementById('form');

 const newform=document.createElement('div');

   newform.innerHTML=`
        <label for="Name">Name</label>
        <input type="text" id="name-${formcount}">
        <label for="email">Email</label>
        <input type="email" id="email-${formcount}">
        <label for="add">Address</label>
        <input type="text" id="address-${formcount}">
        <button id="${formcount}">-</button>
        <br><br>
  ` ;
       console.log(formcount);

       forms.append(newform);


    document.getElementById(formcount).addEventListener('click',()=>{

       forms.removeChild(newform);

        // const remove2 = document.getElementById(formcount);
        // remove2.addEventListener('click',()=>{
        //     newform.remove();
         })
      

 })
   

