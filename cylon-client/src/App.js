import { Button } from 'react-bootstrap';
import './App.css';
import react,{ useState } from 'react';

function App() {

  const [apiResponse, setApiResponse] = useState('');
  const setLEDConfiguration = () => {
    fetch('http://localhost:5000/cylonRoute/setLEDConfiguration')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const startLED = () => {
    fetch('http://localhost:5000/cylonRoute/startLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const stopLED = () => {
    fetch('http://localhost:5000/cylonRoute/stopLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const FlickerLED = () => {
    fetch('http://localhost:9000/cylonRoute/FlickerLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  return (
    <div className='App'>
      <Button variant="outline-primary" size = 'lg' onClick={setLEDConfiguration}>
      Configuring LED
    </Button> 
    <Button variant="outline-success" size = 'lg' onClick={startLED}>
      Start LED
    </Button> 
    <Button variant="outline-danger" size = 'lg' onClick={stopLED}>
      STOP LED
    </Button>
    <Button variant="outline-primary" size = 'lg' onClick={FlickerLED}>
      Flickering LED
    </Button>
    <p className='APP-state'>LED State is: {apiResponse}</p>
    </div>
  );
}

export default App;
