import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ResponseType } from './../../api/todolists-api';
import { todolistsAPI, TodolistType } from "../../api/todolists-api";
import { setAppStatusAC } from "../../app/app-reducer";
import { addTodolistAC, changeTodolistEntityStatusAC, changeTodolistTitleAC, removeTodolistAC, setTodolistsAC } from "./todolists-reducer";
import { handleServerNetworkErrorSaga } from "../../utils/error-utils-sagas";

export function* fetchTodolistsWorkerSaga() {
    yield put(setAppStatusAC('loading'))
    try {
        const response: AxiosResponse<TodolistType[]> = yield call(todolistsAPI.getTodolists)
        const todolists = response.data
        yield put(setTodolistsAC(todolists))
        yield put(setAppStatusAC('succeeded'))
    } catch (error) {
        yield* handleServerNetworkErrorSaga(error);
    }
}

export const fetchTodolistsAA = () => ({
    type: "TODOLISTS/FETCH-TODOLISTS",
})

export function* removeTodolistWorkerSaga(action: ReturnType<typeof removeTodolistAA>) {
    //изменим глобальный статус приложения, чтобы вверху полоса побежала
    yield put(setAppStatusAC('loading'))
    //изменим статус конкретного тудулиста, чтобы он мог задизеблить что надо
    yield put(changeTodolistEntityStatusAC(action.todolistId, 'loading'))
    const response: AxiosResponse<ResponseType> = yield call(todolistsAPI.deleteTodolist, action.todolistId)
    yield put(removeTodolistAC(action.todolistId))
    //скажем глобально приложению, что асинхронная операция завершена
    yield put(setAppStatusAC('succeeded'))
}

export const removeTodolistAA = (todolistId: string) => ({
    type: "TODOLISTS/REMOVE-TODOLIST",
    todolistId
})

export function* addTodolistWorkerSaga(action: ReturnType<typeof addTodolistAA>) {
    yield put(setAppStatusAC('loading'))
    const response: AxiosResponse<ResponseType<{ item: TodolistType }>> = yield call(todolistsAPI.createTodolist, action.title)
    const todolist = response.data.data.item
    yield put(addTodolistAC(todolist))
    yield put(setAppStatusAC('succeeded'))
}

export const addTodolistAA = (title: string) => ({
    type: "TODOLISTS/ADD-TODOLIST",
    title
})

export function* changeTodolistTitleWorkerSaga(action: ReturnType<typeof changeTodolistAA>) {
    const response: AxiosResponse<ResponseType> = yield call(todolistsAPI.updateTodolist, action.todolistId, action.title)
    yield put(changeTodolistTitleAC(action.todolistId, action.title))
}

export const changeTodolistAA = (todolistId: string, title: string) => ({
    type: "TODOLISTS/CHANGE-TODOLIST",
    todolistId,
    title
})

export function* todolistsWatcherSaga() {
    yield takeEvery("TODOLISTS/FETCH-TODOLISTS", fetchTodolistsWorkerSaga)
    yield takeEvery("TODOLISTS/REMOVE-TODOLIST", removeTodolistWorkerSaga)
    yield takeEvery("TODOLISTS/ADD-TODOLIST", addTodolistWorkerSaga)
    yield takeEvery("TODOLISTS/CHANGE-TODOLIST", changeTodolistTitleWorkerSaga)
}