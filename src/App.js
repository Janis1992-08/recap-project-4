import { Form } from "./component/form/index.js"
import { List } from "./component/list/index.js"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "use-local-storage-state";


function App() {
const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
const isGoodWeather = true;

const handleAddActivity = (newActivity) => {
  const activityWithId = {...newActivity, id: uuidv4()};
setActivities( [...activities, activityWithId]);
}

const filteredActivities = activities.filter( activity => activity.isGoodWeather === isGoodWeather);

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
