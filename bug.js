```javascript
// pages/api/data.js
export default function handler(req, res) {
  // This will cause an error because the fetch API is not available in the serverless environment
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch data' });
    });
}
```