import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import TopIcons from "./TopIcons";
import Banner from "./Banner";

function Home() {

  let history = useHistory()

    function handleClick(){
        history.push("/orderForm")
    }


  return (
    <div className="home-page">
      <Banner onClick={handleClick} />
      <TopIcons/>
    </div>
  );
}

export default Home;
