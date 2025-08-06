const express = require('express');
const bodyParser = require('body-parser');
const moodRoutes = require('./routes/mood');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Dummy login API
app.post('/api/login', (req, res) => {
  const { employee, password } = req.body;
  if (employee === 'employee1' && password === 'password123') {
    return res.json({ success: true });
  }
  res.json({ success: false });
});

// Routes
app.use('/api/mood', moodRoutes);
app.use('/api/feedback', feedbackRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});