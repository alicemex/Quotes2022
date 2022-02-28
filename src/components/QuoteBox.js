import React, {useState} from 'react';
import '../App.css';
import quotes from '../quotes.json'

const QuoteBox  = () => {
const [random, setRandom] = useState(Math.trunc((Math.random())*100));

const getRandom = () =>{
  let randomNumber =  Math.trunc((Math.random())*100);
  setRandom(randomNumber); 
}
const colors =["#845EC2","#2C73D2","#D65DB1","#FF6F91","#FF9671", "#00C9A7"];
const color = colors[Math.floor(Math.random()*6)];
document.body.style =`background: ${color}`;

return (
        <div className='Card' style={{color:color}} >
            <h3><i className="fa-solid fa-quote-left"></i>
            {quotes[random].quote}</h3> 
            <p>{quotes[random].author}</p>
            <button className='Button' style={{background:color}} onClick={getRandom}> <i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default QuoteBox ;