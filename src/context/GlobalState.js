import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//create the initial state
const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Expense 1", transactionAmount: -100}        
    ]
}

// create the Global Context
export const GlobalContext = createContext(initialState);

//create a provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
            </GlobalContext.Provider>
    )
}