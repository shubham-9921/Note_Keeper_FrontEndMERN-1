import { NOTES_CREATE_FAILED, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_LIST_FAILED, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "../constants/notesConstants";


export const noteReducer = (state = { notes: [] }, action) => {

    switch (action.type) {
        case NOTES_LIST_REQUEST:
            return ({ loading: true })
        case NOTES_LIST_SUCCESS:
            return ({ loading: false, notes: action.payload })
        case NOTES_LIST_FAILED:
            return ({ loading: false, error: action.payload })

        default:
            return state;
    }

}

export const createNoteReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTES_CREATE_REQUEST:
            return ({ loading: true });
        case NOTES_CREATE_SUCCESS:
            return ({ loading: false, success: true })
        case NOTES_CREATE_FAILED:
            return ({ loading: false, error: action.payload })
        default:
            return state;
    }

}