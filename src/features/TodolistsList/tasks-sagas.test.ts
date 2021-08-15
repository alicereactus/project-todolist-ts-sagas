import { setAppErrorAC } from './../../app/app-reducer';
import { call, put } from "redux-saga/effects";
import { GetTasksResponse, TaskPriorities, TaskStatuses, todolistsAPI } from "../../api/todolists-api";
import { setAppStatusAC } from "../../app/app-reducer";
import { setTasksAC } from "./tasks-reducer";
import { addTaskWorkerSaga, fetchTasksWorkerSaga } from "./tasks-sagas";

beforeEach(() => {

})

test('fetchTasksWorkerSaga success flow', () => {
    let todolistId = "todolistId"
    const gen = fetchTasksWorkerSaga({ type: "TASKS/FETCH-TASKS", todolistId: todolistId })
    // gen.next() объект-инструкция, который говрит, что надо вызвать метод me например
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next().value).toEqual(call(todolistsAPI.getTasks, todolistId))
    const fakeApiResponse: GetTasksResponse = {
        error: "",
        totalCount: 10,
        items: [
            {
                id: "1",
                title: "CSS",
                status: TaskStatuses.New,
                todoListId: todolistId,
                description: '',
                startDate: '',
                deadline: '',
                addedDate: '',
                order: 0,
                priority: TaskPriorities.Low
            }
        ]
    }
    expect(gen.next(fakeApiResponse).value).toEqual(put(setTasksAC(fakeApiResponse.items, todolistId)))
    let next = gen.next()
    expect(next.value).toEqual(put(setAppStatusAC('succeeded')))
    // expect(next.done).toBeFalsy()
})

test('addTaskWorkerSaga error flow', () => {
    let todolistId = "todolistId"
    let taskTitle = "task title"

    const gen = addTaskWorkerSaga({ type: "TASKS/ADD-TASK", title: taskTitle, todolistId: todolistId })
    // gen.next() объект-инструкция, который говрит, что надо вызвать метод me например
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next().value).toEqual(call(todolistsAPI.createTask, todolistId, taskTitle))
    expect(gen.throw({ message: "Some error occurred" }).value).toEqual(put(setAppErrorAC("Some error occurred")))
    expect(gen.next().value).toEqual(put(setAppStatusAC("failed")))
})