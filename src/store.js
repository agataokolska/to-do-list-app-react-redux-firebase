import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tasks, {setTasksAction} from './state/tasks'
import auth, {initAuthStateListening} from './state/auth'

const reducer = combineReducers({
    tasks,
    auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


store.dispatch(initAuthStateListening())