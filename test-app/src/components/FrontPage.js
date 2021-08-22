import glamLogo from '../glamLogo.png';
import '../styles/Logo.css'
import '../styles/App.css';
import InstagramButton from './InstagramButton.js';
import AboutButton from './AboutButton.js';

const FrontPage = () => {
  return (
    <div>
      <header className="App-header">

      <AboutButton />
      <InstagramButton />

        <img src={glamLogo} className="App-logo" alt="logo" />
        <p>
          Site created and maintained by Tuukka Ullakko.
        </p>

      </header>
    </div>
  )

}

export default FrontPage;