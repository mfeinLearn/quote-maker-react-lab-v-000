export default (state = [], action) => {
    let newState;
    switch(action.type) {
        case 'ADD_QUOTE':
            return [...state, action.quote];
        case 'REMOVE_QUOTE':
        // create a new array with quotes that DONT equal this id
            return state.filter(quote => quote.id !== action.quoteId)
        case 'UPVOTE_QUOTE':
            newState = state.map(quote => {
                if (quote.id === action.quoteId) {
                    return { ...quote, votes: ++quote.votes}
                } else {
                    return quote;
                }
            })
            return newState;
        case 'DOWNVOTE_QUOTE':
            newState = state.map(quote => {
                if (quote.id === action.quoteId && quote.votes > 0) {
                    return { ...quote, votes: --quote.votes}
                } else {
                    return quote
                }
            })
            return newState;
        default:
            return state;
    }
}



// [...state] -> current state
// [...state, action.quote] -> current state with our now quote
// action is the object quote is the property of that object
