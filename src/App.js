import { Form } from "./component/form/form.js"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


function App() {
const [activities, setActivities] = useState([]);
// maybe we need this? 
const handleAddActivity = (newActivity) => {
  setActivities((prevActivities) => [...prevActivities, newActivity]);
}

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List />
      
      <h2>Activities:</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} - Good Weather: {activity.isGoodWeather ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
