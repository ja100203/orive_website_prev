import Dotted from '../../../assets/Ellips-e.png'
import ErpImage from '../../../assets/Erpi.png'
import Grop from '../../../assets/grop-c.png'
import Grp from '../../../assets/grp-c.png'
import Point from '../../../assets/point.png'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import mount from '../../../assets/mount.png'
import tickBoard from '../../../assets/tickBoard.png'
import thumb from '../../../assets/bulb.png'
import teer from '../../../assets/teer.png'
import cycle from '../../../assets/dollar.png'
import ArrowHover from '../../../assets/hov-arr.png'
import metal from '../../../assets/metal.png'
import steel from '../../../assets/steel.png'
import rice from '../../../assets/ricee.png'
import infra from '../../../assets/infra.png'

const Erp = () => {
  return (
    <div className="erp">
      <div className="erp-header-e">
        <h1 className="fw-bold">Enterprise Resource Planning</h1>
        <div className="home-about-dot-e">
          <p>Product</p>
          <img className="mt-2" src={Dotted} alt="" />
          <p style={{ color: '#f76c24' }}>ERP</p>
        </div>
      </div>
      <div className="erp-blog-e">
        <div className="erp-description-e">
          <div className="about-erp-e-erp">
            <h6 className="fs-6">ABOUT ERP</h6>
            <h2 className="fw-bold" id="dsc-erp">
              The Transformative Role of ERP Solutions in the Digital Era
            </h2>
            <div className="paragraph-erp-e">
              <p>
                ERP (Enterprise Resource Planning) is the linchpin of industrial
                operations, providing a crucial backbone to navigate the
                intricacies of diverse processes. In the digital era, industries
                face unique challenges, necessitating robust solutions, and ERP
                software emerges as the ideal answer. Tailored for
                manufacturing, steel, plastic, and construction industries, it
                addresses contemporary needs. The best ERP system in India is
                essential to meet these modern requirements, ensuring businesses
                stay agile in the face of digital advancements.
              </p>
              <p>
                At the heart of ERP's efficacy lie its interconnected modules,
                including finance, accounts, inventory, project management,
                production planning, and supply chain management. This network
                facilitates seamless information flow, stored centrally for
                instant access. Recognizing the imperative role of the best ERP
                for the industry, it becomes an indispensable tool, optimizing
                operations and enabling comprehensive information management in
                today's dynamic business landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="image-erp-e">
          <img src={ErpImage} alt="Journal Image"></img>
        </div>
      </div>

      <div className="res-erp">
        <div className="feat-s">
          <h6 className="fs-6 fw-light">CHECK OUT OUR THE</h6>
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
                  <p className="fs-6">INDUSTRY SPECIFIC SOLUTION</p>
                  <p id="checkOut-p">
                    Application is highly customized to specific requirements of
                    different industries
                  </p>
                </div>
                <hr className="hr-line" style={{ marginTop: '57px' }} />
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
                  <p className="fs-6">REDUCE TOTAL COST OF OWNERSHIP</p>
                  <p id="checkOut-p">
                    Optimum use of resources in onsite-offsite model to keep the
                    TCO low.
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
            <div className="d-flex heading-e align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Finance and Accounting
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  {' '}
                  Control your bottom line and prepare for change in the future
                  with Orive Solutions financial management and accounting
                  system. covers financial, personnel, cost and budget
                  accounting, commitments, and fixed assets. In addition, it
                  easily handles transfers from one country to another, and
                  between subsidiaries and your headquarters.
                </p>{' '}
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex heading-e align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Sales and Distribution
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  {' '}
                  Give your salespeople the edge they need to accelerate
                  productivity and sales performance. Orive Solutions ERP
                  rovides a 360 degree view of their customer and go from quote
                  to cash effortlessly Quick access to information concerning
                  products, price lists, discounts, and transporter. Issue
                  customer quotations, book orders, transmit order
                  acknowledgements, manage contracts, view and allocate goods
                  from stock, and manage the dispatch and invoicing of goods.
                  Advanced features for Inventory enquiries and allocations,
                  Brokerage Sales commissions, Multi-level credit control ,
                  Pricing and discounts, Customer returns, Invoicing and
                  reminders
                </p>{' '}
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex heading-e align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Material Management
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  {' '}
                  Seamlessly manage the purchasing process from purchase
                  requests, orders, deliveries, subcontract orders. approval
                  process from order through receipt and invoicing. Orive
                  Solutions ERP has multi-site, multi-warehouse and
                  multi-location management with total traceability of inventory
                  quantities and lot and batch numbers. Advanced features for
                  Supplier and product classification, Pricing and discounts,
                  tolerances, inventory balances and reorder level, lead days
                  and stock movement.
                </p>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex heading-e align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Manufacturing and Production Planning
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  {' '}
                  Gain real-time visibility into your operations with Orive
                  Solutions ERP. Orive Solutions ERP supports planning,
                  scheduling, and production control activities in detail for
                  process manufacturing. From production planning (make to
                  order/ make to stock), process scheduling, production
                  performance and costing. Advanced features for Bill of
                  Material, formulas, and recipes, Production cost and plant
                  Performances, Quality control & analysis.{' '}
                </p>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex heading-e align-items-center">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Order Management
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  {' '}
                  Orive Solutions pioneers ERP excellence with a focused Order
                  Management module. Seamlessly integrated, it optimizes the
                  entire order lifecycle, ensuring real-time tracking, inventory
                  accuracy, and efficient processing. Tailored for diverse
                  industries, our ERP empowers businesses with precise control,
                  enhancing customer satisfaction and operational efficiency.
                  Elevate your order processing capabilities with Orive
                  Solutions' cutting-edge ERP
                </p>{' '}
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
          <div className="designcard">
            <div className="d-flex align-items-center heading-e">
              <div>
                <img src={Point} alt="" className="point-h"></img>
              </div>
              <h5 className="mx-5" style={{ fontWeight: '600' }}>
                Warehouse Management
              </h5>
            </div>
            <div
              className="d-flex align-items-center px-3 pb-3 justify-content-between"
              style={{ marginTop: '-30px' }}
            >
              <div className="fs-6 fs-6-b fw-light w-75 mx-5 arr-hov-p hov-p">
                <p>
                  Orive Solutions' ERP introduces a powerful Warehouse
                  Management Module, revolutionizing logistical operations.
                  Benefit from real-time inventory tracking, order fulfillment
                  efficiency, barcode scanning integration, and intelligent
                  space utilization. Experience heightened productivity, reduced
                  operational costs, and enhanced accuracy. Seamlessly
                  integrating with other ERP modules, this solution ensures a
                  unified system for optimized business processes. Elevate your
                  warehouse management with Orive Solutions ERP, a comprehensive
                  tool designed for modern businesses seeking efficiency and a
                  competitive edge.
                </p>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid black', width: '100%' }} />
        </div>
      </div>
      <h3 className="fw-bold mb-5 fs-2 mt-5" style={{ textAlign: 'center' }}>
        Industry Specific Solutions
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
            <div className="gr-li-h">
              <img src={metal} className="sms-m" alt=""></img>
            </div>
            <div className="rside-g-img">
              <div className="d-flex">
                <div className="gr-rp-h">
                  <img src={steel} className="lms-m" alt=""></img>
                </div>
                <div className="gr-rp-h mx-3">
                  <img src={rice} className="lms-m" alt=""></img>
                </div>
              </div>
              <div className="gr-r-h">
                <img src={infra} className="hms-m" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Erp
