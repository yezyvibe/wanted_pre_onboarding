import React from "react";

export default function Main() {
  return (
    <div className="window">
      <ul className="container">
        <div className="cell">
          <img src="img/slide1.jpg" alt="slide1"></img>
        </div>
        <div className="cell">
          <img src="img/slide2.jpg" alt="slide2"></img>
        </div>
        <div className="cell">
          <img src="img/slide3.jpg" alt="slide3"></img>
        </div>
        <div className="cell">
          <img src="img/slide4.jpg" alt="slide4"></img>
        </div>
        <div className="cell">
          <img src="img/slide5.jpg" alt="slide5"></img>
        </div>
      </ul>
      <div className="btn-container">
        <button className="prev">👈</button>
        <button className="next">👉</button>
      </div>
    </div>
  );
}
