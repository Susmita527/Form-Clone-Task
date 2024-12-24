
const playlist = [
  { songId: 1, title: "Song A", playedAt: "2024-01-01" },
  { songId: 2, title: "Song B", playedAt: "2024-01-02" },
  { songId: 1, title: "Song A", playedAt: "2024-01-03" },
  { songId: 3, title: "Song C", playedAt: "2024-01-04" },
  { songId: 3, title: "Song C", playedAt: "2024-01-08" },
  { songId: 4, title: "Song C", playedAt: "2024-01-09" }
];

// Output:
// [
//   { songId: 2, title: "Song B", playedAt: "2024-01-02" },
//   { songId: 1, title: "Song A", : "2024-01-03" },
//   { songId: 3, title: "Song C", playedAt: "2024-01-04" }
// ]
// */



// function  cleanPlaylist(playlist){
   
//     const play={};
    
//     for(let i=0;i<playlist.length;i++){
//         const song=playlist[i];
//         if(play!=[song.songId]){
//             play[song.songId]=song;
            
//         }

//         //console.log(playlist[i]);
//         //console.log(song);
        
//     }
    
//     console.log(play);

//   }




  function playmusic(playlist){
    const playarr={};

    playlist.forEach(played=>{
    //  console.log(played);

      const song=played;
      //console.log(song);
      
      if(playarr!=song.songId){
          playarr[song.songId]=song;
         
          console.log(playarr);  
          // console.log(playarr);
      }
    })
    
    
    console.log(playarr);
    // const ab=playarr.sort((a,b)=>a.playedAt-b.playedAt);
    // console.log("sorted",ab);

    }
  

// cleanPlaylist(playlist);

   playmusic(playlist);