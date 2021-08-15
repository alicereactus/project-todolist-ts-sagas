import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects"
import { authAPI, LoginParamsType, ResponseType } from "../../api/todolists-api"
import { setAppStatusAC } from "../../app/app-reducer"
import { handleServerAppErrorSaga, handleServerNetworkErrorSaga } from '../../utils/error-utils-sagas';
import { setIsLoggedInAC } from "./auth-reducer"

export function* loginWorkerSaga(action: ReturnType<typeof authLoginAA>) {
    yield put(setAppStatusAC('loading'))
    const response: AxiosResponse<ResponseType<{ userId?: number }>> = yield call(authAPI.login, action.data)
    try {
        if (response.data.resultCode === 0) {
            yield put(setIsLoggedInAC(true))
            yield put(setAppStatusAC('succeeded'))
        } else {
            yield* handleServerAppErrorSaga(response.data)
        }
    } catch (error) {
        yield* handleServerNetworkErrorSaga(error);
    }
}

export const authLoginAA = (data: LoginParamsType) => ({
    type: "AUTH/LOGIN",
    data,
})

export function* logoutWorkerSaga() {
    yield put(setAppStatusAC('loading'))
    const response: AxiosResponse<ResponseType<{ userId?: number }>> = yield call(authAPI.logout)
    try {
        if (response.data.resultCode === 0) {
            yield put(setIsLoggedInAC(false))
            yield put(setAppStatusAC('succeeded'))
        } else {
            yield* handleServerAppErrorSaga(response.data)
        }
    } catch (error) {
        yield* handleServerNetworkErrorSaga(error);
    }
}

export const authLogoutAA = () => ({
    type: "AUTH/LOGOUT",
})

export function* authWatcherSaga() {
    yield takeEvery("AUTH/LOGIN", loginWorkerSaga)
    yield takeEvery("AUTH/LOGOUT", logoutWorkerSaga)
}