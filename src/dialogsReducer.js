const initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Oleg' },
    ],
    messages: [
        { id: 1, message: 'hello' },
        { id: 2, message: 'Good Bye' },
        { id: 3, message: 'My name is Talgat' },
        { id: 4, message: 'I like this content' },
        { id: 5, message: 'Good luke' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            let newMes = {
                id: 5,
                message: action.message
            }

            return {
                ...state,
                messages: [...state.messages, newMes]
            }
        }
        default:
            return state
    }
}

export const addMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        message
    }
}

export default dialogsReducer;