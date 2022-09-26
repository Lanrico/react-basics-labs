import './App.css';
import Task from './components/Task';
import AddTaskForm  from './components/Form';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "high", done: false}
    ]
  });
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`)
  }
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks})
  }
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
      form = formState;
    }
    setFormState(form);
    console.log(formState);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }
  
  return (
    <div className="container">
      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* End App Header */}
      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-top" justifyContent="center">
          {taskState.tasks.map((task, index) => (
            <Task 
              title={task.title}
              description={task.description}
              deadline={task.deadline}
              done={task.done}
              priority={task.priority}
              key={task.id}
              markDone = {() => doneHandler(index)}
              deleteTask = {() => deleteHandler(index)}
            />
          ))}
        </Grid>
      </Container>
      {/* End Task Card Grid */}
      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
    </div>
  );
}

export default App;
