import React from "react";
// import รายชื่อ Member.jsx
import Members from "./Members.jsx";
export const Home = () => {
  return (
    <>
      {/* ทำที่ดูค่าเฉลี่ยจดหมาย */}
      <section className="Avmail container text-center">
        <div className="container bg-danger mt-5 p-1 rounded-3">
          <h2>จดหมายรวม</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">จดหมายที่ยังไม่ได้รับ</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">จดหมายที่รับแล้ว</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ดูรายชื่อ */}
        <Members />
      </section>
    </>
  );
};

export default Home;
