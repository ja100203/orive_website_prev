import Ipads from '../../assets/iPad Pro Right View Mockup.png'
import Scll from '../../assets/sc-g.png'
import Tick from '../../assets/Item.png'
import Dot from '../../assets/Ellips-e.png'
import Scl from '../../assets/sc-g1.png'
import Download from '../../assets/Vector.png'
import Arrow from '../../assets/arrow-top.png'
import VidLogo from '../../assets/vid-s.png'
import Grp6 from '../../assets/Group 1421.png'
import Grp7 from '../../assets/Group 1422.png'
import Grp8 from '../../assets/Group 1425.png'
import Grp9 from '../../assets/Group 1426.png'
import Dashs from '../../assets/Dash-s.png'
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
      <div className="shsc">
        <div>
          <div className="who-ri-l">
            <h1>School Management System</h1>

            <div className="home-about-dot-ri-l">
              <p>Product</p>
              <div className="dot-t">
                {' '}
                <img src={Dot} alt="" />{' '}
              </div>
              <p style={{ color: '#f76c24' }}>SMS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6> OUR PRODUCT </h6>

          <h2>
            Streamline School Operations with Our Advanced Management System
          </h2>

          <p>
            At Orive Solutions, your all-in-one solution for efficient school
            management. Revolutionize the way your institution operates with our
            comprehensive suite of tools designed to enhance administrative
            processes, foster communication, and elevate overall efficiency.
          </p>
          <div className="heading-ri-l">
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l-l" />
              <h3>Integrated Administration</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
                Seamlessly manage various administrative tasks, including
                admissions, attendance, and staff management, through a unified
                and integrated platform.
              </p>
            </div>

            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l-l" />
              <h3>Financial Management</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
                Efficiently handle budgeting, accounting, and financial
                transactions within the school, providing a comprehensive
                financial overview for better decision-making.
              </p>
            </div>

            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l-l" />
              <h3>Customizable Reporting and Analytics</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
                Generate detailed reports and analytics on student performance,
                attendance trends, and other key metrics, with the ability to
                customize reports based on specific school requirements.
              </p>
            </div>
          </div>
          <div className="button-get-r-l" type="button">
            <button style={{ textDecoration: 'none' }}>
              <span style={{ textDecoration: 'none' }}>Schedule Demo</span>
              <img src={Arrow} className="arrow-top-r-l" />
            </button>
          </div>
        </div>

        <div className="scho-ir">
          <img src={Scl} alt="" className="" />
        </div>
      </div>

      <div className="res-erp-l">
        <div className="feat-s-l">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p>Feature & Benefits</p>
          </div>
          <div style={{ padding: '0 20px' }}>
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
                        this significantly differentiates it from its
                        competitors.
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
                      Our School Management System ensures reliability and stability with robust features, secure data handling, and consistent performance for institutions. </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="back-e-l">
                    <img src={Grp8} alt=""></img>
                    <div className="he-l">
                      <h4>Result Oriented Delivery</h4>
                    </div>
                    <div className="hea-p-l">
                      {' '}
                      <p id="font-l">
                        delivers faster with better mapping due to industry
                        experience and proven methodology.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="back-e-l">
                    <img src={Grp9} alt=""></img>{' '}
                    <div className="he-l">
                      <h4>Continuous Improvement</h4>
                    </div>
                    <div className="hea-p-l">
                      {' '}
                      <p id="font-l">
                        Our commitment to continuous improvement is evident in
                        our regular software updates and enhancements.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="about-v-r-l">
        <div className="rice-b-l">
          <img src={Scll} alt="" className="hand-img-r-l" />
        </div>

        <div className="text-v-r-l">
          <h6>BENEFITS</h6>

          <h2>
            Unlocking Efficiency and Growth: The Benefits of ERP Software for
            School Management
          </h2>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Student Information System</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Event Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Fees Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Library Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Staff Management </p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Course Acquisition </p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>System Administration</p>
          </div>
          <div className="button-get-ri-l" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              <span style={{ textDecoration: 'none' }}>Get Started</span>
              <img src={Arrow} className="arrow-top-r-l " />
            </button>
          </div>
        </div>
      </div>

      <div className="res-erp-ri-l">
        <div className="feat-s-ri-l">
          <h6>CHECK OUT</h6>
          <div>
            <p>Welcome to Vidyakshetra</p>
          </div>
        </div>
        <div className="ipad-i-l">
          <img src={Ipads} alt="" className="" />
        </div>
        <div className="ipad-para-l">
          <p>
            Your gateway to streamlined education management. Our login
            interface ensures secure access for administrators, teachers, and
            Students/Parents. Experience seamless navigation and a user-friendly
            design, empowering you to manage school activities effortlessly.
            Join Vidyakshetra for a connected educational journey where
            efficiency meets simplicity. Unlock the potential of your school
            with our intuitive login interface.
          </p>

          <h3>
            Elevate your school's potential with Vidyakshetra. Revolutionize
            your school management system today!
          </h3>
        </div>
      </div>

      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6> ADVANTAGES</h6>

          <h2>Advantages of Our School Management System</h2>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Vidyakshetra automates tasks, saving time and reducing operational
              costs for schools.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Adapt Vidyakshetra to specific school requirements with scalable
              and customizable features.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Organize and track library resources efficiently.</p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Easily generate and share digital receipts for transactions.</p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Get educational trends through regular updates, backed by
              dedicated customer support.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Keep the school community engaged with Vidyakshetra's event
              calendar for upcoming activities.
            </p>
          </div>
          <div className="grant-cont" style={{ width: '100%' }}>
            <img src={VidLogo} className="logo-r-l" />
          </div>
          <div className="button-get-r-l" type="button">
            <button>
              <span style={{ textDecoration: 'none' }}>Download Brochure</span>

              <img src={Download} className="down-r-l" />
            </button>
          </div>
        </div>

        <div className="groupE">
          <img src={Dashs} alt="" className="" />
        </div>
      </div>
    </>
  )
}

export default Who
