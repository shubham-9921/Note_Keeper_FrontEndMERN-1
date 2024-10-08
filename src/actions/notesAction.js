import axios from "axios"
import { NOTES_CREATE_FAILED, NOTES_CREATE_SUCCESS, NOTES_LIST_FAILED, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "../constants/notesConstants"

export const getNotes = () => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTES_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('http://localhost:8081/api/notes', config);

        if (data) {
            dispatch({ type: NOTES_LIST_SUCCESS, payload: data })

        }

    } catch (error) {
        dispatch({ type: NOTES_LIST_FAILED, payload: error.response ? error.response.message : error.response })

    }
}

export const createNote = (title, content, category) => async (dispatch, getState) => {

    try {
        dispatch({ type: NOTES_LIST_REQUEST })
        const { userLogin: {
            userInfo
        } } = getState();


        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post("http://localhost:8081/api/notes/create", { title, content, category }, config);

        if (data) {
            dispatch({ type: NOTES_CREATE_SUCCESS, payload: data })
        }
    } catch (error) {

        const message = error.response ? error.response.message : error.response
        dispatch({ type: NOTES_CREATE_FAILED, payload: message })


    }

}