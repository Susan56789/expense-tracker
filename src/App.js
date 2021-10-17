import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/incomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
