const posts = [
    { id: 1, title: "Post 1", tags: ["JavaScript", "coding", "web"] },
    { id: 2, title: "Post 2", tags: ["javascript", "programming", "web"] },
    { id: 3, title: "Post 3", tags: ["Web", "html", "css"] }
  ];



function analyzeTags(posts)
 {   
    let outputArr= [];   
   // console.log(posts);   
    posts.forEach((item)=>{     
        item.tags.forEach((tag)=>{ 
            console.log(tag);     
             let index = outputArr.findIndex((item) => 
                item.tag === tag.toLowerCase())  
             console.log(item);     
            // console.log(index)       
             if(index<0){         
                outputArr.push({"tag":tag.toLowerCase(),"count":1 })  
                 } 
                 else {        
                     outputArr[index].count = outputArr[index].count+1       
                    }     
                })  
             })   
                     console.log(outputArr); 
                    }
                    analyzeTags(posts)