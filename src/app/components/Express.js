const express = require('express');
const app = express();

app.get('/download-cv', (req, res) => {
  // Logic to read the PDF file and send it as response
  res.download('/portfolio.pdf');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});