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
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif', maxWidth: '300px', margin: '0 auto' }}>
  <h2 style={{ textAlign: 'center' }}>Activity Form</h2>
  <div style={{ marginBottom: '10px' }}>
    <label htmlFor="activity" style={{ display: 'block' }}>Name of Activity:</label>
    <input
      type="text"
      id="activity"
      value={activity}
      onChange={handleActivityChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label htmlFor="check" style={{ display: 'block' }}>Good Weather Activity:</label>
    <input
      id="check"
      type="checkbox"
      name="check"
      checked={isGoodWeatherCheckbox}
      onChange={handleWeatherChange}
      style={{ marginRight: '5px' }}
    />
  </div>
  <button
    type="submit"
    style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 15px', borderRadius: '3px', border: 'none' }}
  >
    Submit
  </button>
</form>
  )
}
