const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Temporary Storage for Events
let events = [];

// API: Get all events
app.get('/api/events', (req, res) => {
  res.json(events);
});

// API: Create new event from Organizer
app.post('/api/events', (req, res) => {
  const newEvent = { id: Date.now(), ...req.body, status: 'Pending' };
  events.push(newEvent);
  res.status(201).json({ message: 'Event saved in Backend Server! 🎉', event: newEvent });
});

// Start Server on Port 5000
app.listen(5000, () => console.log('Backend Server running on http://localhost:5000 🚀'));