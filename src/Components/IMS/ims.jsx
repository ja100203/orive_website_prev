import Ipadi from '../../assets/Group 1000002132.png'
import Scho from '../../assets/Group-l.png'
import Tick from '../../assets/Item.png'
import Dot from '../../assets/Ellips-e.png'
import School from '../../assets/Group-ppl.png'
import Download from '../../assets/Vector.png'
import Arrow from '../../assets/arrow-top.png'
import GantLogo from '../../assets/Group 1000002119.png'
import Grp6 from '../../assets/Group 1421.png'
import Grp7 from '../../assets/Group 1422.png'
import Grp8 from '../../assets/Group 1425.png'
import Grp9 from '../../assets/Group 1426.png'
import Ghan from '../../assets/Group 1000002131 1.png'
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
      <div className="Bann-ri-lms">
        <div>
          <div className="who-ri-l">
            <h1>Inventory Management System</h1>

            <div className="home-about-dot-ri-l">
              <p>Product</p>
              <div className="dot-t">
                <img src={Dot} alt="" />
              </div>
              <p style={{ color: '#f76c24' }}>IMS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6> OUR PRODUCT </h6>

          <h2>
          Elevate Operations, Elevate Profits: Orive IMS Solutions
          </h2>

          <p>
            Discover a new era of inventory control with Orive Solutions. Our
            Inventory Management Software (IMS) is tailored to elevate your
            business operations. Seamlessly manage stock, optimize workflows,
            and gain real-time insights.
          </p>
          <div className="heading-ri-l">
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>User-friendly Interface</h3>
            </div>
            <div className="dir-m-ri-l">
              <p>
              Intuitive interface for librarians and patrons alike, making navigation and usage a breeze.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Streamlined Operations</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
              Track the location and status of books in real-time, reducing the chances of misplacement and enhancing library efficiency.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Enhanced User Experience</h3>
            </div>
            <div className="dir-m-ri-l">
              <p>
              Provide patrons with a user-friendly experience, increasing satisfaction and library usage.
              </p>
            </div>
            <div className="heading-points">
              <img src={Tick} alt="" className="direct-r-l" />
              <h3>Improved Accuracy</h3>
            </div>

            <div className="dir-m-ri-l">
              <p>
              Ensure accurate book tracking and inventory management, eliminating errors and inefficiencies.
              </p>
            </div>
          </div>
          <div className="button-get-r-l" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              <span style={{ textDecoration: 'none' }}>Schedule Demo</span>
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
                      Reliable IMS ensures stable operations, preventing errors,
                      data loss, and downtime, fostering trust in seamless,
                      uninterrupted inventory management processes.
                    </p>
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
                      Delivers Faster With Better Mapping Due to Industry
                      Experience And Proven Methodology
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
                      Our commitment to continuous improvement is evident in our
                      regular software updates and enhancements.
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
            <p>Product Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Order Processing</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Circulation</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Inventory Tracking</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>System Administrator</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Buyers and Supplier Management</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Reports and Analytics</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Barcode Scanning</p>
          </div>
          <div className="dir-v-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>Payment Gateway Integration</p>
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

      <div className="res-erp-ri-lms">
        <div className="feat-s-ri-l">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p>Welcome to IMS </p>
          </div>
        </div>
        <div className="ipad-i-l">
          {' '}
          <img src={Ipadi} alt="" className="" />
        </div>
        <div className="ipad-para-l">
          <p>
            Welcome to our cutting-edge Inventory Management System! Take
            control of your inventory effortlessly through our user-friendly
            login interface on the website. Our robust software-as-a-service
            ensures seamless tracking and optimization, empowering you to
            streamline operations and enhance efficiency. Experience the future
            of inventory management with us!{' '}
          </p>

          <h3>
          Empower Your Business, Master Your Inventory: Seamless Solutions, Effortless Control! </h3>
        </div>
      </div>

      <div className="mission-ri-l">
        <div className="tes-m-ri-l">
          <h6>ADVANTAGES</h6>

          <h2>Advantages of Our Inventory Management System</h2>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              {' '}
              Simplifies inventory processes, reducing manual effort and
              preventing errors.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Ensures precise financial records, billing, and invoicing for
              transparent operations.
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
              Offers reports and analytics for informed decision-making on sales
              and inventory trends.ndustry standards, ensuring compatibility and
              reliability.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Reduces time for inventory tasks, improving operational
              efficiency.
            </p>
          </div>
          <div className="dir-m-r-r-l">
            <img src={Tick} alt="" className="direct-r-l" />
            <p>
              Maintains optimal inventory levels, ensuring a healthy cash flow
              for the business.
            </p>
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
