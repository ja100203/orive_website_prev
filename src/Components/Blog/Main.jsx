import "./Main.css";
import { Blog } from "./Blog";
import Card1logo from "../../assets/ml.png";
import Card2logo from "../../assets/ds.png";
import Card3logo from "../../assets/fr.png";

function Main() {
  return (
    <div className="App">
      <div>
        <div className="text-blog-card-home">
          <p className="our-blog">OUR BLOG</p>
          <p className="our-blog-latest">Read our Latest Blogs</p>
        </div>
        <div className="col">
          <Blog
            imgSrc={Card1logo}
            alt="Card Image"
            imgAlt="Card Image 3"
            title="Machine Learning"
            description="Machine Learning Trends Shaping Tomorrow's Technology Landscape"
            buttonText="Read More"
            link="card2"
            author="Subham Parida"
            date="Jan 15, 2023"
          />
          <div style={{ margin: "0 60px" }}>
            <Blog
              imgSrc={Card2logo}
              alt="Card Image"
              imgAlt="Card Image 3"
              title="Data Science"
              description="From Data to Discovery: Navigating the World of Data Science"
              buttonText="Read More"
              link="card2"
              author="Subham Parida"
              date="Jan 15, 2023"
            />
          </div>
          <Blog
            imgSrc={Card3logo}
            alt="Card Image"
            imgAlt="Card Image 3"
            title="Fraud Detection"
            description="Demystifying Fraud Detection: A Simple Guide for Security"
            buttonText="Read More"
            link="card2"
            author="Subham Parida"
            date="Jan 15, 2023"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
