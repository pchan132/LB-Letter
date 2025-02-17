const express = require("express");
const routes = express.Router();
const initMysql = require("../config/db");

// แสดงข้อมูล ใน path /show
routes.get("/show", async (req, res) => {
  try {
    // ใส่ [] ด้วย เก็บข้อมูลเป็น Array จะได้เรียกใช้กับ .map
    const [results] = await conn.query("SELECT * FROM letters");
    res.json(results);
  } catch (err) {
    console.error(err);
  }
});

// เพิ่มข้อมูล ใน path /create
routes.post("/create", async (req, res) => {
  try {
    const {
      receiver_name: receiverName,
      letter_name: letterName,
      sender_name: senderName,
      department_id: departmentId,
      sent_date: sentDate,
      received_date: receivedDate,
      status,
    } = req.body;

    // ใช้ promisify เพื่อแปลง conn.query ให้เป็น Promise
    const query =
      "INSERT INTO letters (receiver_name, letter_name, sender_name, department_id, status,received_date) VALUES (?, ?, ?, ?, ?,?)";
    const values = [
      receiverName,
      letterName,
      senderName,
      departmentId,
      status,
      receivedDate,
    ];

    // รอคำสั่ง SQL เสร็จสิ้น
    await conn.query(query, values);

    // ส่ง response กลับ
    res.json({ message: "New letter added successfully" });
  } catch (err) {
    console.error("Error adding letter:", err);
    res
      .status(500)
      .json({ error: "An error occurred while adding the letter" });
  }
});

// ลบข้อมูล
routes.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conn = await initMysql();
    const query = "DELETE FROM letters WHERE letter_id = ?";
    await conn.query(query, [id]);
    res.json({ message: "Letter deleted successfully" });
  } catch (err) {
    console.error("Error deleting letter:", err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the letter" });
  }
});

// แก้ไขข้อมูล ใน path /update/:id

module.exports = routes;
