import "./Journal.css";
import Dotted from "../../assets/Ellips-e.png";
import JournalImage from "../../assets/JournalImage.png";
import ArrowTop from "../../assets/arrow-top.png";
import Person from "../../assets/Person.png";
import Calender from "../../assets/calender.png";
import Blog from "../Journal/Blog";
import { Link, useNavigate } from "react-router-dom";

const Journal = () => {
  const nav = useNavigate();
  const date = new Date();
  return (
    <>
      <div className="journal">
        <div className="journal-header-main">
          <h1 className="fw-bold">Journals</h1>
          <div className="journal-litag-main">
            <ul className="d-flex justify-content-center fw-bold">
              <li>
                Home
                <span>
                  <img src={Dotted} alt="Dotted Image"></img>
                </span>
              </li>
              <li style={{ color: "#F76C24" }}>Journals</li>
            </ul>
          </div>
        </div>
        <div className="journal-blog-main">
          <div className="journal-description-main">
            <div className="" type="button">
              <button className="button-machine-main">Machine Learning </button>
            </div>
            <h2 className="" style={{fontWeight:'600'}}>
              Machine Learning Trends Shaping Tomorrow's Technology Landscape
            </h2>
            <div className="person-clander-main">
              <div className="person-main">
                <img src={Person} alt="person-image" />
                <p>By Monalisa Rout</p>
              </div>
              <div className="calender-main">
                <img src={Calender} alt="calender-image" />
                <p>{date.toDateString()}</p>
              </div>
            </div>
            <div className="button-readblog-main" type="button">
              <button onClick={()=>nav('/journalDetails')}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Read Blog
                </Link>{" "}
                <img src={ArrowTop} className="arrow-top-main mb-1"></img>
              </button>
            </div>
          </div>
          <div className="img-journal-bg-main">
            <img src={JournalImage} className="journal-img-side" alt="Journal Image"></img>
          </div>
        </div>
      </div>

      <Blog />
    </>
  );
};

export default Journal;
