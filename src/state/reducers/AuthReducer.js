import { ACTIONS } from "../actions/authActions"


export const initialState = {
    device: {
        qty: 0,
        proxie: null,
        airsyn: null
    },
    account: {
        userId: 'jskjs',
        email: 'p@gmail.com'
    }
}

const authReducer = (state, action) => {
    const { email, password } = action.payload

    switch(action.type) {
        case ACTIONS.SIGNUP:
            // return { username: state.username = 'precious' }
            return state

        case ACTIONS.LOGIN:
            console.log('login ')
            return

        case ACTIONS.VERIFY_EMAIL:
            console.log('VERFIY EMAIL');
            return

        case ACTIONS.UPDATE_USER_ACCOUNT_EMAIL_USERID:
            console.log(action.payload)
            // ...state, object: { ...state.object, courseName: "Science"}
            return { 
                account: { 
                    ...state.account, 
                    email: action.payload.email, 
                    userId: action.payload.userId
                }
            };

        default:
            console.log('this is the default state')
    }
}

export default authReducer

// do this for updating one state in the object
// return { 
//     ...state, 
//     account: { 
//         ...state.account, 
//         email: action.payload.email, 
//         // userId: action.payload.userId
//     }
// };