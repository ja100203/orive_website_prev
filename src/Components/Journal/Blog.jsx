import "./Blog.css";
import Group from "../../assets/group.jpg";
import calender from "../../assets/calender.png";
import profile from "../../assets/profile.png";
import Card1logo from "../../assets/ml.png";
import Card2logo from "../../assets/ds.png";
import Card3logo from "../../assets/fr.png";

// import arrow from '../../assets/arrow.png';

const Blog = () => {
  return (
    <div>
      <div className="name-header">
        <p style={{ textDecoration: "none" }}> OUR BLOGS</p>
        <h2>Read our Latest Blogs</h2>
      </div>
      <div className="blog">
        <div className="blog-container">
          <div className="blogs-card">
            <div className="card-container">
              <img src={Card1logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Aditi Mishra</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">Jan 15, 2023</p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>
          <div className="blogs-card">
            <div className="card-container">
              <img src={Card2logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Subham Parida</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}>
                    Jan 15, 2023
                  </p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>
          <div className="blogs-card">
            <div className="card-container">
              <img src={Card3logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Subham Parida</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">Jan 15, 2023</p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>
          <div className="blogs-card">
            <div className="card-container">
              <img src={Card2logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Subham Parida</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">Jan 15, 2023</p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>

          <div className="blogs-card">
            <div className="card-container">
              <img src={Card1logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Subham Parida</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">Jan 15, 2023</p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>
          <div className="blogs-card">
            <div className="card-container">
              <img src={Card2logo} alt="Card Image 3" className="card-img" />
              <h1 className="card-title">Machine Learning</h1>
              <div className="authAndDate">
                <div className="author">
                  <img
                    src={profile}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">By Subham Parida</p>
                </div>
                <div className="date">
                  <img
                    src={calender}
                    height={12}
                    style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
                  />
                  <p className="paragraph-style">Jan 15, 2023</p>
                </div>
              </div>
              <p className="card-description">
                Machine Learning Trends Shaping Tomorrow's Technology Landscape
              </p>
              <div className="btn-arrow">
                <a href="card2" className="card-btn">
                  Read More
                </a>
                <img
                  src="/src/assets/arrow.png"
                  height={15}
                  style={{ marginLeft: "-8px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="recent-blog">
          <h4>Recent Post</h4>
          <div className="recent">
            <img src={Group} alt="ghjhe" />
            <p>From Data to Discovery: Navigating the World of Data Science</p>
          </div>
          <div className="posts">
            <img
              src={profile}
              height={8}
              style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
            />
            <p className="paragraph-style">By Aditi Mishra</p>
          </div>

          <div className="recent">
            <img src={Card1logo} alt="ghjhe" />
            <p>Demystifying Fraud Detection: A Simple Guide for Security</p>
          </div>
          <div className="posts">
            <img
              src={profile}
              height={8}
              style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
            />
            <p className="paragraph-style">By Aditi Mishra</p>
          </div>

          <div className="recent">
            <img src={Card2logo} alt="ghjhe" />
            <p>
              Machine Learning Trends Shaping Tomorrow's Technology Landscape
            </p>
          </div>
          <div className="posts">
            <img
              src={profile}
              height={8}
              style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
            />
            <p className="paragraph-style">By Aditi Mishra</p>
          </div>
          <div className="recent">
            <img src={Card3logo} alt="ghjhe" />
            <p>From Data to Discovery: Navigating the World of Data Science</p>
          </div>
          <div className="posts">
            <img
              src={profile}
              height={8}
              style={{ marginRight: 2, marginTop: 2, marginBottom: 3 }}
            />
            <p className="paragraph-style">By Aditi Mishra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
