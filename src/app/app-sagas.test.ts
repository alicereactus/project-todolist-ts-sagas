import { MeResponseType } from './../api/todolists-api';
import { call, put } from 'redux-saga/effects';
import { authAPI } from '../api/todolists-api';
import { initializeAppWorkerSaga } from './app-sagas';
import { setIsLoggedInAC } from '../features/Login/auth-reducer';
import { setAppInitializedAC } from './app-reducer';

let meResponse: MeResponseType; 

beforeEach(() => {
    meResponse = {
        resultCode: 0,
        data: {
            login: "",
            id: 12,
            email: ""
        },
        messages: []
    }
})

test('initializeAppWorkerSaga login success', () => {
    const gen = initializeAppWorkerSaga()
    // gen.next() объект-инструкция, который говрит, что надо вызвать метод me например
    expect(gen.next().value).toEqual(call(authAPI.me))
    expect(gen.next(meResponse).value).toEqual(put(setIsLoggedInAC(true)))
    expect(gen.next().value).toEqual(put(setAppInitializedAC(true)))
})

test('initializeAppWorkerSaga login unsuccess', () => {
    const gen = initializeAppWorkerSaga()
    // gen.next()объект-инструкция, который говрит, что надо вызвать метод me например
    expect(gen.next().value).toEqual(call(authAPI.me))
    meResponse.resultCode = 1;
    expect(gen.next(meResponse).value).toEqual(put(setAppInitializedAC(true)))
})