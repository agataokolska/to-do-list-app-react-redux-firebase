import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Delete from 'material-ui/svg-icons/action/delete'
import { ListItem } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import { addTaskAction, handleChangeAction, onAddTaskClickAction, deleteTaskAction } from '../state/tasks'


const styles = {
    margin: '20px',
    padding: '20px'
}

const TaskList = (props) => (
    <div>
        <Paper style={styles}>
            <TextField
                onChange={(value) => props._handleChangeAction(value)}
                placeholder={'write new task here'}
                type='text'
                value={props._task}
                fullWidth={true}
            />
            <RaisedButton
               onClick={props._onAddTaskClickAction}
                // onClick={props._addTaskAction}
                label="Add task"
                primary={true}
                fullWidth={true} />
        </Paper>
        <Paper style={styles}>
            {
                props._isTasksAreLoading ?
                    'Loading tasks, please wait for a moment'
                    :
                    props._tasks.map((task, uid) => (
                        <ListItem 
                        key={uid}
                        rightIcon={<Delete onClick={()=> props._deleteTaskAction(task.uid)}/>}
                        >
                        {task.taskName} 
                        </ListItem>
                    ))

            }
        </Paper>

    </div>
)
const mapStateToProps = state => ({
    _tasks: state.tasks.tasks,
    _isTasksAreLoading: state.tasks.isTasksAreLoading
})
const mapDispatchToProps = dispatch => ({
    _addTaskAction: () => dispatch(addTaskAction()),
    _handleChangeAction: (value) => dispatch(handleChangeAction(value)),
    _onAddTaskClickAction: () => dispatch(onAddTaskClickAction()),
    _deleteTaskAction: (uid) => dispatch(deleteTaskAction(uid))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList) 