import Ipad from '../../assets/iPad.png'
import Benefits from '../../assets/Group 75.png'
import Tick from '../../assets/Item.png'
import Dot from '../../assets/Ellips-e.png'
import Product from '../../assets/Group 132.png'
import Download from '../../assets/Vector.png'
import Arrow from '../../assets/arrow-top.png'
import AnnamLogo from '../../assets/AnnamLogo.png'
import Grp10 from '../../assets/GroupE.png'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'

const Who = () => {
  const nav = useNavigate()
  return (
    <div>
      <div className="Bann-ri">
        <div>
          <div className="who-ri">
            <h1>Rice Mill</h1>

            <div className="home-about-dot-ri">
              <p>Product</p>
              <img
                className=""
                style={{ marginTop: '11px' }}
                src={Dot}
                alt=""
              />
              <p>ERP</p>
              <img
                className=""
                style={{ marginTop: '11px' }}
                src={Dot}
                alt=""
              />
              <p style={{ color: '#f76c24' }}>Rice Mill</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-ri">
        <div className="tes-m-ri">
          <h6 className="fw-light"> OUR PRODUCT </h6>

          <h2 className="fw-bold">
            Transforming Rice Mill Operations with Innovative ERP Solutions!
          </h2>

          <p>
            At Orive Solutions, we specialize in revolutionizing rice mill
            processes through cutting-edge Enterprise Resource Planning (ERP)
            solutions. Our tailored ERP system is designed to address the unique
            challenges faced by the rice mill industry, ensuring enhanced
            efficiency, optimal resource utilization, and streamlined
            operations.
          </p>
          <div className="heading-ri">
            <img src={Tick} alt="" className="direct-r" />
            <div>
              <h3>Industry Expertise</h3>
              <div className="dir-m-ri">
                <p>
                  With years of expertise in ERP solutions, we understand the
                  intricacies of the rice mill industry and have crafted a
                  solution that caters specifically to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="heading-ri">
            <img src={Tick} alt="" className="direct-r" />
            <div>
              <h3>Tailored Features</h3>
              <div className="dir-m-ri">
                <p>
                  Our ERP system for rice mills incorporates features such as
                  production planning, inventory tracking, quality control, and
                  supply chain optimization – all customized for the rice
                  milling process.
                </p>
              </div>
            </div>
          </div>
          <div className="heading-ri">
            <img src={Tick} alt="" className="direct-r" />
            <div>
              <h3>Seamless Integration</h3>
              <div className="dir-m-ri">
                <p>
                  Experience a hassle-free transition as our ERP seamlessly
                  integrates into your existing workflow, minimizing disruptions
                  and maximizing productivity.
                </p>
              </div>
            </div>
          </div>
          <div className="button-get-r" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              Get Started
              <img src={Arrow} className="arrow-top-r mb-2" />
            </button>
          </div>
        </div>

        <div className="rice-ir">
          <img src={Product} alt="" className="" />
        </div>
      </div>

      <div className="about-v-r">
        <div className="rice-b">
          <img src={Benefits} alt="" className="hand-img-r" />
        </div>

        <div className="text-v-r">
          <h6 className="fw-light">BENEFITS</h6>

          <h2 className="fw-bold">
            Unlocking Efficiency And Growth: The Benefits of ERP Software For
            Rice Mills
          </h2>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Precision in Production</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Real-time Inventory Management</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Enhanced Quality Control</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Improved Traceability</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Seamless Supply Chain Integration</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Data-Driven Decision Making</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Cost Savings and Resource Optimization</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Compliance Assurance</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Scalabiity for Future Growth</p>
          </div>
          <div className="dir-v-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Enhanced Customer Satisfaction</p>
          </div>
          <div className="button-get-ri" type="button">
            <button onClick={() => nav('/reachus')} className="who-btn-gs">
              Get Started
              <img src={Arrow} className="arrow-top-r mb-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="res-erp-ri">
        <div className="feat-s-ri">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p className="fw-bold">Welcome to Annam</p>
          </div>
        </div>
        <div className="ipad-i">
          {' '}
          <img src={Ipad} alt="" className="rice-mill-img" />
        </div>
        <div className="ipad-para">
          <p>
            Your gateway to streamlined rice mill management. Our ERP solution
            ensures seamless operations with a user-friendly login interface.
            Experience real-time inventory tracking, efficient procurement, and
            automated reporting. Enhance productivity with modules tailored for
            rice mills. Empower your business with Annam - where every login
            opens the door to precision, efficiency, and growth. Revolutionize
            your rice mill operations today!
          </p>

          <h3 style={{ fontWeight: '600' }}>
            Revolutionize your rice mill operations today!
          </h3>
        </div>
      </div>

      <div className="mission-ri">
        <div className="tes-m-ri">
          <h6 className="fw-light">BENEFITS</h6>

          <h2 className="fs-3 fw-bold">
            Advantages of Our Annam ERP Software for Rice Mills
          </h2>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Assistance in making Bargain Decision</p>
          </div>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>
              Lab test each sample and apply quality deductions while making
              payments
            </p>
          </div>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Assistance in making Sales Decision</p>
          </div>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>
              Machine interface feature takes production management to next
              level
            </p>
          </div>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Saves Management time on tracking production and Costing</p>
          </div>
          <div className="dir-m-r-r">
            <img src={Tick} alt="" className="direct-r" />
            <p>Annam helps in Fund and Finance Process</p>
          </div>
          <div>
            <img src={AnnamLogo} className="logo-r" />
          </div>
          <div className="button-get-r" type="button">
            <button>
              {' '}
              Download Brochure
              <img src={Download} className="down-r" />
            </button>
          </div>
        </div>

        <div className="groupE">
          <img src={Grp10} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Who
