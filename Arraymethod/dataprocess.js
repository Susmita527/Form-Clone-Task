const timeData = [ 
    { date: "2024-01-01", value: 10 },  
     { date: "2024-01-03", value: 20 },  
      { date: "2024-01-04", value: 15 } 
  ];


  function processfun(data){
    const filledSeries = [];

  const currentDate = new Date(data[0].date); // first date
  const endDate = new Date(data[data.length -1].date); // End last date
  console.log(currentDate);
  // console.log(endDate);
     const index = 0;



  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString();
    console.log(formattedDate);

    if(data[index].date === formattedDate){
      filledSeries.push(data[index]);
      index++;
      // console.log(filledSeries);
    
    }
    
    else{

      filledSeries.push({ "date": formattedDate, "value": 0 });
    }
  
    currentDate.setDate(currentDate.getDate() + 1);
   
    console.log(currentDate.getDate());
  }
  
    console.log(filledSeries); 
}

   processfun(timeData);


  


  

  
// Output: 
// {   
// filledSeries: [     
// { date: "2024-01-01", value: 10 },     
// { date: "2024-01-02", value: 0 },  // filled missing date     
// { date: "2024-01-03", value: 20 },     
// { date: "2024-01-04", value: 15 }   
// ],   
// movingAverages:
// [     
// { date: "2024-01-01", average: null }, not enough previous data     
// { date: "2024-01-02", average: 5 }, (10 + 0)/2        
// {   date: "2024-01-03", average: 10 },(10 + 0 + 20) / 3     
// { date: "2024-01-04", average: 11.67 } (0 + 20 + 15) / 3   ] }