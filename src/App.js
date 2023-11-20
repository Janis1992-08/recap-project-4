import {Form} from "./component/form/form.js"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


function App() {
const [activities, setActivities] = useState([]);
// maybe we need this? (activities) =>
const handleAddActivity = (newActivity) => {
  const activityWithId = {...newActivity, id: uuidv4() };
  setActivities([...activities, activityWithId]);
}

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} /> 
    </div>
  ); 
}

export default App;
