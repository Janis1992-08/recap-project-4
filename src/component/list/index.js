export function List({activities, isGoodWeather}) {
return (
<div>
<h2>{isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: "}</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} 
          </li>
        ))}
      </ul>
</div>
) 
}