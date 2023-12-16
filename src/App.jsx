import { useState } from 'react'
import RatingInput from './components/RatingInput';
import Comment from './components/Comment'
import './App.css'
import './Navbar.css'
import './TextBox.css'
import './TextArea.css'
import './Range.css'
import './Button.css'


function App() {
  const [ratings, setRatings] = useState({
    foodQuality: 3,
    ambience: 3,
    valueForMoney: 3,
    hygieneAndSafety: 3,
  });

  const [comment, setComment] = useState('')
  const [billId, setBillId] = useState('')

  function handleRatingChange(key, event){
    const newValue = parseInt(event.target.value);
    setRatings({
      ...ratings,
      [key]: newValue,
    });
  }

  function handlebillIdChange(event){
    setBillId(event.target.value);
  }

  return(
    <div className='page'>
    <ul>
    <li className='logo'>Oona</li>
    <div className='nav-right'>
    <li><a href="">Menu</a></li>
    <li><a href="">Reservations</a></li>
    <li><a href=''>Opening Hours</a></li>
    <li><a href="">Find Us</a></li>
    <li><a href="">Order</a></li>
    </div>
    </ul>
      <div className="content">
        <div className="box">
          <h2 className='content-header'>Your feedback is important to us!</h2>
          <div className='box-content'>
          <div className="field-box">
            <label htmlFor="billInput">Bill Id</label><br/>
            <input
              type="text"
              id="billInput"
              value={billId}
              onChange={handlebillIdChange}
            />
          </div>
          <RatingInput
            label="Food Quality"
            value={ratings.foodQuality}
            onChange={(e) => handleRatingChange('foodQuality', e)}
          />
          <RatingInput
            label="Ambience"
            value={ratings.ambience}
            onChange={(e) => handleRatingChange('ambience', e)}
          />
          <RatingInput
            label="Value for Money"
            value={ratings.valueForMoney}
            onChange={(e) => handleRatingChange('valueForMoney', e)}
          />
          <RatingInput
            label="Hygiene & Safety"
            value={ratings.hygieneAndSafety}
            onChange={(e) => handleRatingChange('hygieneAndSafety', e)}
          />
          <Comment 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
            <div className="button-box">
            <button>Submit</button>
            </div>
          </div>
          </div>
      </div>
      <div className="background">
      </div>
    </div>
  );

}

export default App
