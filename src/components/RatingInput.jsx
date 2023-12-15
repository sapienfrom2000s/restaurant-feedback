export default function RatingInput({ label, value, onChange }){
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div>
      <label>{label}:</label>
      <div>
        {ratings.map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              name={label}
              value={rating}
              checked={value === rating}
              onChange={onChange}
            />
            {console.log(typeof(value))}
            {rating}
          </label>
        ))}
      </div>
    </div>
  );
}
