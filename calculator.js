
function calculator(operator){

    let num1=Number(document.getElementById("first").value);
    
    let num2=Number(document.getElementById("second").value);
    
    let result;
    
    if(operator=='+'){
         result=num1+num2;

    } else if(operator=='-'){
        result=num1-num2;

    } else if(operator=='*'){
        result=num1*num2;

    } else if(operator=='/'){
        result=num1/num2;

    } else 
        alert("enter valid number");
    
    document.getElementById("output").value=result;
    console.log(result);

    }
   
   
   
   
   function validateFirstInput() {
        const firstInput = document.getElementById("first1").value;
        const errorDiv = document.getElementById("first-error"); 
      
        console.log(firstInput);
        errorDiv.innerText = "";
      
        if (firstInput==="") {
            errorDiv.innerText = "Please enter a value in the first field.";
        } else if (isNaN(firstInput)) {
            errorDiv.innerText = "Only numeric values are allowed.";
            document.getElementById("first1").value = ""; 
           
        }
        
      }

    

      function validateSecondInput() {
 
        const secondInput = document.getElementById("second1").value
        const errorDiv = document.getElementById("second-error");
      
       
        errorDiv.innerText = "";
      
       
        if (secondInput=="") {
            errorDiv.innerText = "Please enter a value in the second field.";
        } else if (isNaN(secondInput)) {
            errorDiv.innerText = "Only numeric values are allowed.";
            document.getElementById("second1").value = ""; 
        }
      }








      function calculatorv(operator){

        let num3=Number(document.getElementById("first1").value);

        let num4=Number(document.getElementById("second1").value);
        
        let result1;
        
        if(operator=='+'){
             result1=num3+num4;

        } else if(operator=='-'){
            result1=num3-num4;

        } else if(operator=='*'){
            result1=num3*num4;

        } else if(operator=='/'){
            result1=num3/num4;

        } else 
            alert("enter valid number");
        
        document.getElementById("output1").value=result1;
        console.log(result1);
        

        
        
        }


        // function cleanPlaylist(playlist) {
        //     const play = {}; 
          
        //     playlist.forEach(song => {
                
        //         if (!play[song.songId]) {
        //             play[song.songId] = song;
        //         }
        //     });
        //     const uniqueSongs = Object.values(play);
          
             
        //       uniqueSongs.sort((a, b) => new Date(a.playedAt) - new Date(b.playedAt));
          
        //       return uniqueSongs;
        //    }