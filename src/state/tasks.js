import { database } from '../firebaseConfig'

const SET_TASKS = 'tasks/SET_TASKS'
const ADD_TASK = 'tasks/ADD_TASKS'
const DELETE_TASK = 'tasks/DELETE_TASK'
const HANDLE_CHANGE = 'tasks/HANDLE_CHANGE'
const TASKS_STARTED_LOADING = 'tasks/TASKS_STARTED_LOADING'
const TASKS_STOPPED_LOADING = 'tasks/TASKS_STOPPED_LOADING'
const CLEAR_INPUT = 'tasks/CLEAR_INPUT'

export const setTasksAction = data => ({ type: SET_TASKS, data })
export const addTaskAction = value => ({ type: ADD_TASK, value })
export const handleChangeAction = (event) => ({ type: HANDLE_CHANGE, text: event.target.value })
export const tasksStartedLoadingAction = () => ({ type: TASKS_STARTED_LOADING })
export const tasksStoppedLoadingAction = () => ({ type: TASKS_STOPPED_LOADING })
export const clearInputAction = () => ({ type: CLEAR_INPUT })



export const fetchTasksAction = () => (dispatch, getState) => {
    const state = getState()
    const user = state.auth.user.uid

    console.warn('asking for: ', `users/userId/${user}`)
    database
        .ref(`users/${user}/tasks`)
        .on('value', snapshot => {
            const firebaseData = Object.entries(snapshot.val() || {}).map(([uid, value]) => {
                value.uid = uid
                return value
            })
            dispatch(setTasksAction(firebaseData))
        })
}

export const onAddTaskClickAction = () => (dispatch, getState) => {
    const state = getState()
    const user = state.auth.user.uid

    database.ref(`users/${user}/tasks`).push({
        taskName: state.tasks.text,
    })

    dispatch(clearInputAction())
}

export const onDeleteTaskClickAction = (taskId) => (dispatch, getState) => {
    const state = getState()
    const user = state.auth.user.uid
    database.ref(`users/${user}/tasks/${taskId}`).remove()
}

const initialState = {
    tasks: [],
    text: '',
    isTasksAreLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.data
            }
        case TASKS_STARTED_LOADING:
            return {
                ...state,
                isTasksAreLoading: true
            }
        case TASKS_STOPPED_LOADING:
            return {
                ...state,
                isTasksAreLoading: false
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                text: action.text
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({
                    taskName: state.text,
                    uid: Date.now(),

                })
            }
        case CLEAR_INPUT:
            return {
                ...state,
                text: ''
            }
        default:
            return state
    }
}