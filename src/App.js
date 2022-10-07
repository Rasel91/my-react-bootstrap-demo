import './App.css';
import { Button, CardGroup } from 'react-bootstrap';
import Header from './components/Header/Header';
import CardGroups from './components/CardGroup/CardGroups';


function App() {
  return (
    <div className="App">
      
      <button> My Normal button</button>
      {/* Import button form other components */}
      {/* Apply the React Bootstap Please see the Video No:51-2 Install React Bootstrap in your react application */}
      <Header></Header>
      <CardGroups></CardGroups>
    </div>
  );
}

export default App;
