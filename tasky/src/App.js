import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laudry and pur away"/>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
