import { USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCESSDED, USER_POSTS_FETCH_FAILED} from './actionTypes'

const initialState = {
    posts: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_POSTS_FETCH_REQUESTED: {
            const posts = action.payload.data
            return {
                ...state,
                posts
            }
        }
        case USER_POSTS_FETCH_SUCESSDED : {
            return {
                ...state,
            }
        }
        case USER_POSTS_FETCH_FAILED: {
            return {
                ...state
            }
        }
        default:
            return state
    }
}