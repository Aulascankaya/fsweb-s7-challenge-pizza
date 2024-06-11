import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Home() {

  let history = useHistory()

    function handleClick(){
        history.push("/orderForm")
    }


  return (
    <div className="home-page">
      <h1>
        <span>KOD ACIKTIRIR</span>
        <span>PİZZA DOYURUR</span>
      </h1>
      <div>
        <button className="siparis-button" type="button" onClick={handleClick}>
            SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default Home;
