import React, { useState } from 'react';

export function Form({ onAddActivity, setIsGoodWeather }) {
  const [activity, setActivity] = useState('');
  const [isGoodWeatherCheckbox, setIsGoodWeatherCheckbox] = useState(false); // Zustand für die Checkbox

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleWeatherChange = (event) => {
    setIsGoodWeatherCheckbox(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isGoodWeather = isGoodWeatherCheckbox; // Verwende den Checkbox-Zustand
    const newActivity = {
      name: activity,
      isGoodWeather: isGoodWeather,
    };

    onAddActivity(newActivity);
    setActivity('');

    // Ändere den Zustand von isGoodWeather basierend auf dem Checkbox-Wert
    setIsGoodWeather(isGoodWeather);

    event.target.reset(); // Zurücksetzen nach dem Absenden

    // Fokussiere auf das erste Eingabefeld
    const formElements = event.target.elements;
    if (formElements && formElements.length > 0) {
      formElements[0].focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Activity Form</h2>
      <div>
        <label htmlFor="activity">Name of Activity:</label>
        <input type="text" id="activity" value={activity} onChange={handleActivityChange} />
      </div>
      <div>
        <label htmlFor="check">Good Weather Activity:</label>
        <input
          id="check"
          type="checkbox"
          name="check"
          checked={isGoodWeatherCheckbox}
          onChange={handleWeatherChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
