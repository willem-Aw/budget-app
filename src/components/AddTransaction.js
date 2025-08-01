import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from "uuid";
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);
    
    const [income, setIncome] = useState({
        incomeText:'',
        incomeAmount: 0,
    })

    const {incomeText, incomeAmount} = income
    
    const onChangeIncome = e => {
        setIncome({...income,[e.target.name]: e.target.value})

        // console.log(income);
    }
    const onSubmitIncome = e => {
        e.preventDefault();

        if(incomeText !== ""){
            const newIncomeTransaction = {
                id: uuidv4(),
                incomeText,
                incomeAmount: incomeAmount * 1
            }
            addIncome(newIncomeTransaction);
    
            setIncome({
                incomeText: "",
                incomeAmount: 0 
            });
        }
    }
    // Add Expenses
    const [expense, setexpense] = useState({
        expenseText:'',
        expenseAmount: 0,
    })

    const {expenseText, expenseAmount} = expense
    
    const onChangeExpense = e => {
        setexpense({...expense,[e.target.name]: e.target.value})

        // console.log(expense);
    }
    const onSubmitExpense = e => {
        e.preventDefault();

        if(expenseText !== ""){
            const newExpenseTransaction = {
                id: uuidv4(),
                expenseText,
                expenseAmount: parseInt(expenseAmount),
            }
            addExpense(newExpenseTransaction);
    
            setexpense({
                expenseText: "",
                expenseAmount: 0 
            })
        }
    }
    
  return (
    <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>
            <div className="input-group income">
                <input 
                    type="text" 
                    placeholder="Add Income..." 
                    name="incomeText" 
                    value={incomeText} 
                    autoComplete="off" 
                    onChange={onChangeIncome}/>
                <input 
                    type="number" 
                    placeholder="Amount" 
                    name="incomeAmount" 
                    value={incomeAmount} 
                    autoComplete="off" 
                    onChange={onChangeIncome}/>
                <input type="submit" value="Submit"/>
            </div>
        </form> 
        <form onSubmit={onSubmitExpense}>
            <div className="input-group expense">
                <input 
                    type="text" 
                    placeholder="Add Expense..." 
                    name="expenseText" 
                    value={expenseText} 
                    autoComplete="off" 
                    onChange={onChangeExpense}/>
                <input 
                    type="number" 
                    placeholder="Amount" 
                    name="expenseAmount" 
                    value={expenseAmount} 
                    autoComplete="off" 
                    onChange={onChangeExpense}/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>
  )
}

export default AddTransaction