let initialState = {
    post: [
        { id: 1, message: 'Hello it', likesCount: 20 },
        { id: 2, message: 'It is good courses', likesCount: 7 },
        { id: 3, message: 'Dont cry', likesCount: 17 },
        { id: 4, message: 'sleep', likesCount: 3 },
        { id: 5, message: 'ok cry', likesCount: 5 },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            {
                let newPost = {
                    id: 6, message: action.message, likesCount: 40
                }
                return {
                    ...state,
                    post: [...state.post, newPost]
                }
            }
        default:
            return state
    }
}


export const addPost = (message) => {
    return {
        type: 'ADD_POST',
        message
    }
}

export default profileReducer;
