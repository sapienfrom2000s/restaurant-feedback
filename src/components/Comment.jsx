export default function Comment({value, onChange }){
  
    return (
      <div className='field-box'>
        <label>Remarks</label><br/>
        <textarea
          rows='5'
          value={value}
          onChange={onChange}
        />
      </div>
    );
}
