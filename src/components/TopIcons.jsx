import { useHistory } from "react-router-dom";
import icon1 from "./Assets/mile2-aseets/icons/1.svg"
import icon2 from "./Assets/mile2-aseets/icons/2.svg"
import icon3 from "./Assets/mile2-aseets/icons/3.svg"
import icon4 from "./Assets/mile2-aseets/icons/4.svg"
import icon5 from "./Assets/mile2-aseets/icons/5.svg"
import icon6 from "./Assets/mile2-aseets/icons/6.svg"

export default function BottomIcons() {
  const history = useHistory();
  const icons = [
    { path: icon1, val: "YENİ! Kore" },
    { path: icon2, val: "Pizza" },
    { path: icon3, val: "Burger" },
    { path: icon4, val: "Kızartmalar" },
    { path: icon5, val: "Fast Food" },
    { path: icon6, val: "Gazlı İçecekler" },
  ];
  const handleClick = () => {
    history.push("/orderForm")
  };
  return (
    <div className="top-icons">
      {icons.map((icons, index) => {
        return (
          <div key={index} className="bottom-icon-container">
            <button onClick={handleClick} className="bottom-icons-button">
              <img src={icons.path} />
              {icons.val}
            </button>
          </div>
        );
      })}
    </div>
  );
}
