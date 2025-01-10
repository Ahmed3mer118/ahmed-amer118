import React from "react";
import Footer from "../Component/Footer";

function Quiz() {
  return (
    <>
    <div className="container row p-4 mx-auto">
        <h1 className="mt-4 text-center text-light">Quiz App </h1>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz1.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz2.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz3.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz4.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz5.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
        <img src="/image/quiz6.png" className="w-100" style={{height:"250px"}} alt="quiz1" />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Quiz;
