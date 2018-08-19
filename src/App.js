import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TaskList from './views/TasksList'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
     
        <TaskList />
     
      </MuiThemeProvider>
    );
  }
}

export default App
