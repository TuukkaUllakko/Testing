import logo from '../logo.svg';
import '../styles/Logo.css'
import '../styles/App.css';
import Button from './Button.js';

const FrontPage = () => {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <Button />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  )

}

export default FrontPage;