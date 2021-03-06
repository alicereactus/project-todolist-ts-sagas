import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { tasksReducer } from '../features/TodolistsList/tasks-reducer';
import { todolistsReducer } from '../features/TodolistsList/todolists-reducer';
import { appReducer } from './app-reducer'
import { authReducer } from '../features/Login/auth-reducer'
import { tasksWatcherSaga } from '../features/TodolistsList/tasks-sagas';
import { appWatcherSaga } from './app-sagas';
import { authWatcherSaga } from '../features/Login/auth-sagas';
import { todolistsWatcherSaga } from '../features/TodolistsList/todolists-sagas';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authReducer
})

export const sagaMiddleware = createSagaMiddleware()

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// создаем root saga-watcher
sagaMiddleware.run(rootWatcher)
function* rootWatcher() {
    yield all([
        appWatcherSaga(),
        authWatcherSaga(),
        tasksWatcherSaga(),
        todolistsWatcherSaga()
    ])
}

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
