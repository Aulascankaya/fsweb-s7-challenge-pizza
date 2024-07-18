import { useHistory } from "react-router-dom";
export default function BottomIcons() {
  const history = useHistory();
  const icons = [
    { path: "/1.svg", val: "Ramen" },
    { path: "/2.svg", val: "Pizza" },
    { path: "/3.svg", val: "Burger" },
    { path: "/4.svg", val: "French Fries" },
    { path: "/5.svg", val: "Fast Food" },
    { path: "/6.svg", val: "Soft Drinks" },
  ];
  const handleClick = () => {
    history.push("/orderForm")
  };
  return (
    <div className="bottom-icon-div">
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
