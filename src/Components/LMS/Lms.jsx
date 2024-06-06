import Ipadi from '../../assets/iPad Pro Right View Mockup (1).png'
import Scho from '../../assets/Group 75 (1).png'
import Tick from '../../assets/Item.png'
import Dot from '../../assets/Ellips-e.png'
import School from '../../assets/Group 132 (2).png'
import Download from '../../assets/Vector.png'
import Arrow from '../../assets/arrow-top.png'
import GantLogo from '../../assets/Group 1000002119.png'
import Grp6 from '../../assets/Group 1421.png'
import Grp7 from '../../assets/Group 1422.png'
import Grp8 from '../../assets/Group 1425.png'
import Grp9 from '../../assets/Group 1426.png'
import Ghan from '../../assets/Group 1665 3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

const Who = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="Bann-ri-l">
        <div>
          <div className="who-ri-l">
            <h1>Library Management System</h1>

            <div className="home-about-dot-ri-l">
              <p>Product</p>
              <div className="dot-t">
                <img src={Dot} alt="" />
              </div>
              <p style={{ color: '#f76c24' }}>LMS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6> OUR PRODUCT </h6>

          <h2>
            Revolutionize Your Library with Our <br></br> Library Management
            System
          </h2>

          <p>
            At Orive Solutions, your all-in-one solution for modern library
            management. Streamline your library operations, enhance user
            experience, and unlock a new level of efficiency with our advanced
            Library Management System (LMS).
          </p>
          <div className="heading-ri-l">
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>User-friendly Interface</h3>
            </div>
            <div className="dir-m-ri-l">
              <p>
                Intuitive interface for librarians and patrons alike, making
                navigation and usage a breeze.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Real-time Book Tracking</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
                Track the location and status of books in real-time, reducing
                the chances of misplacement and enhancing library efficiency.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Enhanced User Experience</h3>
            </div>
            <div className="dir-m-ri-l">
              <p>
                Provide patrons with a user-friendly experience, increasing
                satisfaction and library usage.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Improved Accuracy</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
                Ensure accurate book tracking and inventory management,
                eliminating errors and inefficiencies.
              </p>
            </div>
          </div>
          <div className="button-get-r-l" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              <span style={{ textDecoration: 'none' }}>Get Started</span>
              <img src={Arrow} className="" />
            </button>
          </div>
        </div>

        <div className="scho-ir">
          <img src={School} alt="" />
        </div>
      </div>

      <div className="res-erp-l">
        <div className="feat-s-l">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p>Feature & Benefits</p>
          </div>

          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Keyboard, Navigation, Pagination]}
            className="mySwiper"
            style={{
              // Inline styles for arrow and pagination customization
              '--swiper-navigation-color': 'white',
              '--swiper-pagination-color': 'rgba(247, 108, 36, 1)',
              '--swiper-pagination-bullet-color': '#00ff00',
              '--swiper-pagination-bullet-active-color': '#ff0000',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-active-size': '8px',
              '--swiper-pagination-bullet-spacing': '8px',
              '--swiper-navigation-size': '24px',
            }}
          >
            <div className="card-e-l">
              <SwiperSlide>
                <div className="back-e-l">
                  <img src={Grp6} alt=""></img>
                  <div className="he-l">
                    <h4>Proven Track Records</h4>
                  </div>
                  <div className="hea-p-l">
                    <p id="font-l">
                      Orive Solution’s delivery track record is impeccable and
                      this significantly differentiates it from its competitors.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-e-l">
                  <img src={Grp7} alt=""></img>{' '}
                  <div className="he-l">
                    {' '}
                    <h4>Reliability and Stability</h4>
                  </div>
                  <div className="hea-p-l">
                    <p id="font-l">
                    Efficient operations, consistent performance, and robust infrastructure ensure reliable and stable library services for seamless user experience. </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="back-e-l">
                  <img src={Grp8} alt=""></img>
                  <div className="he-l">
                    <h4>ACCOUNTING</h4>
                  </div>
                  <div className="hea-p-l">
                    {' '}
                    <p id="font-l">
                      Our HRMS has demonstrated high system uptime and robust
                      performance, ensuring that critical HR processes run
                      smoothly without disruptions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-e-l">
                  <img src={Grp9} alt=""></img>{' '}
                  <div className="he-l">
                    <h4>GST READY</h4>
                  </div>
                  <div className="hea-p-l">
                    <p id="font-l">
                      Generate your GST reports automatically like GSR1, GSTR2,
                      GSTR3, GSTR2 completely and check with inbuilt self-audit
                      Tool and upload.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="about-v-r-l">
        <div className="rice-b-l">
          <img src={Scho} alt="" />
        </div>

        <div className="text-v-r-l">
          <h6>CORE MODULES</h6>

          <h2>Enhance Operations with Our Comprehensive Modules</h2>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Cataloguing</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Report Generator</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Circulation</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Database Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>System Administrator</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Transaction Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Book Acquisition Control</p>
          </div>
          <div className="button-get-ri-l" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              {' '}
              <span style={{ textDecoration: 'none' }}>Get Started</span>
              <img src={Arrow} className="" />
            </button>
          </div>
        </div>
      </div>

      <div className="res-erp-ri-l">
        <div className="feat-s-ri-l">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p>Welcome to Granthaghar </p>
          </div>
        </div>
        <div className="ipad-i-l">
          {' '}
          <img src={Ipadi} alt="" className="" />
        </div>
        <div className="ipad-para-l">
          <p>
            Welcome to Granthaghar's secure login interface! With an intuitive
            design, accessing your library management system is seamless. Our
            robust security measures, including password recovery and clear
            error handling, prioritize the safety of your data. Fully responsive
            on all devices and compliant with accessibility standards,
            Granthaghar ensures an inclusive and hassle-free login experience.
            Join us for streamlined library management right from your first
            login!
          </p>

          <h3>
            Revolutionize Your Library with Granthaghar - The Ultimate Library
            Management System
          </h3>
        </div>
      </div>

      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6>ADVANTAGES</h6>

          <h2>
            Granthaghar streamlines cataloging for easy organization of
            extensive collections.
          </h2>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              {' '}
              Intuitive design ensures a seamless experience for both librarians
              and patrons.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Monitor book location and status in real-time, minimizing
              misplacements.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              It offers modules catering to specific library needs, ensuring a
              customizable solution.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Automate processes, saving time and reducing operational costs for
              libraries.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Granthaghar adheres to industry standards, ensuring compatibility
              and reliability.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Generate tailored reports for informed decision-making and
              insights.
            </p>
          </div>
          <div className="grant-cont" style={{ width: '100%' }}>
            <img src={GantLogo} className="logo-r-l" />
          </div>
          <div className="button-get-r-l" type="button">
            <button>
              <span style={{ textDecoration: 'none' }}>Download Brochure</span>

              <img src={Download} className="down-r-l" />
            </button>
          </div>
        </div>

        <div className="groupE">
          <img src={Ghan} alt="" />
        </div>
      </div>
    </>
  )
}

export default Who
