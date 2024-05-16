const appReducer =  (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION' :
            return {
                ...state,
                transactions: state.transactions.filter(trasaction => trasaction.id !== action.payload)
            }
        
        case 'ADD_TRANSACTION':
          
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'EDIT_TRANSACTION':
            const new_transactions=[...state.transactions]
            new_transactions.splice(action.id,1,action.payload)
            return{
                ...state,
                transactions:new_transactions
            }
                
        default:
            return state;
    }
}

export default appReducer;