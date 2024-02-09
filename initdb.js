const db = require("better-sqlite3")("tutors.db");

// const applications = [
//     { name: "test", phone: "+1234567890" },
//     { name: "tester", phone: "+0987654321" },
// ];

db.prepare(
    `
    CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL
)`
).run();

db.prepare(
    `
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        text TEXT NOT NULL
)`
).run();

// const initDB = async () => {
//     const stmt = db.prepare(`
//     INSERT INTO applications VALUES (
//         null,
//         @name,
//         @phone
//     )
//     `);

//     for (const application of applications) {
//         stmt.run(application);
//     }
// };

// initDB();
