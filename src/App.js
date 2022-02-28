import './App.css';
import QuoteBox from './components/QuoteBox.js'
import Button from './components/Button';

function App() {
  const sendNumber = () =>{
     Math.trunc((Math.random())*100);
  }
  return (
    <div className="Background">
    <QuoteBox>
     
    </QuoteBox>
    <Button onClick={sendNumber}></Button>
    </div>
  );
}

export default App;
