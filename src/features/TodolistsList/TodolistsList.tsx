import React, { useCallback, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppRootStateType } from '../../app/store'
import {
    changeTodolistFilterAC,
    FilterValuesType,
    TodolistDomainType
} from './todolists-reducer'
import { TasksStateType } from './tasks-reducer'
import { TaskStatuses } from '../../api/todolists-api'
import { AddItemForm } from '../../components/AddItemForm/AddItemForm'
import { Todolist } from './Todolist/Todolist'
import { addTaskAA, removeTaskAA, updateTaskAA } from './tasks-sagas'
import { addTodolistAA, changeTodolistAA, fetchTodolistsAA, removeTodolistAA } from './todolists-sagas'

import { Grid, Paper } from '@material-ui/core'


type PropsType = {
    demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({ demo = false }) => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        if (demo || !isLoggedIn) {
            return;
        }
        dispatch(fetchTodolistsAA())
    }, [])

    const removeTask = useCallback(function (id: string, todolistId: string) {
        const action = removeTaskAA(id, todolistId)
        dispatch(action)
    }, [])

    const addTask = useCallback(function (title: string, todolistId: string) {
        const action = addTaskAA(title, todolistId)
        dispatch(action)
    }, [])

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        const action = updateTaskAA(id, { status }, todolistId)
        dispatch(action)
    }, [])

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const thunk = updateTaskAA(id, { title: newTitle }, todolistId)
        dispatch(thunk)
    }, [])

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }, [])

    const removeTodolist = useCallback(function (id: string) {
        dispatch(removeTodolistAA(id))
    }, [])

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        dispatch(changeTodolistAA(id, title))
    }, [])

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistAA(title))
    }, [dispatch])

    if (!isLoggedIn) {
        return <Redirect to={"/login"} />
    }

    return <>
        <Grid container style={{ padding: '20px' }}>
            <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id]

                    return <Grid item key={tl.id}>
                        <Paper style={{ padding: '10px' }}>
                            <Todolist
                                todolist={tl}
                                tasks={allTodolistTasks}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                                demo={demo}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}
