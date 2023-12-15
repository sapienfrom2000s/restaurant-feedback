import { useState } from 'react'
import RatingInput from './components/RatingInput';
import Comment from './components/Comment'
import './App.css'

function App() {
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    ambience: 0,
    valueForMoney: 0,
    hygieneAndSafety: 0,
  });

  const [comment, setComment] = useState('')


  function handleRatingChange(key, event){
    const newValue = parseInt(event.target.value);
    setRatings({
      ...ratings,
      [key]: newValue,
    });
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
    </div>
    </ul>
      <div className="content">
      <h2>Restaurant Feedback</h2>
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
    </div>
    </div>
  );

}

export default App
