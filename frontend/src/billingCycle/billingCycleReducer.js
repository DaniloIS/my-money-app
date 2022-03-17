const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BILLING_CYCLE_FETCHED':
            return {
                ...state,
                list: action.payload.data
            }
        break;
        default:
            return state;
    }
}