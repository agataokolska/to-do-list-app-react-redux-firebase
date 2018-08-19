const SET_TASKS = 'tasks/SET_TASKS'
const ADD_TASK = 'tasks/ADD_TASKS'
const DELETE_TASK = 'tasks/DELETE_TASK'
const TASKS_STARTED_LOADING = 'tasks/TASKS_STARTED_LOADING'
const TASKS_STOPPED_LOADING = 'tasks/TASKS_STOPPED_LOADING'

const setTasksAction = data => ({ type: SET_TASKS, data })
const addTaskAction = value => ({ type: ADD_TASK, value })
const deleteTaskAction = () => ({ type: DELETE_TASK })
const tasksStartedLoadingAction = () => ({ type: TASKS_STARTED_LOADING })
const tasksStoppedLoadingAction = () => ({ type: TASKS_STOPPED_LOADING })


const initialState = {
    tasks: null,
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
        case ADD_TASK:
        return {
            ...state,
            text: action.value
        }
    
        default:
            return state
    }
}