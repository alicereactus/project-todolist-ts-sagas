import { call, put } from "redux-saga/effects";
import { GetTasksResponse, TaskPriorities, TaskStatuses, todolistsAPI } from "../../api/todolists-api";
import { setAppStatusAC } from "../../app/app-reducer";
import { setTasksAC } from "./tasks-reducer";
import { fetchTasksWorkerSaga } from "./tasks-sagas";

beforeEach(() => {

})

test('fetchTasksWorkerSaga success flow', () => {
    let todolistId = "todolistId"
    const gen = fetchTasksWorkerSaga({ type: "", todolistId: todolistId })
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
    expect(gen.next().value).toEqual(put(setAppStatusAC('succeeded')))
})