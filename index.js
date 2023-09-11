const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const currentDate = new Date();
  const current_day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
//   const utc_time = currentDate.toISOString();

  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const hours = String(currentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
  const utc_time = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  const responseData = {
    slack_name,
    current_day,
    utc_time,
    track,
    "github_file_url": "https://github.com/Uzo-Felix/super-goggles/blob/main/index.js",
    "github_repo_url": "https://github.com/Uzo-Felix/super-goggles.git",
    "status_code": 200,
  };

  res.setHeader('Content-Type', 'application/json');

  res.status(200).json(responseData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
