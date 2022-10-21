import {combineReducers} from "redux";

import {usersReducer} from "./usersReducer";


export const rootReducer = combineReducers({

    usersReducer


})
















//
// // const initialState = {
// //     users: []
// // }
//
//
// export function rootReducer (state = initialState, action) {
//
// //     if (action.type === "CREATE_USER") {
// //         console.log(action)
// //         return {...state, users: [...state.users, action.payload]}
// //     }
// //     else if (action.type === "CLEAR") {
// //         return {...state, users: []}
// //     }
// // }