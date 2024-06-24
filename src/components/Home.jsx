import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import TopIcons from "./TopIcons";
import Banner from "./Banner";

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/orderForm");
  }

  return (
    <div className="home-page">
      <Banner onClick={handleClick} />
      <TopIcons />
      <div className="first-section">
        <div className="images-section">
          <div className="ozel-lezzetus">
            <div>
              <h2>
                <span>Özel</span>
                <span>Lezzetus</span>
              </h2>
              <p>Position Absolute Acı Burger</p>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="hackathlon-npm-container">
            <div className="hackathlon">
              <h4>
                <span>Hackathlon </span>
                <span>Burger Menü</span>
              </h4>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER
              </button>
            </div>
            <div className="npm">
              <h4>
                <span style={{ color: "#ce2829" }}>Çooooook</span>
                <span>hızlı</span>
                <span>npm gibi kurye</span>
              </h4>
              <button
                className="siparis-buton"
                type="button"
                onClick={handleClick}
              >
                SİPARİŞ VER{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="context">
          <p className="first-text">en çok paketlenen menüler</p>
          <p className="second-text">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
