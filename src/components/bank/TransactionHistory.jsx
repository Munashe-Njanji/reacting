import React from 'react';

function TransactionHistory({ transactions }) {
    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.date} - {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionHistory;
