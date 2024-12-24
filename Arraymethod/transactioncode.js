const transactions = [
    { id: 1, amount: 120, category: 'groceries' },
    { id: 2, amount: 85, category: 'dining' },
    { id: 3, amount: 200, category: 'electronics' },
    { id: 4, amount: 150, category: 'clothing' }
  ];
  

  function cashbacktransaction(transactions){
    const cashbackamt=0.02;
    
  let result={
        totalCashback:0,
        qualifiedTransactions:[],
    }


    transactions.forEach((transaction)=>{
        console.log(transaction);

        if(transaction.amount>100){
          const cashback=transaction.amount*cashbackamt;

          const qualifiedTransaction1={
            id:transaction.id,
            amount:transaction.amount,
            category:transaction.category,
            cashback:cashback,
          };
          result.totalCashback=result.totalCashback+cashback;
        result.qualifiedTransactions.push(qualifiedTransaction1);
        }
        
        
         
    })
    console.log(result);
   
   
  
  }
  cashbacktransaction(transactions);
  
