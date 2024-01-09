export default function RatingNumber({value, onChange}){

  return (
    <>
      <input type="number" name="slider" id="slider" min={0} max={100} value={value} onChange={onChange}/>
    </>
  );
}
