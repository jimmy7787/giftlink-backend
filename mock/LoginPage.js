fetch('https://example.com/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here'
  },
  body: JSON.stringify({ username: 'demo', password: 'demo123' })
});
