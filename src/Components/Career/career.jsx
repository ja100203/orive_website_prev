import React,{useEffect} from "react";
import "./career.css";
import { IoSearch } from "react-icons/io5";
import Dotted from "../../assets/Ellips-e.png";
import { FaRegBookmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import filter from "../../assets/Frame 1859.png";
import sq from "../../assets/Frame 1860.png";
import arrow from "../../assets/Group 1423.png";
import msg from "../../assets/msgrp.png";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import * as api from "./Api"

const Career = () => {
  const nav = useNavigate();
  const [job,setJob] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobRole: "",
  });



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleJobClick = (jobId) => {
    history.push(`/apply?id=${jobId}`);
  };

  const saveForm = async () => {
    try {
      await axios.post(
        "http://localhost:8080/careersgetjobAlerts/create/careersgetjobAlerts",
        formData
      );
      console.log("Form added successfully");
    } catch (error) {
      console.error("Error saving form", error);
    }
  };

  const handleSubmit = () => {
    saveForm();
  };

  const getJob= async () => {
    const result = await api.getJob()
    console.log("rec", result);
    setJob(result);
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <div className="career">
      <div className="career-h" style={{ paddingTop: "170px" }}>
        <h1 className="fw-bold">Careers</h1>
        <div className="home-about-dot-c">
          <p>Home</p>
          <img src={Dotted} height={6} className="mt-2 mx-2" alt="" />
          <p style={{ color: "#f76c24" }}>Careers</p>
        </div>
      </div>

      <div className="search-part">
        <p className="fw-bold fs-2 sj">Search Jobs</p>
        <div>
          <div className="search-input">
            <input
              className="input-field"
              type="text"
              placeholder="Search the Job Role you are looking for"
            />
            <button className="input-in-btn">
              <div className="d-flex align-items-center justify-content-center">
                <div>Search</div>
                <IoSearch style={{ marginLeft: "5px" }} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="latest-jobs">
        <div className="latest-jobs-head d-flex align-item-center justify-content-between">
          <div className="latest-jobs-head-left fs-2 fw-bold">
            Latest Jobs ({job.length})
          </div>
          <div className="latest-jobs-head-right d-flex align-item-center">
            <div className="my-auto">
              <button className="input-in-btn-grey mx-3">
                <div className="d-flex align-items-center justify-content-center">
                  <div>Saved Jobs</div>
                  <FaRegBookmark style={{ marginLeft: "5px" }} />
                </div>
              </button>
              <button className="sq-icons">
                <img src={sq} height={33} alt="" />
              </button>
              <button className="burger-icon mx-3">
                <RxHamburgerMenu />
              </button>
              <button className="sq-icons">
                <img src={filter} height={33} alt="" />
              </button>
            </div>
          </div>
        </div>
        {job.length === 0 ? (
          <div className="no-data-content">
            <p className="fs-4 fw-bold mt-3">No results For “Xyz”</p>
            <p className="fs-4" style={{ fontWeight: "600" }}>
              SEARCH TIPS
            </p>
            <p className="" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
              There are currently no jobs available that: match your search
              Criteria. Let us contact you when a matching job becomes
              available. Fill the below Form to receive job alerts.
            </p>
          </div>
        ) : (
          <div className="latest-jobs-cards">
            {job.map((data, index) => (
              <div
                key={index}
                className="latest-jobs-cards-card"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    const queryParams = `?id=${data.id}`; // Assuming 'jobId' is the unique identifier for the job
                    nav(`/apply${queryParams}`);
                  }}
                >
                <div className="border-top"></div>
                <div className="card-below-border">
                  <div className="city-country d-flex align-items-center justify-content-between">
                    <div style={{ fontWeight: "600", wordSpacing: "10px" }}>
                      {data.country}{" "}
                      <span style={{ color: "rgba(204, 204, 204, 0.80)" }}>
                        |
                      </span>{" "}
                      {data.city}
                    </div>
                    <div
                      style={{ textAlign: "center", color: "#777888" }}
                      className="mt-2"
                    >
                      <FaRegBookmark style={{ cursor: "pointer" }} />
                      <p style={{ marginTop: "-3px", fontSize: "0.8rem" }}>
                        Save
                      </p>
                    </div>
                  </div>
                  <div
                    className="card-heading-job fs-3 fw-bold"
                    style={{ lineHeight: "35px" }}
                  >
                    {data.role}
                  </div>
                  <div
                    className="card-sub-heading-job fs-6 my-3"
                    style={{ lineHeight: "20px" }}
                  >
                    <span style={{ fontWeight: "600", textDecoration: "none" }}>
                      {data.subRole}
                    </span>
                    <span
                      style={{
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      - Project Role : {data.projectRole}
                    </span>
                  </div>
                  <div className="card-business-area fs-6 mb-3">
                    <span style={{ fontWeight: "600", textDecoration: "none" }}>
                      Business Area
                    </span>{" "}
                    <span
                      style={{
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      - {data.businessArea}
                    </span>
                  </div>
                  <div
                    className="posted-ago mb-3"
                    style={{
                      textAlign: "end",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "#2F3045",
                    }}
                  >
                    Posted {data.posted} ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pagination"></div>
        <div className="joinOurTeam">
          <div className="first-half py-5" style={{ textAlign: "center" }}>
            <p style={{ color: "rgba(247, 108, 36, 1)" }}>STAY CONNECTED</p>
            <p className="fw-bold fs-1" style={{ color: "white" }}>
              Join Our Team
            </p>
            <p className="px-3" style={{ color: "white" }}>
              Search open positions that match your skills and interest. We look
              for passionate, curious, creative and solution-driven team
              players.
            </p>
           
          </div>
          <div className="second-half">
            <div className="form-modal-nahi">
              <div className="msg-tr">
                <img className="msg-tr-img" src={msg} alt="" />
              </div>
              <h3 className="fw-bold reach-us-head">Get Job Alerts</h3>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 name-wa">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control mx-3"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control mx-3"
                    placeholder="Enter your Email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa">
                  <label className="form-label">Job Role:</label>
                  <input
                    type="text"
                    className="form-control mx-3"
                    placeholder="Enter your Job Role"
                    id="jobRole"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <button className="submit-btn-ru-career">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
