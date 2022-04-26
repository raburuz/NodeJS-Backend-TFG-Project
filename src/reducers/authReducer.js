import { types } from '../types/types';

const initialState = {
    checking: true,
    errors:{

    }
    // uid: null,
    // name: null
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }

        case types.fetchUsersErrors:
                return {

                    errors: action.payload
                }
    
    


        default:
            return state;
    }

}
