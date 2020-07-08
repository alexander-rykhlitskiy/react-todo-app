import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

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
    let liTasks = this.state.tasks.map((task, index) => <li key={index}>{task.title}</li>)

    return (
      <div className="App">
        <form onSubmit={this.addItem.bind(this)}>
          <input ref={this.inputRef}></input>
        </form>
        <ul>
          {liTasks}
        </ul>
      </div>
    )
  };
}

export default App;
