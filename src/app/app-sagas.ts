import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects";
import { authAPI, ResponseType } from "../api/todolists-api";
import { setIsLoggedInAC } from "../features/Login/auth-reducer";
import { setAppInitializedAC } from "./app-reducer";


export function* initializeAppWorkerSaga() {
    const response: AxiosResponse<ResponseType<{id: number; email: string; login: string}>> = yield call(authAPI.me)
    if (response.data.resultCode === 0) {
        yield put(setIsLoggedInAC(true));
    } else {
    }
    yield put(setAppInitializedAC(true));
}

export const initializeAppAA = () => ({
    type: "APP/INITIALIZE-APP"
})

export function* appWatcherSaga() {
    yield takeEvery("APP/INITIALIZE-APP", initializeAppWorkerSaga)
}