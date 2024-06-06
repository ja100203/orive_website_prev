import Dotted from '../../assets/Dotted.png'
import Tick from '../../assets/Item.png'
import Arrow from '../../assets/arrow-top.png'
import Download from '../../assets/Vector.png'
import Point from '../../assets/point.png'
import HRM from '../../assets/hrmd.png'
import HRM2 from '../../assets/hrm2.png'
import Grop from '../../assets/grop-c.png'
import Grp from '../../assets/grp-c.png'
import Grp1 from '../../assets/room.png'
import Grp2 from '../../assets/rro.png'
import Grp4 from '../../assets/bed.png'
import ArrowHover from '../../assets/hov-arr.png'
import mount from '../../assets/mount.png'
import tickBoard from '../../assets/tickBoard.png'
import thumb from '../../assets/thumbTick.png'
import teer from '../../assets/teer.png'
import cycle from '../../assets/upCycle.png'
import { useNavigate } from 'react-router-dom'

const Journal = () => {
  const nav = useNavigate()
  return (
    <div className="erp-h">
      <div className="erp-header-h">
        <h1 className="fw-bold" id="hrm-head">
          Human Resources Management System
        </h1>
        <div className="erp-litag-h">
          <ul className="d-flex justify-content-center">
            <li style={{ fontWeight: '600' }}>
              Product
              <span>
                <img src={Dotted} alt=""></img>
              </span>
            </li>
            <li style={{ color: 'rgba(254, 93, 20, 1)', fontWeight: '600' }}>
              HRMS
            </li>
          </ul>
        </div>
      </div>
      <div className="mission-i-h">
        <div className="tes-m-h">
          <h6>OUR PRODUCT</h6>

          <h2>
            Streamline, Automate, and Optimize Your HR Operations with Our
            Powerful HRMs
          </h2>

          <p>
            <span style={{ textDecoration: 'none' }} className="fs-6">
              At Orive Solutions, your all-in-one HRMS designed to simplify and
              enhance your HR workflows. Our comprehensive solution empowers
              businesses to manage human resources effortlessly, from
              recruitment to retirement.
            </span>
          </p>
          <div className="heading-h">
            <div className="tick-content">
              <img src={Tick} alt="" className="direct-h" />
              <div>
                <h3>Increased Efficiency</h3>
                <div className="dir-m-h">
                  <p>
                    Save time and resources with streamlined HR processes. Focus
                    on strategic initiatives while [Product Name] takes care of
                    the routine tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="tick-content">
              <img src={Tick} alt="" className="direct-h" />
              <div>
                <h3>Enhanced Employee Engagement</h3>
                <div className="dir-m-h">
                  <p>
                    Stay compliant with local and international HR regulations.
                    Automated compliance checks reduce the risk of legal issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="tick-content">
              <img src={Tick} alt="" className="direct-h" />
              <div>
                <h3>Improved Compliance</h3>
                <div className="dir-m-h">
                  <p>
                    Empower your employees with self-service options. Foster a
                    positive workplace culture with improved communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="tick-content">
              <img src={Tick} alt="" className="direct-h" />
              <div>
                <h3>Data-driven Decision Making</h3>
                <div className="dir-m-h">
                  <p>
                    Access real-time analytics for informed decision-making.Make
                    strategic HR decisions backed by actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-get-h" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              Get Started
              <img src={Arrow} className="arrow-top-h mb-2" />
            </button>
          </div>
        </div>

        <div className="hrm-i">
          <img src={HRM2} alt="" className="hrms-img" />
        </div>
      </div>

      <div className="res-erp-h">
        <div className="feat-s-h">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p className="fw-bold">Feature & Benefits</p>
          </div>
          <div className="fab">
            <div className="featureAndBenefit">
              <div className="sq-card">
                <div className="mount-div">
                  <img className="mount" src={mount} alt="" />
                </div>
                <div className="half-up-img">
                  <img src={tickBoard} height={130} alt="" />
                </div>
                <div className="card-desc-checkOut">
                  <p className="fs-6">PROVEN TRACK RECORDS</p>
                  <p id="checkOut-p">
                    Orive Solution’s delivery track record is impeccable and
                    this significantly differentiates it from its competitors.
                  </p>
                </div>
                <hr className="hr-line" />
              </div>
              <div className="sq-card">
                <div className="mount-div">
                  <img className="mount" src={mount} alt="" />
                </div>
                <div className="half-up-img">
                  <img src={thumb} height={130} alt="" />
                </div>
                <div className="card-desc-checkOut">
                  <p className="fs-6">RELIABILITY AND STABILITY</p>
                  <p id="checkOut-p">
                    Our HRMS has demonstrated high system uptime and robust
                    performance, ensuring that critical HR processes run
                    smoothly without disruptions.
                  </p>
                </div>
                <hr className="hr-line" style={{ marginTop: '22px' }} />
              </div>
              <div className="sq-card">
                <div className="mount-div">
                  <img className="mount" src={mount} alt="" />
                </div>
                <div className="half-up-img">
                  <img src={teer} height={130} alt="" />
                </div>
                <div className="card-desc-checkOut">
                  <p className="fs-6">RESULT ORIENTED DELIVERY</p>
                  <p id="checkOut-p">
                    {' '}
                    Delivers faster with better mapping due to industry
                    experience and proven methodology.
                  </p>
                </div>
                <hr className="hr-line" />
              </div>
              <div className="sq-card">
                <div className="mount-div">
                  <img className="mount" src={mount} alt="" />
                </div>
                <div className="half-up-img">
                  <img src={cycle} height={130} alt="" />
                </div>
                <div className="card-desc-checkOut">
                  <p className="fs-6">CONTINUOUS IMPROVEMENT</p>
                  <p id="checkOut-p">
                    Our commitment to continuous improvement is evident in our
                    regular software updates and enhancements.
                  </p>
                </div>
                <hr className="hr-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="setence-drs-h">
        <h6 className="fs-6 check-out-head">CHECK OUT OUR THE</h6>
        <p className="fw-bold fs-2">Core Modules</p>
        <div className="sentence-dr-h">
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Onboarding Management System
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
             <p>  Orive Solutions' HRMS software features an advanced Onboarding
                Module, simplifying the employee integration process. Seamlessly
                manage documentation, tasks, and training, ensuring a smooth and
                efficient onboarding experience. Enhance new hires' engagement
                from day one with our intuitive, user-friendly interface,
                fostering a positive and productive start to their journey.
                </p>    </div>
              
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Attendance & Leave Management System
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
             <p>   Orive Solutions HRMS Attendance & Leave module ensures seamless
                workforce management. Track employee attendance in real-time,
                automate leave requests, and enhance accuracy in payroll
                processing. Our user-friendly interface simplifies attendance
                tracking, promoting efficiency and compliance, while empowering
                employees to manage their leave requests effortlessly.
                </p>    </div>
              
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Performance Management
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
           <p>    Performance Management Module optimizes workforce productivity.
                Track employee performance, set goals, and foster continuous
                improvement. Our intuitive interface streamlines reviews,
                providing actionable insights for informed decision-making.
                Elevate your organization with a robust, user-friendly solution
                that ensures peak performance and drives overall success.
                </p>    </div>
             
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Task Management
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
            <p>    Control your bottom line and prepare for change in the future
                with Orive Solutions financial management and accounting system.
                covers financial, personnel, cost and budget accounting,
                commitments, and fixed assets. In addition, it easily handles
                transfers from one country to another, and between subsidiaries
                and your headquarters.
                </p>  </div>
             
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Payroll
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
             <p>  Payroll Module ensures seamless and error-free payroll
                processing. Automate calculations, tax deductions, and
                compliance, reducing administrative burdens. With a proven track
                record, our module guarantees accurate and timely payroll,
                fostering financial stability and employee satisfaction within
                your organization.
                </p>    </div>
              
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Data-Driven Reports
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
           <p>    Orive Solution's HRMS offers a robust Data-Driven Reports
                module, empowering HR professionals with insightful analytics.
                Generate customizable reports on key HR metrics, from employee
                performance to attendance trends. Harness the power of data for
                informed decision-making, optimizing workforce strategies and
                enhancing overall organizational efficiency.
                </p>     </div>
              
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Training
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p">
             <p>   HRMS Training Module empowers organizations to foster employee
                growth and development seamlessly. Streamline training programs,
                assign courses, and track progress effortlessly. Enhance
                workforce skills, boost engagement, and ensure a culture of
                continuous learning, all within our intuitive HRMS platform.
                </p>   </div>
            
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
        </div>
      </div>

      <div className="mission-i-h">
        <div className="tes-m-h">
          <h6 className="fs-6">ADVANTAGES</h6>

          <h2 className="fw-bold">Advantages of Our HR Management System</h2>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Efficiency and Time Savings</p>
          </div>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Comprehensive Data Management</p>
          </div>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Enhanced Employee Engagement:</p>
          </div>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Regulatory Compliance</p>
          </div>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Actionable Analytics and Insights:</p>
          </div>
          <div className="dir-m-r-h">
            <img src={Tick} alt="" className="direct-h" />
            <p>Scalability and Adaptability</p>
          </div>

          <div className="button-get-h" type="button">
            <button>
              {' '}
              <a href="/public/HRMS Brouchre.pdf" download>
                Download Brochure
              </a>
              <img src={Download} className="down-h" />
            </button>
          </div>
        </div>

        <div className="">
          <img id="hrm-img-h" src={HRM} alt="" />
        </div>
      </div>
      <h3 className="fw-bold mb-5 fs-2" style={{ textAlign: 'center' }}>
        Explore More
      </h3>

      <div className="indst-h">
        <div className="three-img-div">
          <div className="lside-back">
            <img src={Grop} className="left-part-abs" alt=""></img>
          </div>
          <div className="rside-back">
            <img src={Grp} className="right-part-abs" alt=""></img>
          </div>
          <div className="d-flex align-items-center justify-content-center three-img">
            <div className="gr-li-h" style={{ cursor: 'pointer' }}>
              <img src={Grp1} className="sms-m" alt=""></img>
            </div>
            <div className="rside-g-img">
              <div className="gr-rp-h" style={{ cursor: 'pointer' }}>
                <img src={Grp2} className="lms-m" alt=""></img>
              </div>
              <div className="gr-r-h" style={{ cursor: 'pointer' }}>
                <img src={Grp4} className="hms-m" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal
