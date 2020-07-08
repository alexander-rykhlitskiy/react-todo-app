import React from 'react';

class TasksList extends React.Component {
  render() {
    let liTasks = this.props.tasks.map((task, index) => <li key={index}>{task.title}</li>)

    return (
      <ul>
        {liTasks}
      </ul>
    )
  }
}

export default TasksList;
