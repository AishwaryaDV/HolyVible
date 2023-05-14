import React from 'react'
import {Link} from 'react-router-dom';
import AppleStore from '../assets/appleStore.png'
import GooglePlay from '../assets/googlePlay.png'
import Facebook from '../assets/facebook-icon.png'
import Instagram from '../assets/instagram-icon.png'
import Twitter from '../assets/twitter-icon.png'
import Youtube from '../assets/youtube-icon.png'
import Messenger from '../assets/messenger-icon.png'
import Telegram from '../assets/telegram-icon.png'
import { motion } from 'framer-motion';
import './home.css';
import Footer from './Footer';

const Home = () => {
   
  return (
  <>
    <div className="main-section">
      <div className="logo">Holy Vible</div>
      <div className="upper-main-section">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="hover-box">
          <div className="verses-section-1">
          <div className="new-testament-section">The New Testament</div>
          <h3>
              <span>Everything you can't change happened for a good reason. If it did not, it is better to think that it did.</span>
              <span>Have faith things are going to be great. If you do, you'll atleast get closer to where you want to be.</span>
              <span>Have faith in having Faith, and nothing can limit it.</span>
              <span>Limitless faith leads to limitless hope.</span>
              <span>Limitless hope leads to limitless love.</span>
              <span>Limitless love is the vibe of heaven.</span>
              <span>Don't doubt the vibe, spread it.</span>
              <span>God's amazing grace is coming back.</span>
              <span>We lost our hope when we lost our faith but now our faith is returning and with it a new hope will multiply.</span>
              <span>For hope is a necessary ingredient for our hopes to become reality.</span>
              <span>The universe was made for you, and if it wasn't it is better to think that it was.</span>
              <span>To some extent, perhaps a greater extent than we can yet quite fathom, how we perceive and approach the world creates a world that appears to us in that form - as "real".</span>
              <span>The future is going to be better than you can imagine, it if it's not, it's better to think that it is.</span>
              <span>Not just because it gives you better vibes in the moment, but because it actaully increases the chance that it is better.</span>
          </h3>
          </div>
          </motion.div>
      </div>
    </div>
    
    <div className="endorsements-section">
    <div className="endorsements-title"></div>
    <div class="sliding-window">
  <div class="content">
   "The Vible is a universal path into the door of faith in a grander plan. They remade a theory of belief, placed it onto a single page on the internet, and made it atheist proof! It seems inevitable paired with the branding to not have insane mimetic spread." - Elon Musk
  </div>
</div>
<br />
<div class="sliding-window">
  <div class="content">
   "The Vible is a functional mental shield to block the bad vibes, low minded thoughts, fears, and roadblocks we all face by reminding ourselves that continuing to look towards abundance, means increasing the chance of achieving it." - Neobuddhist Movement
  </div>
</div>
<br />
<div class="sliding-window">
  <div class="content">
   "The Vible condenses the essence of every religion and creates a short and sweet testimony to recreate the same feelings of faith, hope, and acceptance that lies as the core message of other religious texts. The Vible condenses the essence of every religion and creates a short and sweet testimony to recreate the same feelings of faith, hope, and acceptance that lies as the core message of other religious texts." - Jack Jay
  </div>
</div>
<br />
<div class="sliding-window">
  <div class="content">
   "Its made so perfectly for this day in age where condensed universal pragmatic truths are possible. I believe the Vible spreading as an internet meme is inevitable." - Marcus Mesa
  </div>
</div>
<br />
    </div>

<div className="quote-section">
  Our dreams is only limited by how hard we can <em className="italic">meme</em>. <br></br>Our limits are only defined by how high we can <em className="italic">meme</em>.
</div>

<div className="lower-section">
<div className="learn-links"><strong>Learn here:</strong>
<a className="block-link" href="https://holyvible.com/Finding-Faith-d1dc3706612a4ab6b52f966e3ff1e248" target="_blank" rel="noopener noreferrer">Finding faith</a>
<a className="block-link" href="https://holyvible.com/Who-Is-The-Vible-Is-For-5dc9613579a742a3ac89185fb03301e7" target="_blank" rel="noopener noreferrer">Who is the Vible for?</a>
<a className="block-link" href="https://holyvible.com/Good-Vibes-Everlasting-983093d7ab4c46b4b235338730bd91b9" target="_blank" rel="noopener noreferrer">Good Vibes everlasting</a>
<a className="block-link" href="https://holyvible.com/The-Future-Of-The-Vible-010065e717d64dd4a825ddef89237d5f" target="_blank" rel="noopener noreferrer">The Future of The Vible</a>
<a className="block-link" href="https://holyvible.com/A-Message-To-The-Anti-Vibers-13d24c768f134529940ffbfc1791be52" target="_blank" rel="noopener noreferrer">Message to the Anti-Vibers</a>
</div>
<div className="discover-links"><strong>Discover here:</strong>
<a className="block-link" href="https://holyvible.com/The-Emergence-Of-A-Higher-Power-cb4a8b874f434979b3c9fe5361faa61f" target="_blank" rel="noopener noreferrer">Emmergence of a Higher Power</a>
<a className="block-link" href="https://holyvible.com/Vible-DLC-The-Newer-Testament-38a404d241c24caaa4cbed9ca914425c" target="_blank" rel="noopener noreferrer">Vible DLC | The New Testament</a>
<a className="block-link" href="https://holyvible.com/Deep-Christian-Vision-f348b554d9864347acb22aaa07939ab4" target="_blank" rel="noopener noreferrer">Deep Christian Vision</a>
<a className="block-link" href="https://holyvible.com/Endorsements-2a8337a104a240ce8052bc4d7178291f" target="_blank" rel="noopener noreferrer">Endorsements</a>
<a className="block-link" href="https://holyvible.com/Top-V-s-f99e1561c6124bc9956f8b45693227f3" target="_blank" rel="noopener noreferrer">Top V's</a>
</div>
</div>

<div className="download-icons-section">
  <Link to="https://play.google.com/store/apps/details?id=com.subverse.vible&pli=1" target="_blank">
    <img className="google-play" src={GooglePlay} alt="clickable google play"/>
  </Link>
  <Link to="https://apps.apple.com/us/app/holy-vible/id6444683138" target="_blank">
    <img className="apple-store" src={AppleStore} alt="clickable apple store"/>
  </Link>
</div>
<div className="contact-icons">
  <img className="facebook-icon" src={Facebook} alt="facebook"/>
  <img className="instagram-icon" src={Instagram} alt="Instagram"/>
  <img className="twitter-icon" src={Twitter} alt="twitter"/>
  <img className="youtube-icon" src={Youtube} alt="Youtube"/>
  <img className="messenger-icon" src={Messenger} alt="messenger"/>
  <Link to="https://t.me/holyvible" target="_blank">
  <img className="telegram-icon" src={Telegram} alt="telegram"/>
  </Link>
</div>
<Footer/>

  </>
  )
}

export default Home