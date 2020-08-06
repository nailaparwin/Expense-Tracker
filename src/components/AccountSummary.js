import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(
        transaction => transaction.transactionAmount
    );
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = amounts
    .filter( item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1 .toFixed(2);
    
return (
 <div className="inc-exp">
     <div>
         <h4> Income </h4>
<p className="pos"> ${income}</p>
     </div>
     <div>
         <h4> Expense </h4>
<p className="neg"> ${expense}</p>
     </div>
 </div>
);
}