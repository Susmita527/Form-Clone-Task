const products = [
    { id: 1, name: "Item 1", category: "electronics", price: 45 },
    { id: 2, name: "Item 2", category: "books", price: 120 },
    { id: 3, name: "Item 3", category: "electronics", price: 250 },
    { id: 4, name: "Item 4", category: "books", price: 35 },
    { id: 5, name: "Item 5", category: "stationary", price: 150 }
  ];
  
//   Output:
//   {
//     electronics: {
//       '0-50': [{ id: 1, name: "Item 1", category: "electronics", price: 45 }],
//       '51-100': [],
//       '100+': [{ id: 3, name: "Item 3", category: "electronics", price: 250 }]
//     },
//     books: {
//       '0-50': [{ id: 4, name: "Item 4", category: "books", price: 35 }],
//       '51-100': [],
//       '100+': [{ id: 2, name: "Item 2", category: "books", price: 120 }]
//     }

function category(products){
    const objectnew={};

    products.forEach(product=>{
       
        // console.log(product);   //printing product  

        const category=product.category;
        const price=product.price;

        
        // console.log("category",category,"price",price);  //printing category and price 

        // console.log("array",array); // here the array is blank 

        if(objectnew!=category){
            objectnew[category]={
                '0-50':[],
                '51-100':[],
                '100+':[],
            }
            //console.log("array",array);
            //console.log("array category",array[category]); 
        }
        
        if(price<=50){
            objectnew[category]['0-50'].push(product);
            //console.log("array data",array);
        } else if(price<=100){
            objectnew[category]['51-100'].push(product);
            //console.log("array data",array);
        } else {
            objectnew[category]['100+'].push(product);
        }
        // console.log("array data",array);
        
        
        


    })
    console.log(objectnew) ;
   
}

category(products);
  