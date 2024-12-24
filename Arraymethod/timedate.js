 const timeData = [ 
      { date: "2024-01-01", value: 10 },  
       { date: "2024-01-03", value: 20 },  
        { date: "2024-01-04", value: 15 } 
    ];




//  Output: {   filledSeries: [     { date: "2024-01-01", value: 10 },     { date: "2024-01-02", value: 0 },  // filled missing date     { date: "2024-01-03", value: 20 },     { date: "2024-01-04", value: 15 }   ],   movingAverages: [     { date: "2024-01-01", average: null },  // not enough previous data     { date: "2024-01-02", average: 5 },     // (10 + 0) / 2     { date: "2024-01-03", average: 10 },    // (10 + 0 + 20) / 3     { date: "2024-01-04", average: 11.67 }  // (0 + 20 + 15) / 3   ] }


function timedatefun(timeData){
//     const filledSeries = [];
//   const movingAverages = [];

  // Parse the start and end dates
  const currentDate = new Date(data[0].date);
  const endDate = new Date(timeData[timeData.length - 1].date);

  console.log(currentDate);
  console.log(endDate);
    
}

timedatefun(timeData);
