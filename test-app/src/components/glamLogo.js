import "../styles/Logo.css"
import "../styles/Header.css"
import glamLogoPic from '../glamLogo.png';

const GlamLogo = () => {

  return (
    <div className="header">

      <img src={glamLogoPic} className="logo" alt="logo" />

    </div>
  )

}

export default GlamLogo