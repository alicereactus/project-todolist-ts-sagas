import { AxiosResponse } from "axios"
import { call, put, select, takeEvery } from "redux-saga/effects"
import { GetTasksResponse, ResponseType, TaskType, todolistsAPI, UpdateTaskModelType } from "../../api/todolists-api"
import { setAppStatusAC } from "../../app/app-reducer"
import { AppRootStateType } from '../../app/store';
import { handleServerAppErrorSaga, handleServerNetworkErrorSaga } from "../../utils/error-utils-sagas";
import { addTaskAC, removeTaskAC, setTasksAC, UpdateDomainTaskModelType, updateTaskAC } from "./tasks-reducer"

export function* fetchTasksWorkerSaga(action: ReturnType<typeof fetchTasksAA>) {
    yield put(setAppStatusAC('loading'))
    const data: GetTasksResponse = yield call(todolistsAPI.getTasks, action.todolistId)
    const tasks = data.items
    yield put(setTasksAC(tasks, action.todolistId))
    yield put(setAppStatusAC('succeeded'))
}

export const fetchTasksAA = (todolistId: string) => ({
    type: "TASKS/FETCH-TASKS",
    todolistId
})

export function* removeTaskWorkerSaga(action: ReturnType<typeof removeTaskAA>) {
    const response: AxiosResponse<ResponseType> = yield call(todolistsAPI.deleteTask, action.todolistId, action.taskId)
    yield put(removeTaskAC(action.taskId, action.todolistId))
}

export const removeTaskAA = (taskId: string, todolistId: string) => ({
    type: "TASKS/REMOVE-TASK",
    taskId,
    todolistId
})

export function* addTaskWorkerSaga(action: ReturnType<typeof addTaskAA>) {
    yield put(setAppStatusAC('loading'))
    const response: AxiosResponse<ResponseType<{ item: TaskType }>> = yield call(todolistsAPI.createTask, action.todolistId, action.title)
    try {
        if (response.data.resultCode === 0) {
            const task = response.data.data.item
            yield put(addTaskAC(task))
            yield put(setAppStatusAC('succeeded'))
        } else {
            yield handleServerAppErrorSaga(response.data)
        }
    } catch (error) {
        yield handleServerNetworkErrorSaga(error);
    }
}


export const addTaskAA = (title: string, todolistId: string) => ({
    type: "TASKS/ADD-TASK",
    title,
    todolistId,
})

export function* updateTaskWorkerSaga(action: ReturnType<typeof updateTaskAA>) {
    const state: AppRootStateType = yield select()
    const task = state.tasks[action.todolistId].find(t => t.id === action.taskId)
    if (!task) {
        //throw new Error("task not found in the state");
        console.warn('task not found in the state')
        return
    }

    const apiModel: UpdateTaskModelType = {
        deadline: task.deadline,
        description: task.description,
        priority: task.priority,
        startDate: task.startDate,
        title: task.title,
        status: task.status,
        ...action.domainModel
    }

    const response: AxiosResponse<ResponseType<TaskType>> = yield call(todolistsAPI.updateTask, action.todolistId, action.taskId, apiModel)
    try {
        if (response.data.resultCode === 0) {
            yield put(updateTaskAC(action.taskId, action.domainModel, action.todolistId))
        }
        else {
            yield handleServerAppErrorSaga(response.data)
        }
    } catch (error) {
        yield handleServerNetworkErrorSaga(error);
    }
}

export const updateTaskAA = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) => ({
    type: "TASKS/UPDATE-TASK",
    taskId,
    domainModel,
    todolistId
})

export function* tasksWatcherSaga() {
    yield takeEvery("TASKS/FETCH-TASKS", fetchTasksWorkerSaga)
    yield takeEvery("TASKS/REMOVE-TASK", removeTaskWorkerSaga)
    yield takeEvery("TASKS/ADD-TASK", addTaskWorkerSaga)
    yield takeEvery("TASKS/UPDATE-TASK", updateTaskWorkerSaga)
}

