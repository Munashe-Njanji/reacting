import { useState } from "react"

const TransactionInput = ({ onTransaction }) => {
    const [amount, setAmount] = useState('');
    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <div className="buttons">
                <button onClick={() => onTransaction('deposit', amount)}>Deposit</button>
                <button onClick={() => onTransaction('widthdraw', amount)}>Withdraw</button>
            </div>
        </div>
    )
}

export default TransactionInput;