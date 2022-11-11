const deposit = (amount)=> {
    return {
        type: 'deposit',
        payload: {amount    }
    }
}

deposit (100)

function funcReducer (state = 0,action ){
switch(action.type){
    case 'deposit':
        return state + action.payload.amount;

        default: 
        return state
}
}
const store = createStore(funcReducer)