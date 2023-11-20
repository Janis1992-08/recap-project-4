import { useState } from 'react';
import { Form } from './component/form/index.js';
import { List } from './component/list/index.js';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from 'use-local-storage-state';

function App() {
  const [activities, setActivities] = useLocalStorageState('activities', { defaultValue: [] });
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  const handleAddActivity = (newActivity) => {
    const activityWithId = { ...newActivity, id: uuidv4() };
    setActivities([...activities, activityWithId]);
  };

  // Filtered activities for good weather
  const filteredGoodWeatherActivities = activities.filter((activity) => activity.isGoodWeather === true);

  // Filtered activities for bad weather
  const filteredBadWeatherActivities = activities.filter((activity) => activity.isGoodWeather !== true);

  // Depending on the checked status, display different activities
  const filteredActivities = isGoodWeather ? filteredGoodWeatherActivities : filteredBadWeatherActivities;

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} setIsGoodWeather={setIsGoodWeather} />
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;

