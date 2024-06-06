import "../Card/Card.css";
import "./Blog.css";
// import calender from '../../assets/calender.png';
// import profile from '../../assets/profile.png';
// import arrow from '../../assets/arrow.png';

export const Blog = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  author, date
}) => {
  return (
    <div className="blogs-card">
      <div className="card-container">
        {imgSrc && imgAlt && (
          <img src={imgSrc} alt={imgAlt} className="card-img" />
        )}
        {title && <h1 className="card-title">{title}</h1>}
        <div className="authAndDate">
          {author && <div className='author'>
            {/* <img src={profile} height={12} style={{marginRight:'2px', marginTop:'2px',marginBottom:'3px'}}/> */}
            <p>By {author}</p>
            </div>}
          {date && <div className='date'>
            {/* <img src={calender} height={12} style={{marginRight:'2px', marginTop:'2px',marginBottom:'3px'}}/> */}
            <p>{date}</p>
            </div>}
        </div>
        {description && <p className="card-description">{description}</p>}
        <div className="btn-arrow">
        {buttonText && link && (
          <a href={link} className="card-btn">
            {buttonText}
          </a>
        )}
        {/* <img src={arrow} style={{marginLeft:'-8px'}} height={15}></img> */}
        </div>
      </div>
    </div>
  );
};
