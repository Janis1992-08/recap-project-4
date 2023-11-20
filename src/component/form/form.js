
import { useState } from 'react';




export function Form({ onAddActivity }) {
    const [activity, setActivity] = useState('');
    const [isGoodWeather, setIsGoodWeather] = useState(false)

      const handleActivityChange = (event) => {
        setActivity(event.target.value);
      };
    
      const handleWeatherChange = (event) => {
        setIsGoodWeather(event.target.checked);
      };
    
      const handleSubmit = (event => {
        event.preventDefault();
        const newActivity = {
          name: activity,
          isGoodWeather: isGoodWeather,
        };
        onAddActivity(newActivity);
        setActivity('');
        setIsGoodWeather(false);
      });
    
    return (
        <form onSubmit={handleSubmit}>
          <h2>Activity Form</h2>
          <div>
            <label htmlFor="activity">Name of Activity:</label>
            <input
              type="text"
              id="activity"
              value={activity}
              onChange={handleActivityChange}
            />
          </div>
          <div>
            <label htmlFor="check">
              Good Weather Activity: 
              </label>
              <input
              id="check"
                type="checkbox"
                checked={isGoodWeather}
                onChange={handleWeatherChange}
              />
          </div>
          <button type="submit">Submit</button>
        </form>);




};

