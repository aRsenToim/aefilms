const ADD_ERROR = 'ADD_ERROR'
const SET_ERROR = 'SER_ERROR'
const SET_GOOD_ALERT = 'good'
let initianalState = {
    AlertPage: {
        content: '',
        isView: false,
        type: '',
    }
}

const pageReducer = (state = initianalState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state, AlertPage: action.data }
            break;
        case SET_GOOD_ALERT:
            return { ...state, AlertPage: action.data }
            break;
        case SET_ERROR:
            return { ...state, AlertPage: { content: '', isView: false, type: '' } }
            break;
        default:
            return state;
            break;
    }
}
export const addGoodAlert = (content) => {
    return { type: ADD_ERROR, data: { content: content, type: 'good', isView: true } }
}
export const addError = (content) => {
    return { type: ADD_ERROR, data: { content: content, type: 'error', isView: true } }
}
export const setError = () => {
    return { type: SET_ERROR }
}

export default pageReducer