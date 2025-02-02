import React, { useState } from "react";
import Axios from "axios";
const AddMail = () => {
  const [receiver_name, setReceiverName] = useState("");
  const [letter_name, setLetterName] = useState("");
  const [sender_name, setSenderName] = useState("");
  const [department_id, setDepartmentId] = useState("");
  const [sent_date, setSentDate] = useState("");
  const [status, setStatus] = useState("Not");

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mt-2">➕ เพิ่มจดหมาย</h2>
        {/* สร้างฟอร์ม */}
        <form action="">
          <div className="mb-3">
            <input
              type="text"
              name="receiver_name"
              placeholder="ผู้รับ"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setReceiverName(event.target.value);
              }}
            />
            <input
              type="text"
              name="receiver_name"
              placeholder="ชื่อจดหมาย"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setLetterName(event.target.value);
              }}
            />
            <input
              type="text"
              name="receiver_name"
              placeholder="ชื่อผู้ส่ง"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setSenderName(event.target.value);
              }}
            />
            <input
              type="text"
              name="receiver_name"
              placeholder="ชื่อจดหมาย"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setLetterName(event.target.value);
              }}
            />
            <input
              type="text"
              name="receiver_name"
              placeholder="แผนก"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setDepartmentId(event.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMail;
