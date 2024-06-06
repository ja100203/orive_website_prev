import Soumya from '../../assets/Soumya.png'
import Hand from '../../assets/hand.png'
import Tick from '../../assets/Item.png'
import grp from '../../assets/grp-p.png'
import peo from '../../assets/div-p.png'
import rate from '../../assets/div-r.png'
import Dot from '../../assets/Ellips-e.png'
import Mission from '../../assets/missi.png'
import arrow from '../../assets/arrow-top.png'
import Banner from '../Banner/banner'
import { useNavigate } from 'react-router-dom'

const Who = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="Bann-w">
        <div className="top-main-w">
          <div className="who-A">
            <h1>Who We Are ?</h1>

            <div className="home-about-dot">
              <p>Home</p>
              <img src={Dot} alt="dot" />
              <p style={{ color: '#f76c24' }}>About</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-i">
        <div className="tes-m">
          <h6> OUR MISSION </h6>

          <h2>Empowering Business Excellence Through Innovate IT Solutions</h2>

          <p>
            <span>
              At Orive Solutions, our mission is to be the driving force behind
              business success by providing innovative and tailored IT
              solutions. We strive to empower organizations with cutting-edge
              technologies that enhance efficiency, foster innovation, and fuel
              sustainable growth. Our commitment is to be a trusted partner on
              every step of our clients' digital transformation journey.{' '}
            </span>
          </p>
          <div className="dir-m">
            <img src={Tick} alt="" className="direct" />
            <p>
              Delivering unparalleled IT solutions that exceed client
              expectations.
            </p>
          </div>
          <div className="dir-m">
            <img src={Tick} alt="" className="direct" />
            <p>
              Fostering a culture of innovation to stay ahead in the dynamic
              tech landscape.
            </p>
          </div>
          <div className="dir-m">
            <img src={Tick} alt="" className="direct" />
            <p>
              Building enduring partnerships based on trust, transparency, and
              mutual success.
            </p>
          </div>
          <div className="button-get" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              Get Started
              <img src={arrow} className="arrow-top" />
            </button>
          </div>
        </div>

        <div className="bg-img">
          <img src={Mission} alt="" className="mission-img" />
        </div>
      </div>
      <div className="story">
        <div className="story-o">
          <img src={grp} alt="" className="s-img" />
        </div>
        <div className="story-part">
          <div className="story-text">
            <h1>Our Story</h1>
            <p className="five-plus">
              5+ Years of Pioneering Excellence in IT Services
            </p>
            <p className="esta">
              Established in 2018, Orive Solutions has evolved into a dynamic
              force in the IT services sector. Over the past 5+ years, we have
              consistently delivered high-quality solutions, earning the trust
              of a diverse clientele. Our journey reflects a commitment to
              excellence, a passion for technology, and a dedication to the
              success of our clients.
            </p>
          </div>
          <div className="para-c">
            <div className="para-cc">
              <img src={peo} alt="" className="s-img-s" />
              <div className="par">
                {' '}
                <p className="my-auto">
                  We Have More Than 5+ Years of Experience
                </p>
              </div>
            </div>
            <div className="para-cc">
              <img src={rate} alt="" className="s-img-s" />
              <div className="par">
                {' '}
                <p className="my-auto">
                  We use professional and experienced person
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-v">
        <div className="hand-img-div">
          <img src={Hand} alt="" className="hand-img" />
        </div>

        <div className="text-v">
          <h6>OUR VISION</h6>

          <h2>Shaping the Future of Digital Transformation</h2>

          <p>
            <span>
              At Orive Solutions, we envision a future where we are at the
              forefront of digital evolution, setting industry standards and
              pioneering transformative technologies. Our vision is to be the
              go-to partner for businesses seeking innovative and sustainable IT
              solutions. We aspire to lead the way in anticipating and meeting
              the ever-changing needs of our clients in the rapidly evolving
              digital landscape.
            </span>
          </p>
          <div className="dir-v">
            <img src={Tick} alt="" className="direct" />
            <p>
              Setting industry benchmarks for innovation and technological
              excellence.
            </p>
          </div>
          <div className="dir-v">
            <img src={Tick} alt="" className="direct" />
            <p>
              Anticipating and adapting to emerging trends to stay ahead of the
              curve.
            </p>
          </div>
          <div className="dir-v">
            <img src={Tick} alt="" className="direct" />
            <p>
              Continuously enhancing our offerings to provide unparalleled value
              to clients.
            </p>
          </div>
          <div className="button-get" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              Get Started
              <img src={arrow} className="arrow-top" />
            </button>
          </div>
        </div>
      </div>
    
      <div className="cofounder">
        <div className='d-flex'>
          <div className="image-w">
            <img src={Soumya} className="team-u-img" alt="" />
          </div>
          <div className="dic-cont">
            <div className='director'>
              <p>
                {' '}
                Our Director Advocates: Transformative IT Solutions Beyond Expectations – 5+ Years of Trust, Innovation, and Client Satisfaction!
              </p>
            </div>
            <div className='founder'>
              <h4>Soumya Ranjan Rout</h4>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-w">
        <Banner></Banner>
      </div>
    </>
  )
}

export default Who
