export default function RatingInput({ label, value, onChange }){

  return (
    <div className="field-box">
      <label>{label}</label>
      <div className='slider'>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={onChange}
      />
      </div>
    </div>
  );
}
