import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


const ExpenseList = () => {
    const {expenseTransactions, deleteTransactions} = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
    <h2>Transaction history</h2>
    <ul className="transaction-list">
        {expenseTransactions.map((transaction) => (
             <li className="transaction" key={transaction.id}>
                <span className="transaction-text">
                    {transaction.expenseText}
                </span>
                <span className="transaction-amount">
                    ${transaction.expenseAmount}
                </span>
                <button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        ))}
        
    </ul>
</div>
  )
}

export default ExpenseList