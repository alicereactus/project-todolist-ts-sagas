import { put } from 'redux-saga/effects'
import { setAppErrorAC, setAppStatusAC } from '../app/app-reducer'
import { ResponseType } from '../api/todolists-api'

export function* handleServerAppErrorSaga<D>(data: ResponseType<D>) {
    if (data.messages.length) {
        yield put(setAppErrorAC(data.messages[0]))
    } else {
        yield put(setAppErrorAC('Some error occurred'))
    }
    return put(setAppStatusAC('failed'))
}

export function* handleServerNetworkErrorSaga(error: { message: string }) {
    yield put(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
    return put(setAppStatusAC('failed'))
}
