const posts = [
    { id: 1, title: "Post 1", tags: ["JavaScript", "coding", "web"] },
    { id: 2, title: "Post 2", tags: ["javascript", "programming", "web"] },
    { id: 3, title: "Post 3", tags: ["Web", "html", "css"] }
  ];

  function countingtag(posts){
    const newobject={};
    posts.forEach((post)=>{
        //console.log(post);
        post.tags.forEach((tag)=>{
            //console.log(tag);
            const lowercase=tag.toLowerCase();
           // console.log("lowercase",lowercase);
           console.log(tag[lowercase]);
            if(newobject[lowercase]===undefined){
                newobject[lowercase]=1;
                //console.log(newobject[lowercase]);
            }else{
                newobject[lowercase]++;
            }
        


        })
    })
    console.log(newobject);

  }

  countingtag(posts);




    // const tagsobj=[];
    // posts.forEach((post)=>{
    //     //console.log("post",post);
    //     post.tags.forEach((tag)=>{
    //     const lowertags=tag.toLowerCase();

    //     if(tagsobj[lowertags]!==lowertags){
    //         tagsobj[lowertags]=1;
    //         // console.log( tagsobj);
      
    //     } else if(tagsobj[lowertags]===tag.lowertags){
    //         tagsobj[lowertags]= tagsobj[lowertags]+1;
    //         console.log(tagsobj[lowertags]);
    // }
    //      console.log(tagsobj[lowertags]);
    // })
           
    //     })
    //     console.log(tagsobj);
    // }




