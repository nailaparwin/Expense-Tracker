import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(
        transaction => transaction.transactionAmount
    );
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
return (
    <div>
    <h2> Total Balance </h2>
    <p> ${total} </p>
    </div>
);
}