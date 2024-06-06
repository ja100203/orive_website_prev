import CookiesWebsite from '../cookies/CookiesWebsite'
import { useState, useEffect } from 'react'
import ReachUsForm from '../ReachusForm/form'



//MainFile
import arrow from '../../assets/arrow-top.png'
import facebook from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import Whatsapp from '../../assets/whatsapp.png'

import { useNavigate } from 'react-router-dom'

//AboutCompany
import aboutimg from '../../assets/about-img.png'
import quality from '../../assets/quality.png'
import flipkart from '../../assets/flipkart-logo-black-and-white 1.png'
import Nabal from '../../assets/Rectangle 5811.png'
import Hexcel from '../../assets/Rectangle 5812.png'
import Gowan from '../../assets/Rectangle 5813.png'
import Artal from '../../assets/Rectangle 5814.png'

import customerservices from '../../assets/customer-service.png'

//Card 
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import Orarrow from "../../assets/orange-arrow.png";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//Main
import { Blog } from "../Blog/Blog";
import Card1logo from "../../assets/ml.png";
import Card2logo from "../../assets/ds.png";
import Card3logo from "../../assets/fr.png";


//Quote
import axios from 'axios'
import Accordion from "../Accordian/Accordian";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Banner


import Banner from "../Banner/banner";

const HomePage = () => {
  const nav = useNavigate()
  const [open, setOpen] = useState(false)

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-ka-baap')) {
      setOpen(false)

      sessionStorage.setItem('formClosed', 'true')
    }
  }

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('modalShown')

    if (!hasModalBeenShown) {
      setTimeout(() => {
        setOpen(true)
      }, 1500)
      sessionStorage.setItem('modalShown', 'true')
    }
    const formClosed = sessionStorage.getItem('formClosed')

    if (!formClosed) {
      setOpen(true)

      sessionStorage.setItem('formOpened', 'true')
    }
  }, [])



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectService: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  };

  const diffToast = ()  =>
  {
    toast.success("Submitted Successfully!",{
      position: "top-center"
    });
  }

  const saveFormData = async () => {
    try {
      await axios.post(
        'http://localhost:8080/journalsdetails/create/journalsdetails',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      console.log('Form added successfully')

      setFormData({
        name: '',
        email: '',
        selectService: '',
        message: '',
      })
    } catch (error) {
      console.error('Error saving form', error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    saveFormData()

    const serviceId = 'service_okm7r3d';
    const templateId = 'template_19gdygy';
    const publicKey = 'EleEDMoCOOr6JB4zo';
  
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Orive',
      message: formData.message,
      selectService: formData.selectService

    };
    emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully', response);
      setFormData({
        name: '',
        email: '',
        selectService: '',
        message: '',
      });
    })
    .catch((error) => {
      console.log('Failed to send email', error);
    });
  }
const serviceData = [
    {
      label: 'Rice Mill',
      value: 'rice mill',
    },
    {
      label: 'ERP',
      value: 'erp',
    },
    {
      label: 'HRMS',
      value: 'hrms',
    },
    {
      label: 'LMS',
      value: 'lms',
    },
    {
      label: 'SMS',
      value: 'sms',
    },
  ]
  console.log(formData)

  return (
    <>


      {open && (
        <div className="modal-ka-baap" onClick={handleOverlayClick}>
          <div className="modal-div">
            <ReachUsForm setOpen={setOpen} />
          </div>
        </div>
      )}
      <CookiesWebsite />

      <div className="mainfile">
        <div className="top-main-page">
          <div className="all-logo-side">
            <div className="side-logo-main">
              <a href="https://www.facebook.com/orivesolutions">
                <img src={facebook} />
              </a>
            </div>
            <div className="side-logo-main">
              <a href="https://twitter.com/OriveSolutions">
                <img src={twitter} />
              </a>
            </div>
            <div className="side-logo-main">
              <a href="https://www.linkedin.com/in/orive-solutions-438a01296/">
                {' '}
                <img src={linkedin} />
              </a>
            </div>
            <div className="side-logo-main">
              <a href="https://www.instagram.com/orivesolutions/">
                <img src={instagram} />
              </a>
            </div>
            <div className="side-logo-main">
              <a href="https://wa.me/919777798142">
                <img src={Whatsapp} />
              </a>
            </div>
          </div>

          <div className="bigheader" id="header-big">
            <h1>Affordable Big IT & Technology Solutions</h1>
            <div className="paragraph">
              <p>
                Orive Solutions brings the innovative requirements, conduct
                through research, assess your needs, and consider consulting
                with IT professionals or experts to find the most suitable and
                cost-effective options for your business.
              </p>
            </div>

            <div className="button-consultation" type="button">
              <button className="rfc" onClick={() => nav('/reachus')}>
                Request Free Consultation{' '}
                <img src={arrow} className="arrow-top mb-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Abbout Company  */}

      <div>
        <marquee className="logos d-flex justify-content-center justify-content-evenly">
          <div className="logos-slide">
            <img src={flipkart} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Nabal} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Hexcel} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Gowan} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Artal} alt="" />
          </div>

          <div className="logos-slide">
            <img src={flipkart} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Nabal} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Hexcel} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Gowan} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Artal} alt="" />
          </div>

          <div className="logos-slide">
            <img src={flipkart} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Nabal} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Hexcel} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Gowan} alt="" />
          </div>

          <div className="logos-slide">
            <img src={Artal} alt="" />
          </div>
        </marquee>
      </div>

      <div className="about-company">
        <div className="img-content">
          <img src={aboutimg} alt="" className="about-img" />
        </div>

        <div className="text-content">
          <h6 className="center-ta-b-img">ABOUT OUR COMPANY</h6>

          <h2 className="center-ta-b-img">
            We formed the IT service in 2018 based on client requirements
          </h2>

          <p id="center-ta-b-img">
            We're not just service providers; we're strategic partners committed
            to propelling your business forward. Contact us for a transformative
            journey in the digital landscape.
          </p>

          <div className="sup-ex">
            <div className="card-learn-1">
              <img src={customerservices} alt="" className="customerservices" />
              <div className="support">
                <h2>24/7 User Support </h2>
                <p>
                  Our 24/7 services ensure you get assistance whenever you need
                  it. Your convenience, our commitment.
                </p>
              </div>
            </div>
            <div className="card-learn-2">
              <img src={quality} alt="" className="quality" />
              <div className="experience">
                <h2>5+ Years of experience</h2>

                <p>
                  Seasoned professional with 5+ years' expertise, delivering
                  excellence through a wealth of experience and skills.
                </p>
              </div>
            </div>
          </div>

          <div className="learn-more center-ta-b-img" type="button">
            <button className="lm-btn" onClick={() => nav('/who')}>
              Learn More
              <img src={arrow} className="arrow-top mb-2 mx-1" />
            </button>
          </div>
        </div>
      </div>


