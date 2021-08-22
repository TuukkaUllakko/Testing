import '../styles/Logo.css'
import '../styles/Bg.css';
import InstagramButton from './InstagramButton.js';
import AboutButton from './AboutButton.js';
import GlamLogo from './GlamLogo.js';

const Header = () => {

  return (
    <div className="header">

      <AboutButton />

      <InstagramButton />

      <GlamLogo />

    </div>
  )
}

export default Header