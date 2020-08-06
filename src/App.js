import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
      <Balance />
      <AccountSummary/>
      <TransactionHistory />
      <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
