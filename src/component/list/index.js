export function List({ activities, isGoodWeather, onDeleteActivity }) {

  return (
    <div>
      <h3> {isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: "}</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}