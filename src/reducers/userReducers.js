
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILED, USER_REGISTER_REQUEST } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {

    switch (action.type) {

        case USER_LOGIN_REQUEST:
            return { loading: true, userInfo: {} }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAILED:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state;
    }

}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAILED:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}