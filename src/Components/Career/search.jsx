import "./search.css";
import axios from "axios";
import { useState } from "react";
import Dotted from "../../assets/Ellips-e.png";
import Formsg from "../../assets/msgrp.png";
import sb from "../../assets/sb.png";


const search = () => {


  const [formData, setFormData] = useState({
    name: "",
    email:"",
    jobRole: "",
   
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  console.log(formData)


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

  return (
    <div>
      <div className="career-h">
        <h1 className="fw-bold">Careers</h1>
        <div
          className="home-about-dot-a d-flex justify-content-center fw-bold"
          style={{ marginTop: "-5px" }}
        >
          <p style={{ color: "white" }}>Home</p>
          <img className="mt-2 mx-2" src={Dotted} height={6} alt="" />
          <p style={{ color: "#f76c24" }}>Careers</p>
        </div>
      </div>
      <div className="seach-bar-top">
        <h2 className="fw-bold mx-5 my-5">Search Jobs</h2>
        <div className="search-bar-div">
          <input
            className="search-bar-bar"
            type="text"
            name=""
            id=""
            placeholder="Search the Job Role you are looking for"
          />
          <button className="search-bt-bar">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <div>
                  Search <img src={sb} alt="" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
        <h2 className="fw-bold mx-5 my-5">Latest Jobs (0)</h2>
        <button className="side-s-btn mx-5">Search</button>
        </div>
        <h4 className="fw-bold mx-5 my-5">No results For “Xyz” (0)</h4>
        <h4 className="fw-bold mx-5 my-5">SEARCH TIPS</h4>
        <p className="mx-5 my-2">There are currently no jobs available that:  match your search Criteria. Let us contact you when a matching job becomes available.
 Fill the below Form to receive job alerts.</p><br /><br /><br />
      </div>


      <div className="team-c">
        <div className="form-s">
          <h6>Stay Connected</h6>
          <div className="join-c">
            <h3>Join Our Teams</h3>
            <p>
              Search open positions that match your skills and interest. We look
              for passionate, curious, creative and solution-driven team
              players.
            </p>
          </div>
          <div className="flex gap-10 justify-center flex-wrap items-center py-10 form-cr">
            <form action="" className="form-input-c" onSubmit={handleSubmit}>
              <h1>Get Jobs Alerts</h1>
              <img src={Formsg} alt="" />

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 form-cw">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>handleInputChange(e)}
                        required
                     
                     />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      
                        value={formData.email}
                        onChange={(e) => handleInputChange(e)}
                        required
                      
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Phone Number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="number"
                        name="number"
                        id="number"
                        autoComplete="number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your Phone Number"
                      
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange(e)}
                        required
                      
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Job Role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Role:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="text"
                        name="jobRole"
                        id="jobRole"
                        autoComplete="jobRole"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your Job Role"


                        value={formData.name}
              onChange={(e) =>handleInputChange(e)}
              required
                      
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6 btn-sub">
                  <button
                    type="submit"
                    className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
