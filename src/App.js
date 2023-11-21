import { useState, useEffect } from 'react';
import { Form } from './component/form/index.js';
import { List } from './component/list/index.js';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from 'use-local-storage-state';

function App() {
  const [activities, setActivities] = useLocalStorageState('activities', { defaultValue: [] });
  const [isGoodWeather, setIsGoodWeather] = useState(null);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/weather/europe");
        const weather = await response.json();
        setIsGoodWeather(weather);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    }

    startFetching();
    const intervalId = setInterval(startFetching, 5000);
    return () => clearInterval(intervalId);
  }, []);

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
        <h2>
        {isGoodWeather ? (
          <>
            <span>{isGoodWeather.condition} </span>
            <span>{isGoodWeather.temperature}°C</span>
          </>
        ) : (
          <> 
          <span>{isGoodWeather.condition} </span>
            <span>{isGoodWeather.temperature}°C</span>
            </>
        )}
      </h2>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} setIsGoodWeather={setIsGoodWeather} />
    </div>
  );
}

export default App;

