
import profileImg from './assets/profile__img.png'
import shareIcon from './assets/share.svg'
import dotsIcon from './assets/dots-horizontal.svg'
import slackIcon from './assets/slack.svg'
import githubIcon from './assets/github.svg'
import kodecampLogo from './assets/kodecamp logo.svg'
import kodeHauzLogo from './assets/KodeHauz Logo.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <button type="button">
          <img src={shareIcon} alt="share button"  className='share-btn'/>
          <img src={dotsIcon} alt="share button"  className='dots-btn'/>
        </button>
        <div className="profile">
          <img src={profileImg} alt="profile picture"  />
          <h3>John Doe</h3>
        </div>
      </header>
      <main>

        <div className="links">
          <a href="#">Twitter Link</a>
          <a href="#">KodeCamp Team</a>
          <a href="#">KodeCamp Books</a>
          <a href="#">Python Books</a>
          <a href="#">Background Check for Coders</a>
          <a href="#">Design books</a>
        </div>

        <div className="socials">
          <img src={slackIcon} alt="slack icon" />
          <img src={githubIcon} alt="github icon" />
        </div>
      </main>
      
      <footer>
        <img src={kodecampLogo} alt="logo" className='logo'/>
        <p>KodeCamp Internship Task</p>
        <img src={kodeHauzLogo} alt="kodehauz logo" className='kodehauz-logo'/>
      </footer>
    </>
  )
}

export default App
