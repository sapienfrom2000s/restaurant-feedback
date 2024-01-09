export default function RatingSlider({ label, value, onChange }){

  return (
    <div className="field-box">
      <label>{label}</label>
      <div className='slider'>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={onChange}
      />
      </div>
    </div>
  );
}
