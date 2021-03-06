import { MeResponseType } from './../api/todolists-api';
import { call, put, takeEvery } from "redux-saga/effects";
import { authAPI } from "../api/todolists-api";
import { setIsLoggedInAC } from "../features/Login/auth-reducer";
import { setAppInitializedAC } from "./app-reducer";


export function* initializeAppWorkerSaga() {
    try {
        const data: MeResponseType = yield call(authAPI.me)
        if (data.resultCode === 0) {
            yield put(setIsLoggedInAC(true));
        } else {
        }
    }
    finally {
        yield put(setAppInitializedAC(true));
    }
}

export const initializeAppAA = () => ({
    type: "APP/INITIALIZE-APP"
})

export function* appWatcherSaga() {
    yield takeEvery("APP/INITIALIZE-APP", initializeAppWorkerSaga)
}