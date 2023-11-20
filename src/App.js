import { Form } from "./component/form/index.js"
import {List} from "./component/list/index.js"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


function App() {
const [activities, setActivities] = useState([]);
// maybe we need this? 
const handleAddActivity = (newActivity) => {
  const activityWithId = {...newActivity, id: uuidv4()};
 console.log(newActivity); setActivities( [...activities, activityWithId]);
}
console.log(activities)
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities}/>
    </div>
  );
}

export default App;
