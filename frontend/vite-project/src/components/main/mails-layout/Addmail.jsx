import React, { useState } from "react";
import Axios from "axios";
const AddMail = () => {
  const [receiver_name, setReceiverName] = useState("");
  const [letter_name, setLetterName] = useState("");
  const [sender_name, setSenderName] = useState("");
  const [department_id, setDepartmentId] = useState("");
  const [sent_date, setSentDate] = useState("");
  const [status, setStatus] = useState("Not");

  // ตั้งสำหรับกด addmail แล้วให้เป็นค่าเดิมไม่หาย
  const [addmailList, setAddmailList] = useState([]); // [] เก็บเป็น arrays
  // กด submit และ บันทึกข้อมูล
  const addmail = async () => {
    try {
      const results = await Axios.post("http://localhost:8888/create", {
        receiver_name: receiver_name,
        letter_name: letter_name,
        sender_name: sender_name,
        department_id: department_id,
        sent_date: sent_date,
        status: status,
      });
      // กดข้อมูลเป็น Array
      setAddmailList([
        // เพิ่มข้อมูลลงใน array
        ...addmailList,
        {
          receiver_name: results.data.receiver_name,
          letter_name: results.data.letter_name,
          sender_name: results.data.sender_name,
          department_id: results.data.department_id,
          sent_date: results.data.sent_date,
          status: results.data.status,
        },
      ]);
    } catch (err) {
      console.error(err);
      console.error("Error adding mail", err);
    }
  };
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
              name="letter_name"
              placeholder="ชื่อจดหมาย"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setLetterName(event.target.value);
              }}
            />
            <input
              type="text"
              name="sender_name"
              placeholder="ชื่อผู้ส่ง"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setSenderName(event.target.value);
              }}
            />
            <input
              type="text"
              name="department_id"
              placeholder="แผนก"
              className="border p-2 m-2"
              required
              onChange={(event) => {
                setDepartmentId(event.target.value);
              }}
            />
            <input
              type="date"
              name="sent_date"
              placeholder="วันที่ส่ง"
              className="border p-2 m-2"
              value={sent_date}
              onChange={(event) => {
                setSentDate(event.target.value); // ใช้ event.target.value
              }}
            />
            <select
              name="status"
              id="status"
              className="border p-2 m-2"
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="NOT">ยังไม่ได้รับ</option>
              <option value="RECEIVED">รับแล้ว</option>
            </select>
            <button
              type="submit"
              className="bg-primary text-white p-2 m-2"
              onClick={addmail}
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMail;
