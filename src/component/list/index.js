export function List({activities, isGoodWeather}) {
return (
<div>
<h2>Activities for {isGoodWeather ? "Good" : "Bad"} Weather: </h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} - Good Weather: {activity.isGoodWeather ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
</div>
) 
}