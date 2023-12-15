export default function Comment({value, onChange }){
  
    return (
      <div>
        <label>Additional Feedback:</label>
        <textarea
          value={value}
          onChange={onChange}
        />
      </div>
    );
}
