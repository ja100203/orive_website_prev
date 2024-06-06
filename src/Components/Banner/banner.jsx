import groupimg from "../../assets/Group-p.png";
import Symbol from "../../assets/Symboll.png";
import BusinessProfessional from "../../assets/image-f.png";
import Ceo from"../../assets/image-s.png";
import ManagingDirector from "../../assets/Image-p.png";
const banner = () => {
  return (
    <div style={{ paddingBottom:'50px'}} className="testimonial">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active caro-btnn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll" />

                <p>
                  <p id="test-span-text">
                  I recently hired ORIVE Solutions for a project, and overall, I was quite satisfied with the work they did. The team was highly responsive and paid close attention to my requirements, making sure to understand every detail.
                  </p>
                </p>

                <div className="dir">
                  <img src={Ceo} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Madan Rao</h4>

                    <p style={{marginTop:'-7px'}} className='md'>CEO</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll" />

                <p>
                  <p id="test-span-text">
                  As a loyal customer of Orive Solutions for several years, I have been nothing but impressed with the quality of their products and services. Their customer service is outstanding and they always put in extra effort to help me with my needs.
                  </p>
                </p>

                <div className="dir">
                  <img src={ManagingDirector} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Umesh Saha</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="card-bann">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll" />

                <p>
                  <p id="test-span-text">
                  Working with Orive Solutions was an amazing experience for me. The team was highly professional, knowledgeable, and went above and beyond to meet my expectations. They worked diligently and delivered exceptional results within the agreed timeline 
                  </p>
                </p>

                <div className="dir">
                  <img src={BusinessProfessional} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Sanjana Devi</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Business Professional</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ color: "black" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default banner;
