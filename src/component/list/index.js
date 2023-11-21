export function List({ activities, isGoodWeather, onDeleteActivity }) {

  return (
    <div>
     <h3 style={{ color: isGoodWeather ? '#28a745' : '#dc3545' }}>
  {isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: "}
</h3>
<ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {activities.map((activity) => (
    <li
      key={activity.id}
      style={{
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f7f7f7',
        width: '20%',
        textAlign: 'center'
      }}
    >
      <span style={{ marginRight: '10px' }}>{activity.name}</span>
      <button
        onClick={() => onDeleteActivity(activity.id)}
        style={{
          padding: '5px 10px',
          borderRadius: '3px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
}