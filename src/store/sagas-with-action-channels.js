import { call, put, actionChannel, take } from 'redux-saga/effects'

import { USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCESSDED, USER_POSTS_FETCH_FAILED } from "./actionTypes";
import { getUserPosts } from '../api/posts'

function* fetchUserPosts(action) {
    try {
        const userPosts = yield call(getUserPosts, action.payload.userId)

        yield put({
            type: USER_POSTS_FETCH_SUCESSDED,
            payload: {
                data: userPosts
            }
        })
    } catch(e) {
        yield put({
            type: USER_POSTS_FETCH_FAILED,
            payload: {
                message: e.message
            }
        })
    }
}

export function* userPostsFetchRequestedWatcherSaga() {
    const requestChannel = yield actionChannel(USER_POSTS_FETCH_REQUESTED);

    while(true) {
        const action = yield take(requestChannel)
        console.log('action :', action)
        yield call(fetchUserPosts, action)
    }
}