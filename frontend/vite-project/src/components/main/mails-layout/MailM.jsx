// Mail Management
// import Addmail สำหรับการใช้ useState
import React, { useState, useEffect } from "react";
import Axios from "axios";

export const MailM = () => {
  // set state
  const [usersList, setUsersList] = useState([]);
  // ทำการเข้า API เพื่อแสดงข้อมูล
  const showMails = async () => {
    try {
      const response = await Axios.get("http://localhost:8888/show");
      setUsersList(response.data); // อัปเดต state
    } catch (error) {
      console.error(error);
    }
  };

  // ทำการลบข้อมูล
  const deleteUser = async (id) => {
    try {
      await Axios.delete(`http://localhost:8888/delete/${id}`);
      setUsersList(usersList.filter((user) => user.id !== id)); // Remove user from state
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  // เรียก API เมื่อ Component โหลด
  useEffect(() => {
    showMails();
  }, [usersList]);

  // ทำให้ status เปลี่ยนสี

  return (
    <>
      <h1 className="m-2">จัดการจดหมาย</h1>
      <div className="container">
        {usersList.map((user, index) => {
          return (
            <div key={index} className="card text-left mb-3 ">
              <div className="card-header p-3 d-inline">
                <h5 className="d-inline">
                  {index + 1}. <b>ผู้รับ: </b> {user.receiver_name}
                </h5>
                <span
                  className={`badge ${
                    user.status === "NOT" ? "bg-danger" : "bg-success"
                  } p-2 `}
                  style={{ margin: "0px 0px 0px 10px" }}
                >
                  {user.status === "NOT" ? "ยังไม่ได้รับ" : "ได้รับแล้ว"}
                </span>
              </div>
              <div className="card-body text-center ">
                <p className="card-text h5">
                  <b>จดหมาย: </b> {user.letter_name} <br />
                  <b>ผู้ส่ง: </b> {user.sender_name} <br />
                  <b>วันที่ส่ง: </b>
                  {user.received_date
                    ? new Date(user.received_date).toLocaleDateString()
                    : "ไม่มีข้อมูล"}
                </p>
                
                  <button
                    className="btn btn-danger "
                    onClick={() => deleteUser(user.letter_id)}
                  >
                    DELETE
                  </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MailM;
