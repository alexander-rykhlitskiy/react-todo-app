import React from 'react';
import './App.css';
import TasksList from './components/TasksList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
    this.state = {
      tasks: []
    }
  }

  addItem(event) {
    event.preventDefault();
    let newTask = { title: this.inputRef.current.value }
    this.setState({
      tasks: this.state.tasks.concat([newTask])
    })
    this.inputRef.current.value = null
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addItem.bind(this)}>
          <input ref={this.inputRef}></input>
        </form>
        <TasksList tasks={this.state.tasks} />
      </div>
    )
  };
}

export default App;
