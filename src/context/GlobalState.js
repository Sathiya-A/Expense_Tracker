import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions:  [
       
        {id: Math.floor(Math.random() * 100000000), Category: 'Cab', amount: -100},
       
        {id: Math.floor(Math.random() * 100000000), Category: 'School', amount: -300},
     
        {id: Math.floor(Math.random() * 100000000), Category: 'Groceries', amount: -300},
      
        {id: Math.floor(Math.random() * 100000000), Category: 'Rent', amount: -1000},
    
        {id: Math.floor(Math.random() * 100000000), Category: 'Share market', amount: 1500},
      
        {id: Math.floor(Math.random() * 100000000), Category: 'Freelance work', amount: 1000},
       
        {id: Math.floor(Math.random() * 100000000), Category: 'Salary', amount: 3000}
        ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {   
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    function editTransaction(id,transaction) {
   
        dispatch({
            type: 'EDIT_TRANSACTION',
            id:id,
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            editTransaction
        }}>
            {children}
        </GlobalContext.Provider>);
}