
const initialState = {
    users: []
}

export function usersReducer (state = initialState, action) {
    switch (action.type) {
        case "CREATE_USER":
            return {...state, users: [...state.users, action.payload]}
        case "CLEAR":
            return {...state, users: []}

        default: return state
    }
}

