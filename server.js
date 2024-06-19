const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Optionally, serve static files from 'public/public' subdirectory
app.use('/public', express.static(path.join(__dirname, 'public', 'public')));

// Example route handler for serving HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
