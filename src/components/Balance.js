import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(
        transaction => transaction.transactionAmount
    );
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
return (
    <div className="inc-exp-container"><div>
    <h2 className="money"> Total Balance </h2>
    <p className="money plus"> ${total} </p></div>
    </div>
);
}
