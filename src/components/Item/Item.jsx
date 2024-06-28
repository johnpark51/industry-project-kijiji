import "./Item.scss";
import lama from "../../assets/images/download.jpeg";
import { useNavigate } from "react-router-dom";
const Item = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/msg");
  };
  return (
    <div className="item-container">
      <h1 className="item-container__header">My Messages</h1>
      <div className="item-container__contents">
        <button className="item-container__contents--btn btn1">
          All Messages
        </button>
        <button className="item-container__contents--btn">My Ads</button>
        <button className="item-container__contents--btn btn2">
          Replying To
        </button>
      </div>
      <div className="item-container__select-btn">
        <input type="checkbox" className="checkbox-item" />
        <p className="item-container__select-btn--text">Select All</p>
      </div>

      <div className="item-container__items" onClick={handleNavigate}>
        <input type="checkbox" className="checkbox-item" />
        <img src={lama} alt="item_img" />
        <div className="item-container__items-texts">
          <div className="item-container__items-texts--con">
            <div className="circle"></div>
            <p className="item-container__items-texts--header">
              2008 Mazdar 3 3000miles
            </p>
          </div>
          <p className="item-container__items-texts--msg">
            Hi, is this still available?
          </p>
          <div className="item-container__items-texts--con">
            <div className="circle--A">A</div>
            <p className="item-container__items-texts--con--name">Angelique</p>
          </div>
        </div>
        <div className="item-container__items--date">Just Now</div>
      </div>
    </div>
  );
};
export default Item;
