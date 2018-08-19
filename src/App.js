import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TaskList from './views/TasksList'
import Auth from './components/Auth'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Auth>
          <TaskList />
        </Auth>
      </MuiThemeProvider>
    );
  }
}

export default App