{/* Card  */}

<div className="main-p">
      <div className="text-card-home">
        <h
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
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
    "--swiper-navigation-color": "white",
    "--swiper-pagination-color": "rgba(247, 108, 36, 1)",
    "--swiper-pagination-bullet-color": "#00ff00",
    "--swiper-pagination-bullet-active-color": "#ff0000",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-active-size": "8px",
    "--swiper-pagination-bullet-spacing": "8px",
    "--swiper-navigation-size": "24px",
  }}
      >
        <SwiperSlide onClick={()=>nav('/erp')}>
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
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={()=>nav('/')}>
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
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={()=>nav('/hrms')}>
          <div className="card">
            <img
              className="card-ka-side-img"
              src={c3}
              alt="Card Image"
            />
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
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={()=>nav('/school')}>
          <div className="card">
            <img
              className="card-ka-side-img"
              src={c4}
              alt="Card Image"
            />
            <div className="card-content">
              <h2>SMS</h2>
              <p>
              Elevate education with our School Management System. Streamline operations, enhance communication, and empower learning. Your school, our expertise.
                <div className="arrow-div">
                  <div className="circle-arrow">
                    <img src={Orarrow} className="or-arr" />
                  </div>
                  <div
                    style={{
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
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
            <img
              className="card-ka-side-img"
              src={c5}
              alt="Card Image"
            />
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
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
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
            <img
              className="card-ka-side-img"
              src={c6}
              alt="Card Image"
            />
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
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "600",
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

                    {/* Main   */}
                    <div className="App">
      <div>
        <div className="text-blog-card-home">
          <p className="our-blog">OUR BLOG</p>
          <p className="our-blog-latest">Read our Latest Blogs</p>
        </div>
        <div className="col">
          <Blog
            imgSrc={Card1logo}
            alt="Card Image"
            imgAlt="Card Image 3"
            title="Machine Learning"
            description="Machine Learning Trends Shaping Tomorrow's Technology Landscape"
            buttonText="Read More"
            link="card2"
            author="Subham Parida"
            date="Jan 15, 2023"
          />
          <div style={{ margin: "0 60px" }}>
            <Blog
              imgSrc={Card2logo}
              alt="Card Image"
              imgAlt="Card Image 3"
              title="Data Science"
              description="From Data to Discovery: Navigating the World of Data Science"
              buttonText="Read More"
              link="card2"
              author="Subham Parida"
              date="Jan 15, 2023"
            />
          </div>
          <Blog
            imgSrc={Card3logo}
            alt="Card Image"
            imgAlt="Card Image 3"
            title="Fraud Detection"
            description="Demystifying Fraud Detection: A Simple Guide for Security"
            buttonText="Read More"
            link="card2"
            author="Subham Parida"
            date="Jan 15, 2023"
          />
        </div>
      </div>
    </div>



{/* Quote  */}
<div className="quote">
        <div className="form-s">
          <form action="" className="form-i" onSubmit={handleSubmit}>
            <h1>Get a Quote</h1>
            <div className="form-m">
              <label htmlFor="name"></label>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Your Name"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="email"></label>
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => handleInputChange(e)}
                placeholder="E-mail Address"
                name="email"
                id="email"
              ></input>
            </div>
            <div className="form-m">
              <select
                name="selectService"
                value={formData.selectService}
                onChange={(e) => handleInputChange(e)}
              >
                <option selected> Select Services</option>
                {serviceData.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="form-m">
              <textarea></textarea>
            </div>
            <div className="button-sub">
              <button type="submit" onClick={diffToast}>Submit</button>
            </div>
          </form>
        </div>

        <div className="sentence-d">
          <Accordion />
        </div>
      </div>

{/* Banner  */}
    <Banner/>

    </>
  )
}

export default HomePage
