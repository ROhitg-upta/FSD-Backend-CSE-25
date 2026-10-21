import express from "express";

const app = express();
const PORT = 3000;

// Serve all files inside public folder
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});