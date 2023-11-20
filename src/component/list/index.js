

export function List({activities}) {
return (
<div>
<h2>Activities:</h2>
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