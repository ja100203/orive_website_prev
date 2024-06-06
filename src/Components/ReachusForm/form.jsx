import axios from "axios";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReachUsForm = ({setOpen}) => {
  const [select,setSelect] = useState("")



  const [formData, setFormData] = useState({
    selectOne: "",
    name: "",
    designation: "",
    organisationName: "",
    email: "",
    phoneNumber: "",
    selectService: "",
    message: "",
    city: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
      selectOne:select
    })
  }

  console.log(formData)

  const saveForm = async () => {
    {
      toast.success("Submitted Successfully!",{
        position: "top-center"
      });
    }
  
    try {
      await axios.post(
        "http://localhost:8080/landingpagepopup/create/landingpagepopup",
        formData
      );
      alert("Thank You!");
      console.log("Form added successfully");
    } catch (error) {
      console.error("Error saving form", error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    saveForm();
    const serviceId = 'service_okm7r3d'
    const templateId = 'template_qhdliy8';
    const publicKey = 'EleEDMoCOOr6JB4zo';
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Orive',
      message: formData.message,
      designation: formData.designation,
      organisationName: formData.organisationName,
      selectService: formData.selectService,
      city: formData.city,
    phoneNumber: formData.phoneNumber
    };
    emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully', response);
      setFormData({
        name: '',
        email: '',
        selectOne: '',
        selectService: '',
        message: '',
        designation:'',
        organisationName:'',
        city:'',
        phoneNumber:''

      });
    })
    .catch((error) => {
      console.log('Failed to send email', error);
    });
  };

  const serviceData = [{
    label:"Rice Mill",
    value:"rice mill"
  },
  {
    label:"ERP",
    value:"erp"
  },
  {
    label:"HRMS",
    value:"hrms"
  },
  {
    label:"LMS",
    value:"lms"
  },
  {
    label:"SMS",
    value:"sms"
  },
]


  return (
    <div className="pura-form">
      <div className="form-modal">
        <div className="close-btn-ru" onClick={()=>setOpen(false)}>X</div>
        <h3 className="fw-bold reach-us-head">Reach Us</h3>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className="mb-3 name-wa">
              <label>Select One:</label>
              <div className="form-check" style={{ marginLeft: "40px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    onClick={() => setSelect("IT_Offerings")}
                  />
                  <label
                    className="form-check-label fw-light"
                    style={{ marginRight: "8px" }}
                  >
                    IT Offerings
                  </label>
                </div>
             
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={() => setSelect("Partnership")}
                />
                <label
                  className="form-check-label fw-light"
                  style={{ marginRight: "8px" }}
                >
                  Partnership
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={() => setSelect("Digital_Marketing")}
                />
                <label className="form-check-label fw-light">
                  Digital Marketing
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3 name-wa">
            <label>Name:</label>
            <input
              type="text"
              className="form-control mx-3"
              placeholder="Enter your name"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>handleInputChange(e)}
              required
           
            />
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">Designation:</label>
            <input
              type="text"
              className="form-control mx-3"
              placeholder="Designation:"
              name="designation"
              id="designation"
              value={formData.designation}
              onChange={(e) => handleInputChange(e)}
              required
             
            />
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">Org Name:</label>
            <input
              type="text"
              className="form-control mx-3"
              placeholder="Organisation Name:"
              name="organisationName"
              id="organisationName"
              value={formData.organisationName}
              onChange={(e) => handleInputChange(e)}
              required
             
            />
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control mx-3"
              placeholder="Email address"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
              required
             
            />
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">Phone No:</label>
            <input
              type="number"
              className="form-control mx-3"
              placeholder="Phone Number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="mb-3 name-wa">
            <label>Services:</label>
            <select
              className="form-select form-control mx-3"
              aria-label="Default select example"
              name="selectService"
              value={formData.selectService}
              onChange={(e) => handleInputChange(e)}
            >
              <option selected>Select service</option>
              {
                serviceData.map((item,index) => {
                  return(
                    <option key={index} value={item.value}>{item.label}</option>
                  )
                })
              }
           
            </select>
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control mx-3"
              placeholder="Message"
              style={{ height: "100px" }}
              name="message"
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
              required
            ></textarea>
          </div>
          <div className="mb-3 name-wa">
            <label className="form-label">City:</label>
            <input
              type="text"
              className="form-control mx-3"
              placeholder="City"
              name="city"
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <button
            className="submit-btn-ru"
            onClick={saveForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachUsForm;
