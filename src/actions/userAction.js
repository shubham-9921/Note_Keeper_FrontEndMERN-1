import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"


export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("http://localhost:8081/api/users/login", { email, password }, config);

        if (data) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            localStorage.setItem("userInfo", JSON.stringify(data))

        }


    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message })


    }


}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
}

export const register = (name, email, password, confrimpassword, pic) => async (dispatch) => {

    dispatch({ type: USER_REGISTER_REQUEST });

    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("http://localhost:8081/api/users/register", { name, email, password, pic }, config);

        if (data) {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
            localStorage.setItem("userInfo", JSON.stringify(data))
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        }


    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error.response ? error.response.message : error.response })

    }

}