import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Home() {

  let history = useHistory()

    function handleClick(){
        history.push("/orderForm")
    }


  return (
    <div className="home-page">
      <div className="home-page-div">
       <img src="./Assets/mile1-assets/tek-yemek.png" alt="logo" />
      <h1>
        <span>KOD ACIKTIRIR</span>
        <span>PİZZA DOYURUR</span>
      </h1>
      <div className="siparis-button-div">
        <button className="siparis-button" type="button" onClick={handleClick}>
            ACIKTIM
        </button>
      </div>
      </div>
    </div>
  );
}

export default Home;
