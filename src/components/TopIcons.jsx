import { useHistory } from "react-router-dom";
export default function TopIcons() {
  const history = useHistory();
  const icons = [
    { path: "/1.svg", val: "YENİ! Kore" },
    { path: "/2.svg", val: "Pizza" },
    { path: "/3.svg", val: "Burger" },
    { path: "/4.svg", val: "Kızartmalar" },
    { path: "/5.svg", val: "Fast Food" },
    { path: "/6.svg", val: "Gazlı İçecekler" },
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
