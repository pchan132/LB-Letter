import React, { useState } from "react";
import Axios from "axios";
const AddMail = () => {
  const [receiver_name, setReceiverName] = useState("");
  const [letter_name, setLetterName] = useState("");
  const [sender_name, setSenderName] = useState("");
  const [department_id, setDepartmentId] = useState("");
  const [sent_date, setSentDate] = useState("");
  const [status, setStatus] = useState("Not");
  const [received_date, setReceivedDate] = useState("");
  // department
  const department = [
    "แผนกวิชาช่างยนต์",
    "แผนกวิชาช่างกลโรงงาน",
    "แผนกวิชาช่างเชื่อมโลหะ",
    "แผนกวิชาช่างไฟฟ้ากำลัง",
    "แผนกวิชาช่างอิเล็กทรอนิกส์",
    "แผนกวิชาเทคโนโลยีคอมพิวเตอร์",
    "แผนกวิชาช่างก่อสร้าง",
    "แผนกวิชาเทคโนโลยีพื้นฐาน",
    "แผนกวิชาเทคนิคพื้นฐาน",
    "แผนกวิชาเทคนิคสถาปัตยกรรม",
    "แผนกวิชาอาหารและโภชนาการ",
    "แผนกวิชาคหกรรมศาสตร์",
    "แผนกวิชาสามัญสัมพันธ์ (พลานามัย)",
    "แผนกวิชาศิลปกรรม",
    "แผนกวิชาการจัดการโลจิสติกส์",
    "แผนกวิชาการบัญชี",
    "แผนกวิชาการขายและการตลาด",
    "แผนกวิชาเทคโนโลยีสารสนเทศ",
    "แผนกวิชาวิจิตรศิลป์",
    "แผนกวิชาเทคนิคอุตสาหกรรม",
    "แผนกวิชาการออกแบบนิเทศศิลป์",
    "แผนกวิชาสามัญสัมพันธ์ (ภาษาไทย)",
    "แผนกวิชาสามัญสัมพันธ์ (สังคม)",
    "แผนกวิชาสามัญสัมพันธ์ (อังกฤษ)",
    "แผนกวิชาสามัญสัมพันธ์ (คณิตศาสตร์)",
    "แผนกวิชาสามัญสัมพันธ์ (วิทยาศาสตร์)",
    "แผนกวิชาคอมพิวเตอร์กราฟิก",
    "แผนกการจัดการคหกรรมเพื่อการโรงแรม",
    "แผนกวิชาแมคคาทรอนิกส์",
    "แผนกวิชาช่างซ่อมบำรุง",
    "แผนกวิชายานยนต์ไฟฟ้า",
    "แผนกวิชาการโรงแรม",
    "แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล",
  ];
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
        received_date: received_date,
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
      // แสดงใน console สักหน่อย !!!
      console.log("New mail added successfully", results.data);
    } catch (err) {
      console.error(err);
      console.error("Error adding mail", err);
    }
  };
  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mt-2">➕ เพิ่มจดหมาย</h2>
      </div>
      {/* สร้างฟอร์ม */}
      <div className="form-group container">
        <form action="">
          {/* ชื่อคนรับ */}
          <div className="mb-3">
            <label htmlFor="receiver_name" className="form-label">
              ผู้รับ
            </label>
            <input
              type="text"
              className="form-control"
              id="receiver_name"
              name="receiver_name"
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </div>
          {/* ชื่อจดหมาย */}
          <div className="mb-3">
            <label htmlFor="letter_name" className="form-label">
              ชื่อจดหมาย
            </label>
            <input
              type="text"
              className="form-control"
              id="letter_name"
              name="letter_name"
              onChange={(e) => setLetterName(e.target.value)}
            />
          </div>
          {/* ชื่อผู้ส่ง */}
          <div className="mb-3">
            <label htmlFor="sender_name" className="form-label">
              ชื่อผู้ส่ง
            </label>
            <input
              type="text"
              className="form-control"
              name="sender_name"
              id="sender_name"
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
          {/* แผนกวิชา*/}
          <div className="mb-3">
            <label htmlFor="department_id" className="form-label">
              แผนกวิชา
            </label>
            <select
              className="form-select"
              onChange={(e) => {
                setDepartmentId(e.target.value);
                // console.log(e.target.value)
              }}
            >
              <option value="none">เลือกแผนกวิชา</option>
              {department.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          {/* วันที่รับ */}
          <div className="mb-3">
            <label htmlFor="sent_date" className="form-label">
              วันที่รับ
            </label>
            <input
              type="date"
              className="form-control"
              id="received_date"
              name="received_date"
              onChange={(e) => setReceivedDate(e.target.value)}
            />
          </div>
          {/* สถานะ */}
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              สถานะ
            </label>
            <select
              className="form-select"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="NOT">ยังไม่รับ</option>
              <option value="RECEIVED">รับแล้ว</option>
            </select>
          </div>
          {/* ส่งข้อมูล */}
          <button 
          type="button" 
          onClick={addmail}
          className="btn btn-primary"
          >ส่งข้อมูล</button>
        </form>
      </div>
    </>
  );
};

export default AddMail;
