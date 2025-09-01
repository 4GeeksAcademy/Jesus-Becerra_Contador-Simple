import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const DigitCard = ({ value }) => {
  return (
    <div className="col">
      <div className="card shadow-sm text-center h-100" style={{ minHeight: "250px" }}>
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="display-1 fw-bold">{value}</div>
        </div>
      </div>
    </div>
  );
};


const Home = ({ segundos = 0 }) => {
  const padded = String(Math.max(0, segundos)).padStart(6, "0");
  const [d0, d1, d2, d3, d4, d5] = padded.split("");

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contador</h1>
      <div className="row align-items-center">
        <div className="col-2">
          <i className="fas fa-clock fa-8x"></i>
        </div>
        <div className="col-12 col-md-10">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 justify-content-center">
            <DigitCard value={d0} />
            <DigitCard value={d1} />
            <DigitCard value={d2} />
            <DigitCard value={d3} />
            <DigitCard value={d4} />
            <DigitCard value={d5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;