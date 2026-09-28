const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Home page - display student form
    if (req.method === "GET" && req.url === "/") {

        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Records</title>
            <style>
                body {
                    font-family: Arial;
                    margin: 40px;
                }

                form {
                    width: 350px;
                }

                input {
                    width: 100%;
                    padding: 8px;
                    margin: 8px 0;
                }

                button {
                    padding: 10px 20px;
                    cursor: pointer;
                }

                a {
                    display: block;
                    margin-top: 20px;
                }
            </style>
        </head>

        <body>

            <h1>Student Record Management</h1>

            <form method="POST" action="/add-student">

                <label>Student Name</label>
                <input type="text" name="name" required>

                <label>Roll Number</label>
                <input type="text" name="roll" required>

                <label>Course</label>
                <input type="text" name="course" required>

                <label>Email</label>
                <input type="email" name="email" required>

                <button type="submit">Add Student</button>

            </form>

            <a href="/students">View Student Records</a>

        </body>
        </html>
        `;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }

    // Receive form data
    else if (req.method === "POST" && req.url === "/add-student") {

        let body = "";

        // Receive incoming data
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        // When all data is received
        req.on("end", () => {

            const data = querystring.parse(body);

            const newStudent = {
                name: data.name,
                roll: data.roll,
                course: data.course,
                email: data.email
            };

            // Read existing students
            fs.readFile("students.json", "utf8", (err, fileData) => {

                let students = [];

                if (!err && fileData) {
                    try {
                        students = JSON.parse(fileData);
                    } catch (error) {
                        students = [];
                    }
                }

                // Add new student
                students.push(newStudent);

                // Save updated data
                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    (err) => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/plain"
                            });

                            res.end("Error saving student record.");
                            return;
                        }

                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });
    }

    // Display student records
    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile("students.json", "utf8", (err, data) => {

            let students = [];

            if (!err && data) {
                try {
                    students = JSON.parse(data);
                } catch (error) {
                    students = [];
                }
            }

            let rows = "";

            students.forEach((student, index) => {

                rows += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.roll}</td>
                    <td>${student.course}</td>
                    <td>${student.email}</td>
                </tr>
                `;
            });

            const html = `
            <!DOCTYPE html>
            <html>

            <head>
                <title>Student Records</title>

                <style>
                    body {
                        font-family: Arial;
                        margin: 40px;
                    }

                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }

                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                    }

                    th {
                        background-color: #eee;
                    }

                    a {
                        display: inline-block;
                        margin-top: 20px;
                    }
                </style>

            </head>

            <body>

                <h1>Student Records</h1>

                <table>

                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>

                    ${rows}

                </table>

                <a href="/">Add Another Student</a>

            </body>

            </html>
            `;

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(html);
        });
    }

    // Route not found
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});