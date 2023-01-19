import './App.css'
import Image from './assets/images/image-equilibrium.jpg';
import View from './assets/images/icon-view.svg';
import Icon from './assets/images/icon-ethereum.svg';
import Creater from './assets/images/image-avatar.png';

function App() {

  return (
    <div className="App">
      <div className="Card-container">
        <div className="image">
          <img className='img' src={Image} alt="Equilibrium" />
          <div className='overlay'>
            <img className='icon-view' src={View} alt="Equilibrium" />
          </div>
          {/*  */}
        </div>
        <div className='box'>
          <div className='name'>
            <h3>Equilibrium #3429</h3>
          </div>
          <div className='detail'>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </div>
        </div>
        <div className='cost'>
          <div className='icon'>
            <img src={Icon} alt='ethereum'/>
            <h4>0.041 ETH</h4>
          </div>
          <p>3 days left</p>
        </div>
        <div className='creator'>
          <img src={Creater} alt='avatar'/>
          <p>Creation of<span>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
