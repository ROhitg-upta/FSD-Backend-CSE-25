import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'requests.json');

app.use(cors());
app.use(express.json());

function readRequests() {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

function writeRequests(requests) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(requests, null, 2), 'utf8');
}

app.get('/api/requests', (req, res) => {
  const requests = readRequests();
  res.json(requests);
});

app.get('/api/requests/:id', (req, res) => {
  const requests = readRequests();
  const id = parseInt(req.params.id, 10);
  const request = requests.find(r => r.id === id);
  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }
  res.json(request);
});

app.post('/api/requests', (req, res) => {
  const { studentName, email, category, problemDescription, priority } = req.body;
  if (!studentName || !email || !category || !problemDescription || !priority) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const requests = readRequests();
  const newId = requests.length > 0 ? Math.max(...requests.map(r => r.id)) + 1 : 1;

  const newRequest = {
    id: newId,
    studentName,
    email,
    category,
    problemDescription,
    priority,
    createdAt: new Date().toISOString()
  };

  requests.push(newRequest);
  writeRequests(requests);

  res.status(201).json(newRequest);
});

app.put('/api/requests/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { studentName, email, category, problemDescription, priority } = req.body;

  const requests = readRequests();
  const index = requests.findIndex(r => r.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Request not found' });
  }

  const updatedRequest = {
    ...requests[index],
    studentName: studentName ?? requests[index].studentName,
    email: email ?? requests[index].email,
    category: category ?? requests[index].category,
    problemDescription: problemDescription ?? requests[index].problemDescription,
    priority: priority ?? requests[index].priority,
    updatedAt: new Date().toISOString()
  };

  requests[index] = updatedRequest;
  writeRequests(requests);

  res.json(updatedRequest);
});

app.delete('/api/requests/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const requests = readRequests();
  const index = requests.findIndex(r => r.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Request not found' });
  }

  requests.splice(index, 1);
  writeRequests(requests);

  res.json({ message: 'Request deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});