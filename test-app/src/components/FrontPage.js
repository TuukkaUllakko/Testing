import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/Button.css';
import Button from './Button.js';

const FrontPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      <Button/>
      
      </header>
    </div>
  )

}

export default FrontPage;