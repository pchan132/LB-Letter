// ไฟล์ สร้าง Server ................................
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// เพิ่ม ไฟล์แยก Mysql, index
const initMysql = require("./config/db");
const routes = require ("./routes/index");

const app = express();
// Host port
const port = 8888;
const host = "http://localhost:";

app.use(cors()); // cors middleware
app.use(bodyParser.json()); // body-parser ให้รับเป็น json

// เชื่อมต่อกับ Database
initMysql()

// ใช้งาน routes
app.use('/', routes);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${host}${port}`);
});
