// Mail Management
// import Addmail สำหรับการใช้ useState
import React, { useState, useEffect } from "react";
import Axios from "axios";

export const MailM = () => {
  // set state
  const [usersList, setUsersList] = useState([]);

  // ทำการแสดง เวลา

  // ทำการเข้า API เพื่อแสดงข้อมูล
  const showMails = async () => {
    try {
      const response = await Axios.get("http://localhost:8888/show");
      setUsersList(response.data); // อัปเดต state
    } catch (error) {
      console.error(error);
    }
  };

  // เรียก API เมื่อ Component โหลด
  useEffect(() => {
    showMails();
  }, []);

  // ทำให้ status เปลี่ยนสี

  return (
    <>
      <h1 className="m-2">จัดการจดหมาย</h1>
      <div className="container">
        {usersList.map((val, key) => {
          return (
            <div key={key} className="card mt-2">
              <div className="card-body">
                <h5 className="card-title">
                  ผู้รับ {val.receiver_name} {""} {/* {""} เว้นช่อง */}
                  {/* <span className="badge bg-primary" id="statusColor">{val.status}</span> */}
                  <span /* ทำ status เปลี่ยนสี background */
                    className={`badge ${
                      val.status === "NOT" ? "bg-danger" : "bg-success"
                    }`}
                  >
                    {val.status}
                  </span>
                </h5>
                <p className="card-text">
                  ชื่อจดหมาย {val.letter_name} <br />
                  ผู้ส่ง {val.sender_name} <br />
                  {/* /* การแสดงข้อมูล type Date */}
                  วันที่ส่ง {""}
                  {val.sent_date
                    ? new Date(val.sent_date).toLocaleDateString()
                    : "ไม่มีข้อมูล"}{" "}
                  <br />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MailM;
