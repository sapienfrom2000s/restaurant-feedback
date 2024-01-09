import { useState } from 'react'
import RatingSlider from './components/RatingSlider';
import Comment from './components/Comment'
import './App.css'
import './Navbar.css'
import './TextBox.css'
import './TextArea.css'
import './Range.css'
import './Button.css'
import DarkReader from './components/DarkRead'
import RatingNumber from './components/RatingNumber';

function App() {
  const [ratings, setRatings] = useState({
    foodQuality: 50,
    ambience: 50,
    valueForMoney: 50,
    hygieneAndSafety: 50,
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

  function handleToggle(event){
    console.log(event)
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
      <div className="dark-mode-switch">
      <DarkReader/>
      </div>
      <div className="background">
      </div>
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
          <RatingSlider
            label="Food Quality"
            value={ratings.foodQuality}
            onChange={(e) => handleRatingChange('foodQuality', e)}
          />
          <RatingSlider
            label="Ambience"
            value={ratings.ambience}
            onChange={(e) => handleRatingChange('ambience', e)}
          />
          <RatingSlider
            label="Value for Money"
            value={ratings.valueForMoney}
            onChange={(e) => handleRatingChange('valueForMoney', e)}
          />
          <RatingSlider
            label="Hygiene & Safety"
            value={ratings.hygieneAndSafety}
            onChange={(e) => handleRatingChange('hygieneAndSafety', e)}
          />
          <div className="ratingnumbers">
          <RatingNumber value={ratings.foodQuality} onChange={(e) => handleRatingChange('foodQuality', e) }/>
          <RatingNumber value={ratings.ambience} onChange={(e) => handleRatingChange('ambience', e)} />
          <RatingNumber value={ratings.valueForMoney} onChange={(e) => handleRatingChange('valueForMoney', e)} />
          <RatingNumber value={ratings.hygieneAndSafety} onChange={(e) => handleRatingChange('hygieneAndSafety', e)}/>
          </div>
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
    </div>
  );

}

export default App
