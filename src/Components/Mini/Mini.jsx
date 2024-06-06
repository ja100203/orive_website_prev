import "./Mini.css";
import Cardlogo from "../../assets/01.png";
import Card1logo from "../../assets/02.png";
import Card3logo from "../../assets/03.png";
import Cardlogo1 from "../../assets/0101.png";
import Card1logo1 from "../../assets/0202.png";
import Card3logo1 from "../../assets/0303.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const nav = useNavigate();
  return (
    <div className="main">
      <div
        className="home-page-cards"
      >
        <div className="card-top-wala card-top-wala-l card-hov" onClick={()=>nav('/erp')}>
          <img className="three-cards-top-1" src={Cardlogo} alt="Card Image" />
          <img className="three-cards-top-11" src={Cardlogo1} alt="Card Image" />
          <div className="card-top-text">ERP</div>
        </div>
        <div className="card-top-wala" onClick={()=>nav('/')}>
          <img className="three-cards-top-2" src={Card1logo} alt="Card Image" />
          <img className="three-cards-top-22" src={Card1logo1} alt="Card Image" />
          <div className="card-top-text">CRM</div>
        </div>

        <div className="card-top-wala card-top-wala-r" onClick={()=>nav('/hrms')}>
          <img className="three-cards-top-3" src={Card3logo} alt="Card Image" />
          <img className="three-cards-top-33" src={Card3logo1} alt="Card Image" />
          <div className="card-top-text">HRM</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
