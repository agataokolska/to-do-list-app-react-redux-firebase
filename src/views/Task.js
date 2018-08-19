import React from 'react'
import { connect } from 'react-redux'
import { ListItem } from 'material-ui/List'

const Task = (props) => (
    <div>
        <ListItem
            primaryText={props.task}
           
        />
    </div>
)
export default connect(null, null)(Task)