import axios from "axios";
import { useState } from "react";
import Dotted from "../../assets/Dotted.png";
import JournalImage from "../../assets/JournalImage.png";
import Person from "../../assets/Person.png";
import Calender from "../../assets/calender.png";
import MachineLearning from "../../assets/MachineLearning.png";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Journal = () => {
 
  const date = new Date();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    selectService:"",
    message:""
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  console.log(formData)

  const diffToast = ()  =>
  {
    toast.success("Submitted Successfully!",{
      position: "top-center"
    });
  }


  const saveForm = async () => {
    try {
      await axios.post(
        "http://localhost:8080/journalsdetails/create/journalsdetails",
        formData
      );
      console.log("Form added successfully");
      setFormData({
        name: '',
        email: '',
        selectService: '',
        message: '',

      });
    } catch (error) {
      console.error("Error saving form", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveForm();
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
    <div className="journal">
      <div className="journal-header">
        <h1 className="fw-bold">Journals</h1>
        <div className="journal-litag">
          <ul className="d-flex justify-content-center fw-bold">
            <li>
              Home
              <span>
                <img src={Dotted} alt="Dotted Image"></img>
              </span>
            </li>
            <li>
              Journal Details
              <span>
                <img src={Dotted} alt="Dotted Image"></img>
              </span>
            </li>
            <li style={{ color: "#F76C24" }}>Journal Details</li>
          </ul>
        </div>
      </div>
      <div className="journal-blog">
        <div className="journal-description">
          <div className="button-machine" type="button">
            <button className="">Machine Learning </button>
          </div>
          <h2 style={{fontWeight:'600'}} id="ml-des">Machine Learning Trends Shaping Tomorrow Technology Landscape</h2>
          <div className="person-clander">
            <div className="person">
              <img src={Person} alt="person-image" />
              <p className="my-auto">By Monalisa Rout</p>
            </div>
            <div className="calender">
              <img src={Calender} alt="calender-image" />
              <p className="my-auto">{date.toDateString()}</p>
            </div>
          </div>
        </div>
        <div className="img-journal-bg">
          <img src={JournalImage} alt="Journal Image" className="img-side-ml"></img>
        </div>
      </div>

      <div className="ourBlog">
        <div className="ourBlog-description">
          <div className="ourBlog-para">
            <p>
              Machine learning (ML) isn’t new. However, the field of big data is
              revitalizing the subject and more organizations are relying on ML
              models to scale their operations, support staff in working better
              and faster, to uncover hidden insights from data, or even confirm
              and challenge underlying assumptions. This is creating widespread
              interest in related topics with the C-suite, and across business
              lines and job roles, as enterprises embrace the value of
              artificial intelligence (AI) and ML. To make a disruptive
              organizational impact, AI and ML need to be understood and
              trusted. By consulting these ML blogs from authoritative
              individuals and organizations that satisfy different skill levels,
              readers can increase their understanding and comfort level in
              these areas, get pressing questions answered, and connect with
              others who have experience using them to great benefit.
            </p>
          </div>
          <ul>
            <li>
              <h4>
               1. OpenAI
              </h4>
              <p>
                OpenAI comes from industry experts who want to bring AI to the
                masses. Its linked to the non-profit research company OpenAI,
                co-chaired by Elon Musk and Sam Altman, and sponsored by
                companies such as Amazon Web Services, Microsoft, and Infosys
                who are trying to make AI accessible—hence the name.
                Contributors discuss their collective efforts to promote and
                advance AI technologies through long-term research. It’s a
                valuable resource for anyone interested in the future of AI.
              </p>
            </li>

            <li>
              <h4>
               2. Distill
              </h4>
              <p>
                Managed by: Shan Carter, Chris Olah, and Arvind Satyanarayan
                Distill concentrates on making ML and AI more accessible for
                readers. Traditional research can be difficult to consume, so
                Distill communicates ML research in appealing, interactive data
                visualizations. It acts as a neutral platform for multiple
                authors to publish together, and articles are peer-reviewed,
                appearing in Google Scholar. Distill is also registered with the
                Library of Congress and CrossRef.
              </p>
            </li>
            <li>
              <h4>
                3. Machine Learning is Fun
              </h4>
              <p>
                Authored by:Adam Geitgey
              </p>
              <p>
                Machine Learning is Fun is a valuable, introductory blog. It
                covers the tenets of ML through interactive tutorials and
                practical examples, which make it easier to see the useful
                applications to different businesses and industries. Author Adam
                Geitgey is a former software developer who now consults
                organizations on implementing machine learning. He believes ML
                is integral to the future of software and that developers should
                have a strong working knowledge, so he provides guides and
                techniques to help them develop and grow.
              </p>
              <img src={MachineLearning} alt="MachineLearning Image"></img>
            </li>

            <li>
              <h4>
                4. Machine Learning Mastery
              </h4>
              <p>
                A machine learning developer with several AI-related degrees,
                Jason intended his Machine Learning Mastery blog for new
                developers getting started in the field. He was once an amateur
                developer and wants to help others, imparting lessons learned
                during his professional journey and sharing the tools that
                helped him most. The blog, plus his email course and newsletter,
                accommodate any level of expertise.
              </p>
            </li>
            <li>
              <h4>
                5. FastML
              </h4>
              <p>
                Managed by:Zygmunt Zając
              </p>
              <p>
                FastML tackles interesting topics in machine learning with
                entertaining, easy to consume posts. It’s run by economist
                Zygmunt Zając, and is a go-to ML platform, tackling topics like
                overfitting, pointer networks, and chatbots, among others. If
                you’re frustrated by some of the existing ML papers that feel
                like you need a PhD in math to understand them, bookmark this
                blog.
              </p>
            </li>

            <li>
              <h4>
              6. AWS Machine Learning Blog
              </h4>
              <p>
                Amazon is heavily involved in ML, using algorithms in nearly all
                areas of its business to create leads. Algorithms suggest
                relevant products for customers in search results, recommend
                products based on recent purchases, and optimize faster product
                distribution and shipping from warehouses to customers. The blog
                features projects and guides that reveal industry strides to
                readers and covers ML uses in Amazon Web Services technology.
              </p>
            </li>
          </ul>
        </div>
        <div className="ourBlog-from">
          <form action="" className="form-o" onSubmit={handleSubmit}>
            <h1>Need Help With Development?</h1>
            <div className="in-form">
              <div className="form-ob">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>handleInputChange(e)}
                  required
                ></input>
              </div>

              <div className="form-ob">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  required
                ></input>
              </div>

              <div className="form-ob">
                <select name="selectService"
                value={formData.selectService}
                onChange={(e) => handleInputChange(e)}>
                    <option selected> Select Services</option>
                    {
                    serviceData.map((item,index) => {
                      return(
                        <option key={index} value={item.value}>{item.label}</option>
                      )
                    })
                  }
              </select>
              </div>
              <div className="form-ob">
                <label htmlFor="message"></label>
                <input
                  style={{ height: "120px", paddingBottom: "75px" }}
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
              <div className="button-submi">
                <button type="submit" onClick={diffToast}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Journal;
