import { useHistory } from "react-router-dom";
export default function TopIcons() {
  const history = useHistory();
  const icons = [
    { path: "./assets/icons/1.svg", val: "YENİ! Kore" },
    { path: "./Assets/mile2-aseets/icons/2.svg", val: "Pizza" },
    { path: "./Assets/mile2-aseets/icons/3.svg", val: "Burger" },
    { path: "./Assets/mile2-aseets/icons/4.svg", val: "Kızartmalar" },
    { path: "./Assets/mile2-aseets/icons/5.svg", val: "Fast Food" },
    { path: "./Assets/mile2-aseets/icons/6.svg", val: "Gazlı İçecekler" },
  ];
  const handleClick = () => {
    history.push("/orderForm");
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
