import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncomeList = () => {
    const {incomeTransactions, deleteTransactions} = useContext(GlobalContext);
    
  return (
    <div className="transactions transactions-income">
        <h2>Transaction history</h2>
        <ul className="transaction-list">
            {incomeTransactions.map((transaction) => (
                 <li className="transaction" key={transaction.id}>
                    <span className="transaction-text">
                        {transaction.incomeText}
                    </span>
                    <span className="transaction-amount">
                        ${transaction.incomeAmount}
                    </span>
                    <button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            ))}
            
        </ul>
    </div>
  );
};

export default IncomeList