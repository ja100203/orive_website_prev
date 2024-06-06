import axios from 'axios'
import { useState } from 'react'
import Dot from '../../assets/Ellips-e.png'
import line from '../../assets/Vector 2.png'
import line1 from '../../assets/Vector 1.png'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectService: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        'http://localhost:8080/reachus/create/reachus',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Form added successfully');

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        selectService: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saving form', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveFormData();
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
  };

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
  ];
  console.log(formData);

  return (
    <>

      <div className="Bann-y">
        <div className="top-main-y">
          <div className="who-y">
            <h1>Reach Us</h1>

            <div className="home-about-dot-y">
              <p>Home</p>
              <img src={Dot} alt="dot" />
              <p style={{ color: '#f76c24' }}>Reach Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="journal-blog-y">
        <div className="form-y">
          <form action="" className="form-iy" onSubmit={handleSubmit}>
            <h1>Reach Us</h1>

            <div className="form-m">
              <label htmlFor="name"></label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="email"></label>
              <input
                type="email"
                autoComplete="off"
                placeholder="Enter E-mail Address"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="number"></label>
              <input
                type="number"
                autoComplete="off"
                placeholder="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange(e)}
                required
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
              <label htmlFor="message"></label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
            </div>
            <div className="button-sub">
              <button className="who-btn-gs" type="submit" onClick={diffToast}>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="midcontact">
          <img src={line1} alt="" />
        </div>
        <div className="contactRight">
          <div className="contactTxt">
            <p className="reach-p"> Address:</p>

            <p className="contactDesc">
              DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia,
              Bhubaneswar, Odisha 751024,India
            </p>
          </div>
          <img src={line} alt="" />
          <div className="contactTxt">
            <p className="reach-p">Phone Number:</p>

            <p className="contactDesc">+91-9777798142</p>
          </div>
          <img src={line} alt="" />

          <div className="contactTxt">
            <p className="reach-p"> Email Us:</p>

            <p className="contactDesc">
              {' '}
              orivesolutions@gmail.com
              <br />
              info@orivesolutions.com
            </p>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.806980060215!2d85.80528587508611!3d20.349591081135276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d501f96465%3A0xb57ff80bdaa3d1c5!2sOrive%20Solutions!5e0!3m2!1sen!2sin!4v1708627409618!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      
    </>
  )
}

export default ReachUs
