import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use("/files", express.static("files"));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});