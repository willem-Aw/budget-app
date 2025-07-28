import React,{createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) || [],
    expenseTransactions:  JSON.parse(localStorage.getItem('expenseTransactions')) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('incomeTransactions', JSON.stringify(state.incomeTransactions));
        localStorage.setItem('expenseTransactions', JSON.stringify(state.expenseTransactions));
    })

    const addIncome = incomeTransactions => {
        dispatch({
            type: 'ADD_IMCOME',
            payload: incomeTransactions,
        })
    }
    const addExpense = expenseTransactions => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransactions,
        })
    }

    const deleteTransactions = (id) => {
        dispatch({ 
            type: 'DELETE_TRANSACTION', 
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransactions,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}