import './App.css';
import QuoteBox from './components/QuoteBox.js'
import Button from './components/Button';

function App() {
  const getRandom = () =>{
    let randomNumber =  Math.trunc((Math.random())*100);
  }
  return (
    <div className="Background">
    <QuoteBox>
     
    </QuoteBox >
    <Button ></Button>
    </div>
  );
}

export default App;
