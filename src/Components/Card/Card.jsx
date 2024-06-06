import { Swiper, SwiperSlide } from 'swiper/react'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import Orarrow from '../../assets/orange-arrow.png'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const nav = useNavigate()
  return (
    <div className="main-p">
      <div className="text-card-home">
        <h
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            textAlign: 'center',
          }}
        >
          WE PROVIDES SERVICES
        </h>
        <h2>The kind of services that our company provides to our clients.</h2>
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
        <SwiperSlide onClick={() => nav('/erp')}>
          <div className="card">
            <img
              className="card-ka-side-img"
              src={c1}
              alt="Card Image"
              id="img-1-ci"
            />
            <div className="card-content">
              <h2>ERP</h2>
              <p>
                ERP software meticulously utilizes all the resources in the
                industry to ensure that these operations are executed
                successfully and keeps the workflow smoother.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => nav('/')}>
          <div className="card">
            <img className="card-ka-side-img" src={c2} alt="Card Image" />
            <div className="card-content">
              <h2>CRM</h2>
              <p>
                CRM software manage customer email,phone numbers,live chat,
                company website,and social media to company data from these
                channels to improve sales.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => nav('/hrms')}>
          <div className="card">
            <img className="card-ka-side-img" src={c3} alt="Card Image" />
            <div className="card-content">
              <h2>HRM</h2>
              <p>
                Effective HRM contributes to the overall success of an
                organization by aligning its human resources with its business
                strategies and objectives.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => nav('/school')}>
          <div className="card">
            <img className="card-ka-side-img" src={c4} alt="Card Image" />
            <div className="card-content">
              <h2>SMS</h2>
              <p>
                Delivering bulk SMS (Short Message Service) involves sending a
                large number of text messages simultaneously to a group of
                recipients.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-ka-side-img" src={c5} alt="Card Image" />
            <div className="card-content">
              <h2>Web Development</h2>
              <p>
                Our Team will help you in creating a website that is visually
                appealing, while at the same time ensuring that it is easy to
                use, fast loading, and properly optimized for search engines.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="card-ka-side-img" src={c6} alt="Card Image" />
            <div className="card-content">
              <h2>Mobile Apps</h2>
              <p>
                Delivering business startup products involves the process of
                bringing your products to market and providing them to your
                customers in a way that meets their needs...
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: 'rgba(247, 108, 36, 1)',
                      fontWeight: '600',
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Card
