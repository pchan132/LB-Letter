// ไฟล์ เชื่อมต่อกับ Mysql
const mysql = require ('mysql2/promise');// promises

const initMysql = async () => {
  try {
    conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "lb_letters",
      port: 3306,
    });
    console.log("Connected to MySQL server");
    return conn;
  } catch (error) {
    console.error("Failed to connect to MySQL server", error);
    process.exit(1);
  }
};

module.exports = initMysql;
