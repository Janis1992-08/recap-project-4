export function List({ activities, isGoodWeather }) {
  return (
    <div>
      <h3> {isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: "}</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name}
          </li>
        ))}
      </ul>
    </div>
  );
}