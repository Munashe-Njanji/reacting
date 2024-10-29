import React, { useState } from 'react';
import './BankAccount.css';
import Balance from './Balance';
import TransactionInput from './TransactionInput';
import TransactionHistory from './TransactionHistory';

function BankAccount() {
  const [balance, setBalance] = useState(1500.00);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = (type, amount) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (type === 'deposit') {
      setBalance(balance + numAmount);
    } else if (type === 'withdraw') {
      if (numAmount > balance) {
        alert('Insufficient balance');
        return;
      }
      setBalance(balance - numAmount);
    } else {
      alert('Unknown transaction type');
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount: numAmount,
      date: new Date().toLocaleString()
    };

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="bank-account">
      <h1>Bank Account</h1>
      <Balance balance={balance} />
      <TransactionInput onTransaction={handleTransaction} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default BankAccount;
